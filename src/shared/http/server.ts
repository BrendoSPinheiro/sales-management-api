import { createConnection } from 'typeorm';

createConnection().then(() => {
  import('./app').then(({ app }) => {
    app.listen(3001, () => {
      console.log('🔥 Server started at http://localhost:3001');
    });
  });
});
