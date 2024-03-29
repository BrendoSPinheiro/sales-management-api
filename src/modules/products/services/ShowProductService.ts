import { Product } from '../entities/Product';
import { NotFoundException } from '@shared/errors';
import { ProductRepository } from '../repositories/ProductRepository';

export class ShowProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  public async execute(id: string): Promise<Product> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new NotFoundException('There is no product with this id');
    }

    return product;
  }
}
