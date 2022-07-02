import { getCustomRepository } from 'typeorm';
import { ListProductService } from '../services/ListProductService';
import { ShowProductService } from '../services/ShowProductService';
import { CreateProductService } from '../services/CreateProductService';
import { UpdateProductService } from '../services/UpdateProductService';
import { DeleteProductService } from '../services/DeleteProductService';
import { ProductsController } from '../controllers/ProductsController';
import { ProductRepository } from '../repositories/ProductsRepository';

export const productsFactory = (): ProductsController => {
  const productRepository = getCustomRepository(ProductRepository);
  const listProductService = new ListProductService(productRepository);
  const showProductService = new ShowProductService(productRepository);
  const createProductService = new CreateProductService(productRepository);
  const updateProductService = new UpdateProductService(productRepository);
  const deleteProductService = new DeleteProductService(productRepository);

  const productsController = new ProductsController(
    listProductService,
    showProductService,
    createProductService,
    updateProductService,
    deleteProductService,
  );

  return productsController;
};
