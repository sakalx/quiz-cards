import React from 'react';

import {CardWrap, Counter, Question, CenternView, Title} from './style';

const QuestionCard = props => {
  const {question, currentCard, totalQuestions} = props;

  return (
      <CardWrap>
        <Counter>
          {currentCard} / {totalQuestions}
        </Counter>
        <CenternView>
          <Title>
            True or False?
          </Title>
          <CenternView>
            <Question>
              {question}
            </Question>
          </CenternView>
        </CenternView>
      </CardWrap>
  );
};

export default QuestionCard;