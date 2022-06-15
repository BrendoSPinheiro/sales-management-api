import { createConnection } from 'typeorm';
import { app } from './app';

createConnection().then(() => {
  import('./routes').then(({ routes }) => {
    app.use(routes);
    app.listen(3001, () => {
      console.log('🔥 Server started at http://localhost:3001');
    });
  });
});
