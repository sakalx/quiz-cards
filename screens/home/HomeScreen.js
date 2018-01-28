import React from 'react';
import {connect} from 'react-redux';
import {getAllDecks} from 'app/redux-core/actions/decks';
import {showSpinner} from 'app/redux-core/actions/spinner';
import spinnerId from 'app/components/spinner/constants';
import snackId from 'app/components/popup/snack/constants';

import {FlatList} from 'react-native';
import {Container, Content} from 'native-base';

import AppSpinner from 'app/components/spinner/AppSpinner';
import Snack from 'app/components/popup/snack/Snack';

import SearchBar from './components/search-bar/SearchBar';
import Deck from './components/deck/Deck';
import ButtonAdd from './components/button-add/ButtonAdd';
import {Spinner, wrap} from './style';

@connect(store => {
  return {
    decks: store.decks,
    loading: store.spinner[spinnerId.HOME_LOADING],
    openSnack: store.snack.openSnack,
  };
})

class HomeScreen extends React.PureComponent {
  _dispatch = this.props.dispatch;

  state = {queryDecks: null};

  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    const header = <SearchBar updateList={params && params.handleSearch}/>;
    return {header};
  };

  componentDidMount() {
    const {loading} = this.props;
    if (loading) {
      setTimeout(() => this._dispatch(
          showSpinner(spinnerId.HOME_LOADING, false)), 0);
    }
  }

  componentWillMount() {
    const {navigation, decks} = this.props;

    navigation.setParams({handleSearch: this.updateListOfDecks});
    decks.length === 0 && this._dispatch(getAllDecks());
  }

  updateListOfDecks = queryDecks => this.setState({queryDecks});

  render() {
    const {queryDecks} = this.state;
    const {navigation: {navigate}, decks, loading, openSnack} = this.props;

    if (loading) {
      return (
          <Spinner>
            <AppSpinner/>
          </Spinner>
      );
    }

    return (
        <Container>
          <Content contentContainerStyle={wrap}>
            <FlatList
                data={queryDecks || decks}
                renderItem={({item}) => <Deck deck={item} navigate={navigate}/>}
                keyExtractor={item => item.id}
                numColumns={2}
                horizontal={false}
            />
            <ButtonAdd navigate={navigate}/>
          </Content>
          {openSnack === snackId.HOME_SCREEN && <Snack/>}
        </Container>
    );
  }
}

export default HomeScreen;