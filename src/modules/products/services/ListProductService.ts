import { Product } from '../entities/Product';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../repositories/ProductsRepository';

export class ListProductService {
  private readonly productRepository: ProductRepository;

  constructor() {
    this.productRepository = getCustomRepository(ProductRepository);
  }

  public async execute(): Promise<Product[]> {
    const products = this.productRepository.findAll();

    return products;
  }
}
