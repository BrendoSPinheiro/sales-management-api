import { Product } from '../entities/Product';
import { ProductRepository } from '../repositories/ProductsRepository';

export class ListProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  public async execute(): Promise<Product[]> {
    const products = this.productRepository.findAll();

    return products;
  }
}
