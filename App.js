import React from 'react';
import {setLocalNotification} from 'api/registerPushNotifications';
import {Provider} from 'react-redux';
import store from 'redux-core/store';
import {showSpinner} from 'redux-core/actions/spinner';
import styled from 'styled-components/native';
import palette from 'constants/Colors';

import {View} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';

import AppNavigator from 'navigation/RootNavigation';
import AppSpinner from 'components/spinner/AppSpinner';
import spinnerId from 'components/spinner/constants';

const Spinner = styled(View)`
 backgroundColor: ${palette.bodyBackground};
 flex: 1 
 `;

class App extends React.PureComponent {
  state = {ready: false};

  async componentWillMount() {
    store.dispatch(showSpinner(spinnerId.FONTS_LOADING, true));

    await Expo.Font.loadAsync({
      'Roboto': require('./assets/fonts/roboto/Roboto.ttf'),
      'Roboto_medium': require('./assets/fonts/roboto/Roboto_medium.ttf'),
      'fontello': require('./assets/fonts/fontello/Fontello.ttf'),
    });

    store.dispatch(showSpinner(spinnerId.FONTS_LOADING, false));
    this.setState({ready: true});
  }

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    if (!this.state.ready) {
      return (
          <Spinner>
            <AppSpinner/>
          </Spinner>
      );
    }
    return (
        <Provider store={store}>
          <MenuProvider>
            <AppNavigator/>
          </MenuProvider>
        </Provider>
    );
  }
}

export default App;