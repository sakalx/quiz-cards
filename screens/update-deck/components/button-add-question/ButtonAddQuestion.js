import React from 'react';

import {AddButton, Title} from './style'

class ButtonAddQuestion extends React.Component {
  render() {
    const {hasQuestion, handelSetAnswerCB} = this.props;
    return (
        <AddButton onPress={() => handelSetAnswerCB()}>
          <Title>
            {hasQuestion ? 'EDIT' : 'ADD'}
          </Title>
        </AddButton>
    )
  }
}

export default ButtonAddQuestion