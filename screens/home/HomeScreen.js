import React from 'react';
import {connect} from 'react-redux';
import {getAllDecks} from 'redux-core/actions/decks';

import {FlatList} from 'react-native';
import {Container, Content} from 'native-base';

import AppSpinner from 'components/spiner/AppSpinner';
import Snack from 'components/popup/snack/Snack';

import SearchBar from './components/search-bar/SearchBar';
import Deck from './components/deck/Deck';
import ButtonAdd from './components/button-add/ButtonAdd';
import {Spinner, wrap} from './style';

@connect(store => ({store}))
class HomeScreen extends React.Component {
  dispatch = this.props.dispatch;

  state = {
    ready: false,
    queryDecks: null,
  };

  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    const header = <SearchBar updateList={params && params.handleSearch}/>;
    return {header};
  };

  async componentWillMount() {
    const {navigation, store: {decks}} = this.props;

    navigation.setParams({handleSearch: this.updateListOfDecks});
    await this.dispatch(getAllDecks());

    this.setState({
      ready: true,
      decks,
    });
  }

  updateListOfDecks = queryDecks => this.setState({queryDecks});

  render() {
    const {ready, queryDecks} = this.state;
    const {navigation: {navigate}, store: {decks}} = this.props;

    if (!ready) {
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
          <Snack/>
        </Container>
    );
  }
}

export default HomeScreen;