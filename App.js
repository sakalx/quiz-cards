// TODO swiped row for delete or edit + add TOAST

import React from 'react';
import {Provider} from 'react-redux';
import store from './redux-core/store';
import styled from 'styled-components/native';
import palette from 'constants/Colors';

import {View} from 'react-native';
import {Root} from 'native-base';
import AppSpinner from 'components/AppSpinner';

import AppNavigator from 'navigation/RootNavigation';

const Spinner = styled(View)`
 backgroundColor: ${palette.bodyBackground};
 flex: 1 
 `;

class App extends React.Component {
  state = {fontsAreLoaded: false};

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('./assets/fonts/roboto/Roboto.ttf'),
      'Roboto_medium': require('./assets/fonts/roboto/Roboto_medium.ttf'),
      'fontello': require('./assets/fonts/fontello/Fontello.ttf'),
    });

    this.setState({fontsAreLoaded: true});
  }

  render() {
    if (this.state.fontsAreLoaded) {
      return (
          <Provider store={store}>
            <Root>
              <AppNavigator/>
            </Root>
          </Provider>
      );
    } else {
      return (
          <Spinner>
            <AppSpinner/>
          </Spinner>
      );
    }
  }
}

export default App;