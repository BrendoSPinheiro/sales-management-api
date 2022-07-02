import { Request, Response } from 'express';
import { ListProductService } from '../services/ListProductService';
import { ShowProductService } from '../services/ShowProductService';
import { CreateProductService } from '../services/CreateProductService';
import { UpdateProductService } from '../services/UpdateProductService';
import { DeleteProductService } from '../services/DeleteProductService';

export class ProductController {
  constructor(
    private readonly listProductService: ListProductService,
    private readonly showProductService: ShowProductService,
    private readonly createProductService: CreateProductService,
    private readonly updateProductService: UpdateProductService,
    private readonly deleteProductService: DeleteProductService,
  ) {}

  public async index(request: Request, response: Response): Promise<Response> {
    const products = await this.listProductService.execute();

    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const product = await this.showProductService.execute(id);

    return response.json(product);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const product = await this.createProductService.execute({
      name,
      price,
      quantity,
    });

    return response.json(product);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, price, quantity } = request.body;

    const product = await this.updateProductService.execute({
      id,
      name,
      price,
      quantity,
    });

    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await this.deleteProductService.execute(id);

    return response.status(204);
  }
}
