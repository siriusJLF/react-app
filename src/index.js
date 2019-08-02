import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/';
import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store, { persistor } from '@/store/store';
import 'antd/dist/antd.css'
import '@/iconfont/iconfont.css'
import { PersistGate } from 'redux-persist/integration/react';
import zhCN from 'antd/es/locale-provider/zh_CN';
import { LocaleProvider } from 'antd'// antd格式化为中文,默认英文?鄙视!
const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      <AppContainer>
        <PersistGate loading={null} persistor={persistor}>
          <LocaleProvider locale={zhCN}>
            <Component />
          </LocaleProvider>
        </PersistGate>
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
