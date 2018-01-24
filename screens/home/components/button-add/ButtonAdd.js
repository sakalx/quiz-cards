import React from 'react';

import {Button, ButtonIcon} from './style';

class ButtonAdd extends React.Component {
  render() {
    const {navigate} = this.props;

    return (
        <Button onPress={() => navigate('UpdateDeck')}>
          <ButtonIcon name='add'/>
        </Button>
    );
  }
}

export default ButtonAdd;