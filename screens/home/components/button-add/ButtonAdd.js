import React from 'react';
import {connect} from 'react-redux';
import {showSpinner} from 'redux-core/actions/spinner';

import spinnerId from 'components/spinner/constants';
import {Button, ButtonIcon} from './style';

@connect(store => {
  return {
    dispatch: store.dispatch,
  };
})

class ButtonAdd extends React.PureComponent {

  handelAddBtn = () => {
    const {dispatch, navigate} = this.props;

    navigate('UpdateDeck');
    dispatch(showSpinner(spinnerId.DECK_LOADING, true));
  };

  render() {
    return (
        <Button onPress={this.handelAddBtn}>
          <ButtonIcon name='add'/>
        </Button>
    );
  }
}

export default ButtonAdd;