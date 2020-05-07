import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middlewares) => {
  // é utlizado o compose para compor o reactotron e saga monitor em uma única função,
  // quando em desenvolvimento
  const enhacer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhacer);
};
