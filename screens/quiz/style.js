import styled from 'styled-components/native';
import palette from 'constants/Colors';
import {Button, Container, Icon, Text, View} from 'native-base';

export const Wrap = styled(Container)`
  background-color: ${palette.bodyBackground};
  justify-content: flex-end;
`;

export const animationWrap = {
  flex: 1,
};

export const ButtonLayout = styled(Button)`
  background-color: ${palette.alternateBackground};
`;

export const ButtonTitle = styled(Text)`
  color: ${palette.primary1Color};
  font-size: 16;
`;

export const SnackAnswerView = styled(View)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${palette.alternateBackground};
`;

export const CorrectIcon = styled(Icon)`
  color: ${palette.primary1Color};
  font-size: 34;
`;

export const UncorrectIcon = styled(Icon)`
  color: ${palette.errorColor};
  font-size: 34;
`;