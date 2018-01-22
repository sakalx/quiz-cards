/* TODO
 Deck List View (Default View)
 displays the title of each Deck
 displays the number of cards in each deck
 */
import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import palette from 'constants/Colors';
import {getAllDecks} from 'redux-core/actions/decks';
import {showSnack} from 'redux-core/actions/snack';


import {FlatList} from 'react-native';
import {Col, Container, Content, Grid, List, View, Text, Button} from 'native-base';

import AppSpinner from 'components/spiner/AppSpinner';
import SearchBar from './components/search-bar/SearchBar';
import Deck from './components/deck/Deck';
import ButtonAdd from './components/button-add/ButtonAdd';


import Snack from 'components/popup/snack/Snack';


const Spinner = styled(View)`
 backgroundColor: ${palette.bodyBackground};
 flex: 1 
 `;

@connect(store => ({store}))
class HomeScreen extends React.Component {
  dispatch = this.props.dispatch;
  state = {
    ready: false,
    decks: [],
  };

 static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    const header = <SearchBar updateList={params && params.handleSearch}/>;

    return {header};
  };

  async componentWillMount() {
    this.props.navigation.setParams({handleSearch: this.updateListOfDecks});

    await this.dispatch(getAllDecks());

    this.setState({
      ready: true,
      decks: this.props.store.decks,
    });
  }

  updateListOfDecks = (decks = this.props.store.decks) => {
    
     this.setState({decks})

  }



  render() {
    const {ready, decks} = this.state;
    const {navigate} = this.props.navigation;

    if (!ready) {
      return (
          <Spinner>
            <AppSpinner/>
          </Spinner>
      );
    }
 
    return (
        <Container>
         <Content
              contentContainerStyle={{backgroundColor: palette.bodyBackground, flex: 1}}>


 <FlatList
                    data={decks}
                    renderItem={({item}) => <Deck deck={item} navigate={navigate}/>}

            
                    keyExtractor={item => item.id}
                    numColumns={2}
                    horizontal={false}
                />


         
            <ButtonAdd navigate={navigate}/>
          </Content>


          <Snack />
        </Container>
    );
  }
}

export default HomeScreen;