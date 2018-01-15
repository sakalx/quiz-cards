import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hideSnack} from 'redux-core/actions/snack';
import {Content, Snack} from './style';

@connect(store => ({store}))

class AppSnack extends Component {
  dispatch = this.props.dispatch;
  // snack = this.props.store.snack;

  close = () => {
    const {duration, isVisible} = this.props.store.snack;
    isVisible &&
    setTimeout(() => this.dispatch(hideSnack()), duration);
  };

  render() {
    const {store: {snack}} = this.props;
    this.close();

    return (
        <Snack isVisible={snack.isVisible}
               animationInTiming={500}
               animationOutTiming={700}
        >
          <Content>
            {snack.content}
          </Content>
        </Snack>
    );
  }
}

export default AppSnack;