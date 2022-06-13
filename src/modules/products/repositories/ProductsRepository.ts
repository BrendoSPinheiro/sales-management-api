import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../entities/Product';
import { ICreateProductDto } from '../dtos/CreateProductDto';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  public async findByName(name: string): Promise<Product | undefined> {
    const product = this.findOne({
      where: {
        name,
      },
    });

    return product;
  }

  public async createProduct(data: ICreateProductDto): Promise<Product> {
    const product = this.create(data);

    await this.save(product);

    return product;
  }
}
