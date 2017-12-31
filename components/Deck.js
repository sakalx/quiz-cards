import React from 'react';
import styled from 'styled-components/native';
import {createIconSetFromFontello, Entypo} from '@expo/vector-icons';
import fontelloConfig from 'assets/fonts/fontello/fontello.json';

import {View, Text, TouchableOpacity} from 'react-native';

const FontelloIcon = createIconSetFromFontello(fontelloConfig);

const Card = styled(View)`
  position: relative;
  align-items: center;
  margin: 10px;
`;
const ActionsButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5;
  right: 5;
`;
const Badge = styled(View)`
  align-items: center;
  transform: rotate(-8deg);
  position: absolute;
  bottom: 37%;
  right: 22%;
`;
const Title = styled(Text)`
  font-size: 18;
`;

class Deck extends React.Component {
  pressed = () => console.log('puk');

  render() {
    return (
        <Card>
          <ActionsButton onPress={this.pressed}>
            <Entypo name='dots-three-vertical' size={24}/>
          </ActionsButton>
          <Badge>
            <Text>21</Text>
            <Text>questions</Text>
          </Badge>
          <TouchableOpacity onPress={this.pressed}>
            <FontelloIcon name='post-o' size={112} color='red'/>
          </TouchableOpacity>
          <Title>Title</Title>
        </Card>
    );
  }
}

export default Deck;