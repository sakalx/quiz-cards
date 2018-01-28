import React from 'react';
import {connect} from 'react-redux';
import {hideSnack} from 'app/redux-core/actions/snack';

import {TouchableOpacity} from 'react-native';
import {Text} from 'native-base';
import {TittleCancel, TittleDelete, Wrap} from './style.js';

@connect(store => {
  return {
    dispatch: store.dispatch,
  };
})

class RemoveMessage extends React.PureComponent {
  _dispatch = this.props.dispatch;

  handelRemove = () => {
    this.props.handelRemove();
    this._dispatch(hideSnack());
  };

  render() {
    const {title} = this.props;

    return (
        <Wrap>
          <Text>{title} will be deleted</Text>
          <TouchableOpacity onPress={() => this._dispatch(hideSnack())}>
            <TittleCancel>CANCEL</TittleCancel>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handelRemove}>
            <TittleDelete>OK</TittleDelete>
          </TouchableOpacity>
        </Wrap>
    );
  }
}

export default RemoveMessage;