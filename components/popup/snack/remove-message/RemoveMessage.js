import React from 'react';
import {connect} from 'react-redux';
import {hideSnack} from 'redux-core/actions/snack';

import {Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {TittleCancel, TittleDelete, Wrap} from './style.js';

@connect(store => ({store}))
class RemoveMessage extends React.Component {
  dispatch = this.props.dispatch;

  handelRemove = () => {
    this.props.handelRemove();
    this.dispatch(hideSnack());
  };

  render() {
    const {title} = this.props;

    return (
        <Wrap>
          <Text>{title} will be deleted</Text>
          <TouchableOpacity onPress={() => this.dispatch(hideSnack())}>
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