import { getCustomRepository } from 'typeorm';
import { ListProductService } from '../services/ListProductService';
import { ShowProductService } from '../services/ShowProductService';
import { CreateProductService } from '../services/CreateProductService';
import { UpdateProductService } from '../services/UpdateProductService';
import { DeleteProductService } from '../services/DeleteProductService';
import { ProductController } from '../controllers/ProductController';
import { ProductRepository } from '../repositories/ProductRepository';

export const productFactory = (): ProductController => {
  const productRepository = getCustomRepository(ProductRepository);
  const listProductService = new ListProductService(productRepository);
  const showProductService = new ShowProductService(productRepository);
  const createProductService = new CreateProductService(productRepository);
  const updateProductService = new UpdateProductService(productRepository);
  const deleteProductService = new DeleteProductService(productRepository);

  const productController = new ProductController(
    listProductService,
    showProductService,
    createProductService,
    updateProductService,
    deleteProductService,
  );

  return productController;
};
