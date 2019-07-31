import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from '@/store/store';

const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}

render(Route);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router/', () => {
    render(Route);
  })
}
serviceWorker.unregister();
