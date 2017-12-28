/* TODO
 Deck List View (Default View)
 displays the title of each Deck
 displays the number of cards in each deck
 */
import React from 'react';

import {Button, Container, Content, Header, Icon, List} from 'native-base';
import ButtonAdd from 'components/ButtonAdd';

class HomeScreen extends React.Component {
  render() {
    const items = [64, 33, 44, 55, 66, 22, 44, 66, 55, 33, 37];

    return (
        <Container>
          <Header/>
          <Content contentContainerStyle={{backgroundColor: '#303030', flex: 1}}>
            {/*    <ImageBackground  style={{width: 150, height: 150}}
             source={require('assets/images/test3.png')}>
             <Text>Inside</Text>
             </ImageBackground>
             */}
            <List dataArray={items}
                  renderRow={(item) =>
                      <Button large transparent>
                        <Icon name='add-circle' style={{fontSize: item}}/>
                      </Button>
                  }>
            </List>

            <ButtonAdd/>
          </Content>
        </Container>
    );
  }
}

export default HomeScreen;
