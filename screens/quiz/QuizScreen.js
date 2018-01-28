import React from 'react';
import {connect} from 'react-redux';
import {hideSnack, showSnack} from 'app/redux-core/actions/snack';
import {attention, entrances, exits} from 'app/constants/animations';

import * as Animatable from 'react-native-animatable';

import snackId from 'app/components/popup/snack/constants';
import AppBar from 'app/components/app-bar/AppBar';
import FooterButtons from 'app/components/footer-buttons/FooterButtons';
import Snack from 'app/components/popup/snack/Snack';

import ScoreCard from './components/score-card/ScoreCard';
import QuestionCard from './components/question-card/QuestionCard';
import {
  animationWrap,
  CorrectIcon,
  FooterBtnTitle,
  SnackAnswerView,
  UncorrectIcon,
  Wrap
} from './style';

@connect(store => {
  return {
    openSnack: store.snack.openSnack,
  };
})

class QuizScreen extends React.PureComponent {
  _dispatch = this.props.dispatch;

  state = {
    questions: [],
    totalCards: null,
    currentCard: 1,
    score: null,
    finished: false,
  };

  static navigationOptions = ({navigation}) => ({
    header: <AppBar navigation={navigation}/>,
  });

  componentWillMount() {
    const {totalCards} = this.state;

    if (!totalCards) {
      const {state: {params: {deck}}} = this.props.navigation;
      const questionsKeys = Object.keys(deck.questions);

      this.setState({
        questions: questionsKeys.map(key => deck.questions[key]),
        totalCards: questionsKeys.length,
      });
    }
  }

  _nextCard = () => {
    const {totalCards, currentCard} = this.state;

    (currentCard === totalCards) && this.setState({finished: true});
    this.setState({currentCard: currentCard + 1});
    return currentCard === totalCards;
  };

  _openSnack = checkedAnswer => {
    this._dispatch(showSnack({
      openSnack: snackId.QUIZ_SCREEN,
      duration: null,
      content: this.renderSnackAnswer(checkedAnswer),
    }));
  };

  async animationInOut() {
    await this._questionCard[exits()](800);
    !this._nextCard() && this._questionCard[entrances()](800);
    this._dispatch(hideSnack());
  };

  async animationAttention() {
    await this._questionCard[attention()](800);
    this.animationInOut();
  };

  handelAnswer = answer => {
    const {currentCard, questions, score} = this.state;
    const correctAnswer = questions[currentCard - 1].answer;
    const checkedAnswer = correctAnswer === answer;

    this._openSnack(checkedAnswer);
    if (checkedAnswer) {
      this.setState({score: score + 1});
      this.animationInOut();
    } else {
      this.animationAttention();
    }
  };

  handelReset = () => this.setState({
    currentCard: 1,
    score: null,
    finished: false,
  });

  renderSnackAnswer = checkedAnswer => {
    return (<SnackAnswerView>
          {checkedAnswer
              ? <CorrectIcon name='checkmark-circle'/>
              : <UncorrectIcon name='warning'/>
          }
        </SnackAnswerView>
    );
  };

  render() {
    const {totalCards, currentCard, questions, score, finished,} = this.state;
    const {openSnack} = this.props;

    if (finished) {
      return <ScoreCard score={(score * 100 / totalCards).toFixed()}
                        reset={this.handelReset}
                        navigation={this.props.navigation}
      />;
    }
    return (
        <Wrap>
          <Animatable.View ref={c => this._questionCard = c}
                           style={animationWrap}
          >
            <QuestionCard question={questions[currentCard - 1].question}
                          totalQuestions={totalCards}
                          currentCard={currentCard}
            />
          </Animatable.View>
          <FooterButtons leftBtnContent={<FooterBtnTitle>FALSE</FooterBtnTitle>}
                         rightBtnContent={<FooterBtnTitle>TRUE</FooterBtnTitle>}
                         leftBtnCB={() => this.handelAnswer(false)}
                         rightBtnCB={() => this.handelAnswer(true)}
          />
          {openSnack === snackId.QUIZ_SCREEN && <Snack/>}
        </Wrap>
    );
  }
}

export default QuizScreen;