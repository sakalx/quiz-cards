import styled from 'styled-components/native';
import palette from 'app/constants/Colors';

import {Item} from 'native-base';

export const InputView = styled(Item)`
  padding-left: 10;
  padding-right: 70;
`;

export const labelStyle = {
  paddingLeft: 15,
  paddingTop: 4,
};

export const warningStyle = {
  paddingLeft: 15,
  paddingTop: 3,
  color: palette.warningColor,
};

export const inputStyle = {
  color: palette.primary1Color,
};

export const createIconStyle = {
  color: palette.primary3Color,
};