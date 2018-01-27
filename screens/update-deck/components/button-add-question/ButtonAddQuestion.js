import React from 'react';

import {AddButton, Title} from './style';

const ButtonAddQuestion = props => {
  const {hasQuestion, handelSetAnswerCB} = props;

  return (
      <AddButton onPress={() => handelSetAnswerCB()}>
        <Title>
          {hasQuestion ? 'EDIT' : 'ADD'}
        </Title>
      </AddButton>
  );
};

export default ButtonAddQuestion;