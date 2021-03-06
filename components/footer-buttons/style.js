import styled from 'styled-components/native';
import palette from 'app/constants/Colors';

import {Button} from 'native-base';

export const RippleButton = styled(Button)`
  flex-direction: row;
  background-color: ${palette.alternateBackground};
`;