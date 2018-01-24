import React from 'react';
import {connect} from 'react-redux';
import {hideSnack} from 'redux-core/actions/snack';

import {Menu, MenuOptions, MenuTrigger, renderers} from 'react-native-popup-menu';
import {wrap} from './style.js';

@connect(store => ({store}))
class Snack extends React.Component {
  dispatch = this.props.dispatch;

  close = duration => {
    setTimeout(() => this.dispatch(hideSnack()), duration);
  };

  render() {
    const {store: {snack}} = this.props;

    if (snack.duration && snack.isVisible) {
      this.close(snack.duration);
    }

    return (
        <Menu renderer={renderers.SlideInMenu}
              opened={snack.isVisible}
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