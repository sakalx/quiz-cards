import React from 'react';
import styled from 'styled-components/native';
import palette from 'constants/Colors';
import {createIconSetFromFontello, Entypo} from '@expo/vector-icons';
import fontelloConfig from 'assets/fonts/fontello/fontello.json';

import {Text, TouchableOpacity, View, Form, Picker, Item} from 'react-native';
import {Menu,MenuOptions,MenuOption,  MenuTrigger} from 'react-native-popup-menu';
import {Icon} from 'native-base';

import Actions from 'components/popup/dropdown-actions/Actions'

const FontelloIcon = createIconSetFromFontello(fontelloConfig);


 const EditIcon = styled(FontelloIcon)`
 color: ${palette.primary1Color};
 font-size: 26;
 margin: 10px;
 `;
const TrashIcon = styled(Icon)`
 color: ${palette.accent2Color};
 font-size: 26;
 margin: 10px;
 `;



const Wrap = styled(View)`
  align-items: center;
  margin: 20px 30px;
`;
const Card = styled(View)`
  position: relative;
`;
const menu = {
  position: 'absolute',
   top: 20, 
   left: 55
};
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
  render() {
    const {deck, navigate} = this.props;
    const countQuestions = Object.keys(deck.questions).length;

    return (
        <Wrap>
          <Card>
           <Actions style={menu}/>
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