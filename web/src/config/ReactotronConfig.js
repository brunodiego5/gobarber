import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  // no refresh da aplicação é realizado a limpeza da
  // timeline do reactotron
  tron.clear();

  // para não precisar importar esse arquivo,
  // qndo usar apenas utilizar console.tron.log('msg');
  console.tron = tron;
}
