import React from 'react';
import {connect} from 'react-redux';
import {hideSnack} from 'redux-core/actions/snack';
import {Content, Snack} from './style';

@connect(store => ({store}))

class AppSnack extends React.Component {
  dispatch = this.props.dispatch;

  close = (duration = 0) => {
    const {isVisible} = this.props.store.snack;
    isVisible &&
    setTimeout(() => this.dispatch(hideSnack()), duration);
  };

  render() {
    const {store: {snack}} = this.props;
    snack.duration && this.close(snack.duration);

    return (
        <Snack isVisible={snack.isVisible}
               onBackdropPress={() => this.close()}
               backdropOpacity={0.3}
        >
          <Content>
            {snack.content}
          </Content>
        </Snack>
    );
  }
}

export default AppSnack;