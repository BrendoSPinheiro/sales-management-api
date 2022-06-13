import { getCustomRepository } from 'typeorm';
import { Product } from '../entities/Product';
import { BadRequestException } from '@shared/errors';
import { ICreateProductDto } from '../dtos/CreateProductDto';
import { ProductRepository } from '../repositories/ProductsRepository';

export class CreateProductService {
  private readonly productRepository: ProductRepository;

  constructor() {
    this.productRepository = getCustomRepository(ProductRepository);
  }

  public async execute({
    name,
    price,
    quantity,
  }: ICreateProductDto): Promise<Product> {
    const productExists = await this.productRepository.findByName(name);

    if (productExists) {
      throw new BadRequestException(
        'There is already a product with this name',
      );
    }

    const newProduct = await this.productRepository.createProduct({
      name,
      price,
      quantity,
    });

    return newProduct;
  }
}
