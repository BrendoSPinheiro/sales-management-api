import { getCustomRepository } from 'typeorm';
import { NotFoundException } from '@shared/errors';
import { ProductRepository } from '../repositories/ProductsRepository';

export class DeleteProductService {
  private readonly productRepository: ProductRepository;

  constructor() {
    this.productRepository = getCustomRepository(ProductRepository);
  }

  public async execute(id: string): Promise<void> {
    const productExists = this.productRepository.findById(id);

    if (!productExists) {
      throw new NotFoundException('There is no product with this id');
    }

    await this.productRepository.deleteProduct(id);
  }
}
