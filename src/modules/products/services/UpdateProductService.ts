import { Product } from '../entities/Product';
import { IUpdateProductDto } from '../dtos/UpdateProductDto';
import { ProductRepository } from '../repositories/ProductRepository';
import { BadRequestException, NotFoundException } from '@shared/errors';

export class UpdateProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  public async execute({
    id,
    name,
    price,
    quantity,
  }: IUpdateProductDto): Promise<Product> {
    const productExists = await this.productRepository.findById(id);

    if (!productExists) {
      throw new NotFoundException('There is no product with this id');
    }

    const productByName = await this.productRepository.findByName(name);

    if (productByName && productByName.id !== id) {
      throw new BadRequestException(
        'Another product with this name already exists',
      );
    }

    productExists.name = name;
    productExists.price = price;
    productExists.quantity = quantity;

    const updatedProduct = await this.productRepository.updateProduct(
      productExists,
    );

    return updatedProduct;
  }
}
