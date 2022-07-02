import { Router } from 'express';
import { productFactory } from '../factories/ProductFactory';

const productRouter = Router();

productRouter.get('/', (request, response) =>
  productFactory().index(request, response),
);
productRouter.get('/:id', (request, response) =>
  productFactory().show(request, response),
);
productRouter.post('/', (request, response) =>
  productFactory().create(request, response),
);
productRouter.put('/:id', (request, response) =>
  productFactory().update(request, response),
);
productRouter.delete('/:id', (request, response) =>
  productFactory().delete(request, response),
);

export { productRouter };
