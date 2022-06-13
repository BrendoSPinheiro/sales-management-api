import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../entities/Product';
import { ICreateProductDto } from '../dtos/CreateProductDto';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  public async findAll(): Promise<Product[]> {
    const products = this.find();

    return products;
  }

  public async findById(id: string): Promise<Product | undefined> {
    const product = this.findOne(id);

    return product;
  }

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

  public async updateProduct(updatedProduct: Product): Promise<Product> {
    const product = await this.save(updatedProduct);

    return product;
  }
}
