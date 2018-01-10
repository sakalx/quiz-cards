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

import {View} from 'react-native';
import {Col, Container, Content, Grid, List} from 'native-base';

import SearchBar from 'components/SearchBar';
import AppSpinner from 'components/AppSpinner';
import ButtonAdd from 'components/ButtonAdd';
import Deck from 'components/Deck';

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

  async componentDidMount() {
    this.props.navigation.setParams({handleSearch: this.updateListOfDecks});

    await this.dispatch(getAllDecks());
    this.setState({
      ready: true,
      decks: this.createDuoItems(),
    });

  }

  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    const header = <SearchBar updateList={params && params.handleSearch}/>;

    return {header};
  };

  updateListOfDecks = queryDecks =>
      this.setState({
        decks: this.createDuoItems(queryDecks),
      });

  createDuoItems = (decks = this.props.store) => {
    const duoItems = [];

    for (let i = 0; i < decks.length; i = i + 2) {
      duoItems.push({
        left: decks[i],
        right: decks[i + 1],
      });
    }
    return duoItems;
  };

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
            <List dataArray={decks}
                  renderRow={item =>
                      <Grid>
                        <Col>
                          <Deck deck={item.left} navigate={navigate}/>
                        </Col>
                        {item.right &&
                        <Col>
                          <Deck deck={item.right} navigate={navigate}/>
                        </Col>
                        }
                      </Grid>
                  }/>
            <ButtonAdd navigate={navigate}/>
          </Content>
        </Container>
    );
  }
}

export default HomeScreen;