import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';

class Snack extends Component {
  state = {
    visible: false,
  };

  componentWillReceiveProps() {
    this.setState({visible: true});
    setTimeout(
        this.setState({visible: false}),
        2000);
  }

  render() {
    const {title = ''} = this.props;

    return (
				<Modal isVisible={this.state.visible}>
					<View>
						<Text> {title} </Text>
					</View>
				</Modal>
    );
  }
}

export default Snack;