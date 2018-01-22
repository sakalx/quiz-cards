import React from 'react';
import styled from 'styled-components/native';
import palette from 'constants/Colors';

import AppBar from 'components/app-bar/AppBar';
import ScoreCard from 'components/ScoreCard';
import {Button, Card, Container, Footer, FooterTab, Icon, Text, View} from 'native-base';

const Wrap = styled(Container)`
 background-color: ${palette.bodyBackground};
 `;
const CardLayout = styled(Card)`
 background-color: ${palette.bodyBackground};
 flex: 1;
 margin: 10px;
 padding: 10px;
 justify-content: center;
 align-items: center;
 `;
const Counter = styled(Text)`
 align-self: flex-end;
 color: ${palette.primary3Color};
 font-size: 16;
 `;
const QuestionLayout = styled(View)`
 flex: 1;
 justify-content: center;
 align-items: center;
 `;
const QuestionText = styled(Text)`
 text-align: center;
 color: ${palette.primary2Color};
 font-size: 18;
 `;
const ButtonLayout = styled(Button)`
 background-color: ${palette.alternateBackground};
 `;
const ButtonTitle = styled(Text)`
 color: ${palette.primary1Color};
 font-size: 16;
 `;
const AnswerLayout = styled(View)`
 background-color: ${palette.alternateBackground};
 flex: 1;
 justify-content: center;
 align-items: center;
 `;
const CorrectIcon = styled(Icon)`
 color: ${palette.primary1Color};
 font-size: 34;
 `;
const UncorrectIcon = styled(Icon)`
 color: ${palette.errorColor};
 font-size: 34;
 `;

class QuizScreen extends React.Component {

  state = {
    questions: [],
    currentCard: 1,
    totalCards: null,
    result: null,
    showAnswer: false,
    answerIcon: false,
    finished: false,
  };

  static navigationOptions = ({navigation}) => ({
    header: <AppBar navigation={navigation}/>,
  });

  componentWillMount() {
    const {state: {params: {deck}}} = this.props.navigation;
    const questionsKeys = Object.keys(deck.questions);

    this.setState({
      questions: questionsKeys.map(key => deck.questions[key]),
      totalCards: questionsKeys.length,
    });
  }

  handelAnswer = answer => {
    const {totalCards, currentCard, questions, result} = this.state;
    const toggleShowAnswer = () => this.setState({showAnswer: !this.state.showAnswer});

    const nextQuestion = () => {
      toggleShowAnswer();
      (currentCard === totalCards) && this.setState({finished: true});
      this.setState({currentCard: currentCard + 1});
    };

    toggleShowAnswer();

    if (questions[currentCard - 1].answer === answer) {
      this.setState({
        result: result + 1,
        answerIcon: true,
      });
    } else {
      this.setState({answerIcon: false});
    }

    setTimeout(nextQuestion, 1000);
  };

  renderAnswerIcon = answerIcon => {
    return answerIcon
        ? <CorrectIcon name='checkmark-circle'/>
        : <UncorrectIcon name='warning'/>;
  };

  render() {
    //console.log(this.props)
    // console.log(this.state)

    const {totalCards, currentCard, questions, result, showAnswer, answerIcon, finished} = this.state;

    if (finished) {
      return <ScoreCard score={result * 100 / totalCards}
                        navigation={this.props.navigation}
      />;
    }

    return (
        <Wrap>
          <CardLayout>
            <Counter>
              {currentCard} / {totalCards}
            </Counter>
            <QuestionLayout>
              <QuestionText>
                {questions[currentCard - 1].question}
              </QuestionText>
            </QuestionLayout>
          </CardLayout>
          <Footer>
            {showAnswer
                ? <AnswerLayout>
                  {this.renderAnswerIcon(answerIcon)}
                </AnswerLayout>
                : <FooterTab>
                  <ButtonLayout onPress={() => this.handelAnswer(false)} full>
                    <ButtonTitle>uncorrected</ButtonTitle>
                  </ButtonLayout>
                  <ButtonLayout onPress={() => this.handelAnswer(true)} full>
                    <ButtonTitle>corrected</ButtonTitle>
                  </ButtonLayout>
                </FooterTab>
            }
          </Footer>
        </Wrap>
    );
  }
}

export default QuizScreen;