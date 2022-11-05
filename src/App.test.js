import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

test('redirects to signin', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(screen).toMatchSnapshot();
});
