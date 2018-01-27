import React from 'react';

import {CardWrap, Counter, Question, QuestionWrap, Title} from './style';

const QuestionCard = props => {
  const {question, currentCard, totalQuestions} = props;

  return (
      <CardWrap>
        <Counter>
          {currentCard} / {totalQuestions}
        </Counter>
        <QuestionWrap>
          <Title>
            True or False?
          </Title>
          <Question>
            {question}
          </Question>
        </QuestionWrap>
      </CardWrap>
  );
};

export default QuestionCard;