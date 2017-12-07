// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

// Instruments
import './styles/app.scss';

// Layouts
import CoreLayout from './layouts/CoreLayout';

// Pages
import FilterSliderContainer from './containers/FilterSliderContainer';
import ListContainer from './containers/ListContainer';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <CoreLayout>
          <FilterSliderContainer />
          <ListContainer />
        </CoreLayout>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
