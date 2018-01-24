import styled from 'styled-components/native';
import palette from 'constants/Colors';

import {View} from 'native-base';

export const wrap = {
  backgroundColor: palette.bodyBackground,
  flex: 1,
};

export const Spinner = styled(View)`
  backgroundColor: ${palette.bodyBackground};
  flex: 1 
 `;