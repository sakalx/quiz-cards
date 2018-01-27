import styled from 'styled-components/native';
import palette from 'constants/Colors';

import {List, ListItem, Text, View} from 'native-base';

export const Wrap = styled(List)`
  margin-bottom: 67;
`;

export const ItemWrap = styled(ListItem)`
  background-color: ${palette.bodyBackground};
`;

export const QuestionWrap = styled(View)`
  width: 90%;
`;

export const Question = styled(Text)`
  color: ${palette.primary2Color};
`;

export const Answer = styled(Text)`
  color: ${palette.primary3Color};
`;
