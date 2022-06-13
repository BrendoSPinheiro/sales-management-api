import { getCustomRepository } from 'typeorm';
import { Product } from '../entities/Product';
import { NotFoundException } from '@shared/errors';
import { ProductRepository } from '../repositories/ProductsRepository';

export class ShowProductService {
  private readonly productRepository: ProductRepository;

  constructor() {
    this.productRepository = getCustomRepository(ProductRepository);
  }

  public async execute(id: string): Promise<Product> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new NotFoundException('There is no product with this id');
    }

    return product;
  }
}
