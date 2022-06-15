import { Router } from 'express';
import { productsFactory } from '@modules/products/factory/ProductsFactory';

const productsRouter = Router();

productsRouter.get('/', (request, response) =>
  productsFactory().index(request, response),
);
productsRouter.get('/:id', (request, response) =>
  productsFactory().show(request, response),
);
productsRouter.post('/', (request, response) =>
  productsFactory().create(request, response),
);
productsRouter.put('/:id', (request, response) =>
  productsFactory().update(request, response),
);
productsRouter.delete('/:id', (request, response) =>
  productsFactory().delete(request, response),
);

export { productsRouter };
