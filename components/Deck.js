import React from 'react';
import styled from 'styled-components/native';
import palette from 'constants/Colors';
import {createIconSetFromFontello, Entypo} from '@expo/vector-icons';
import fontelloConfig from 'assets/fonts/fontello/fontello.json';

import {Text, TouchableOpacity, View} from 'react-native';

const FontelloIcon = createIconSetFromFontello(fontelloConfig);

const Wrap = styled(View)`
  align-items: center;
  margin: 20px 0;
`;
const Card = styled(View)`
  position: relative;
`;
const ActionsButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  left: 50px;
`;
const Badge = styled(View)`
  align-items: center;
  transform: rotate(-8deg);
  position: absolute;
  top: 45;
  right: -45;
`;
const BadgeTitle = styled(Text)`
  color: ${palette.primary2Color};
`;
const Title = styled(Text)`
  font-size: 18;
  color: ${palette.primary1Color};
`;
const DeckIcon = styled(FontelloIcon)`
 font-size: 112;
 `;

class Deck extends React.Component {

  pressed = () => console.log('you wish ;)');

  render() {
    const {deck, navigate} = this.props;
    const countQuestions = Object.keys(deck.questions).length;

    return (
        <Wrap>
          <Card>
            <ActionsButton onPress={this.pressed}>
              <Entypo name='dots-three-vertical'
                      size={24}
                      color={palette.primary3Color}
              />
            </ActionsButton>
            <Badge>
              <BadgeTitle>{countQuestions}</BadgeTitle>
              <BadgeTitle>questions</BadgeTitle>
            </Badge>
          </Card>
          <TouchableOpacity onPress={() => navigate('Quiz', {deck})}>
            <DeckIcon name='deck-o'
                      color={deck.iconColor}
            />
          </TouchableOpacity>
          <Title>{deck.title}</Title>
        </Wrap>
    );
  }
}

export default Deck;