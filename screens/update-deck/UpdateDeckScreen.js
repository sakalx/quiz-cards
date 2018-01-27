import React from 'react';
import {connect} from 'react-redux';
import palette from 'constants/Colors';

import {addDeck, editDeck} from 'redux-core/actions/decks';
import {showSnack} from 'redux-core/actions/snack';

import {Text, View} from 'native-base';

import AppSpinner from 'components/spinner/AppSpinner';
import FooterButtons from 'components/footer-buttons/FooterButtons';
import Snack from 'components/popup/snack/Snack';

import InputField from './components/input-field/InputField';
import ThemesList from './components/themes-list/ThemesList';
import QuestionsList from './components/questions-list/QuestionsList';
import SetAnswer from './components/set-answer/SetAnswer';
import ButtonAddQuestion from './components/button-add-question/ButtonAddQuestion';

import {
  DeckTabView,
  FooterBtnTitle,
  HomeIcon,
  Spinner,
  tab,
  TabsView,
  TabView,
  Wrap
} from './style.js';

import {showSpinner} from 'redux-core/actions/spinner';
import spinnerId from 'components/spinner/constants';
import snackId from 'components/popup/snack/constants';

@connect(store => {
  return {
    openSnack: store.snack.openSnack,
    loading: store.spinner[spinnerId.DECK_LOADING],
  };
})

class UpdateDeckScreen extends React.PureComponent {
  _dispatch = this.props.dispatch;

  state = {
    questionId: null,
    deckId: null,
    questions: {},
    inputDeck: null,
    inputQuestion: null,
    colorSelected: palette.defaultColor,
    setAnswer: false,
  };

  static navigationOptions = {header: null};

  _questionAnimate = null;

  _resolveSave = () => {
    const {deckId, colorSelected, questions, inputDeck} = this.state;
    const {navigate, state: {params}} = this.props.navigation;

    const deck = {
      id: deckId || (+new Date()).toString(16),
      title: inputDeck,
      iconColor: colorSelected,
      questions: {...questions},
    };

    navigate('Home');
    this._dispatch(showSpinner(spinnerId.HOME_LOADING, true));

    params && params.deck
        ? this._editDeck(deck)
        : this._createNewDeck(deck);
  };

  _rejectSave = hasQuestions => {
    const {inputDeck, inputQuestion} = this.state;
    this.setState({
      inputDeck: !inputDeck ? false : inputDeck,
      inputQuestion: !hasQuestions ? false : inputQuestion,
    });
  };

  _createNewDeck = deck => {
    this._dispatch(addDeck(deck));
    this._dispatch(showSnack({
      openSnack: snackId.HOME_SCREEN,
      content: <Text>DECK ADDED</Text>,
      duration: 1200,
    }));
  };

  _editDeck = deck => {
    this._dispatch(editDeck(deck));
    this._dispatch(showSnack({
      openSnack: snackId.HOME_SCREEN,
      content: <Text>DECK UPDATED</Text>,
      duration: 2000,
    }));
  };

  componentWillMount() {
    const {params} = this.props.navigation.state;
    const {deckId} = this.state;

    if (!deckId && params && params.deck) {
      const {title, questions, iconColor, id} = params.deck;

      this.setState({
        colorSelected: iconColor,
        questions: {...questions},
        inputDeck: title,
        deckId: id,
      });
    }
  }

  componentDidMount() {
    if (this.props.loading) {
      setTimeout(() => this._dispatch(
          showSpinner(spinnerId.DECK_LOADING, false),
      ), 0);
    }
  }

  handelInput = (fieldName, value) => this.setState({[fieldName]: value});

  handelSelectTheme = colorSelected => this.setState({colorSelected});

  handelSetAnswer = () => {
    const {inputQuestion} = this.state;
    inputQuestion
        ? this.setState({setAnswer: true})
        : this.setState({inputQuestion: false});
  };

  handelAddQuestion = (id, question, answer) => {
    this.setState(prevState => {
      return {
        questions: {
          ...prevState.questions,
          [id]: {id, question, answer},
        },
        questionId: null,
        setAnswer: false,
        inputQuestion: null,
      };
    });

    this._questionAnimate && this._questionAnimate.slideInDown(500);
    this._questionAnimate = null;
  };

  handelRemoveQuestion = questions => this.setState({questions});

  handelEditQuestion = (questionId, thisComponent) => {
    const inputQuestion = this.state.questions[questionId].question;

    this._questionAnimate = thisComponent;
    this.setState({questionId, inputQuestion});
  };

  handelSave = () => {
    const {questions, inputDeck} = this.state;
    const hasQuestions = Object.keys(questions).length;

    inputDeck && hasQuestions
        ? this._resolveSave()
        : this._rejectSave(hasQuestions);
  };

  _renderTab = ({title, fieldValue, content}) => {
    return (
        <TabView heading={fieldValue === false ? `${title} ⚠` : title}
                 textStyle={fieldValue === false ? tab.textError : tab.text}
                 activeTextStyle={tab.activeText}
                 tabStyle={tab.tab}
                 activeTabStyle={tab.activeTab}
        >
          {content}
        </TabView>
    );
  };

  render() {
    const {navigation: {goBack}, openSnack, loading} = this.props;
    const {colorSelected, questionId, questions, inputDeck, inputQuestion, setAnswer} = this.state;

    if (loading) {
      return (
          <Spinner>
            <AppSpinner/>
          </Spinner>
      );
    }

    return (
        <Wrap>
          <TabsView initialPage={0}
                    tabBarUnderlineStyle={tab.underline}
          >
            {this._renderTab({
              title: 'DECK',
              fieldValue: inputDeck,
              content: <DeckTabView>
                <InputField label='Name of Deck'
                            fieldName='inputDeck'
                            fieldValue={inputDeck}
                            handelInputCB={this.handelInput}
                />
                <ThemesList colorSelected={colorSelected}
                            handelSelectThemeCB={this.handelSelectTheme}
                />
              </DeckTabView>,
            })
            }
            {this._renderTab({
              title: 'QUESTIONS',
              fieldValue: inputQuestion,
              content: <View>
                <InputField label='Question'
                            fieldName='inputQuestion'
                            fieldValue={inputQuestion}
                            handelInputCB={this.handelInput}
                />
                <ButtonAddQuestion hasQuestion={questionId}
                                   handelSetAnswerCB={this.handelSetAnswer}
                />
                <QuestionsList questionsObj={questions}
                               questionId={questionId}
                               handelRemoveQuestionCB={this.handelRemoveQuestion}
                               handelEditQuestionCB={this.handelEditQuestion}
                />
                <SetAnswer setAnswer={setAnswer}
                           questionId={questionId}
                           question={inputQuestion}
                           handelAddQuestionCB={this.handelAddQuestion}
                />
                {openSnack === snackId.QUESTION_TAB && <Snack/>}
              </View>,
            })
            }
          </TabsView>
          <FooterButtons leftBtnContent={<HomeIcon name='home'/>}
                         rightBtnContent={<FooterBtnTitle>SAVE</FooterBtnTitle>}
                         leftBtnCB={goBack}
                         rightBtnCB={this.handelSave}
          />
        </Wrap>
    );
  }
}

export default UpdateDeckScreen;