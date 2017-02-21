import { AppContainer } from 'react-hot-loader';
import { render }from 'react-dom';
import App from './src';
import Root from 'core/_root';

// Initial render
render(
  <AppContainer>
    <Root>
      <App/>
    </Root>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  // Check if webpack hot reloading is enabled
  module.hot.accept('./src/index.js', () => {
    // After the module gets updated, require the new constructor
    const NewApp = require('./src/index.js').default;
    // Re-mount the app to the root DOM node
    render(
      <AppContainer>
        <Root>
          <NewApp />
        </Root>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
