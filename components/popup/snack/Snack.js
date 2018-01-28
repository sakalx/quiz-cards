import React from 'react';
import {connect} from 'react-redux';
import {hideSnack} from 'app/redux-core/actions/snack';

import {Menu, MenuOptions, MenuTrigger, renderers} from 'react-native-popup-menu';
import {wrap} from './style.js';

@connect(store => {
  return {
    snack: store.snack,
  };
})

class Snack extends React.PureComponent {
  _dispatch = this.props.dispatch;

  _close = duration => {
    setTimeout(() => this._dispatch(hideSnack()), duration);
  };

  render() {
    const {snack} = this.props;

    if (snack.duration && snack.openSnack) {
      this._close(snack.duration);
    }

    return (
        <Menu renderer={renderers.SlideInMenu}
              opened={!!snack.openSnack}
        >
          <MenuTrigger/>
          <MenuOptions style={wrap}>
            {snack.content}
          </MenuOptions>
        </Menu>
    );
  }
}

export default Snack;