import React from 'react';
import {connect} from 'react-redux';
import * as api from 'api/api-storage';
import {hideSnack, showSnack} from 'redux-core/actions/snack';
import palette, {deckTheme} from 'constants/Colors';
// Components
import Modal from 'react-native-modal';

import Actions from 'components/popup/dropdown-actions/Actions'

import {FlatList, TouchableOpacity} from 'react-native';
import {Footer, FooterTab, Form, Icon, Input, Label, Text, View} from 'native-base';
import Snack from 'components/popup/snack/Snack';

import {
  AddButton,
  AddButtonTitle,
  Answer,
  AnswerButtons,
  ButtonTitle,
  CheckIcon,
  DeckButton,
  DeckIcon,
  DeckTabView,
  EditIcon,
  FooterButton,
  HomeIcon,
  InputWrap,
  ListItemView,
  ListView,
  LogoIcon,
  Question,
  QuestionView,
  SelectAnswerSubText,
  SelectAnswerText,
  SelectAnswerView,
  SelectColoRTitle,
  SnackContent,
  tab,
  TabsView,
  TabView,
  TittleCancel,
  TittleDelete,
  TrashIcon,
  Wrap
} from './style.js';

@connect(store => ({store}))

class UpdateDeckScreen extends React.Component {
  dispatch = this.props.dispatch;
  state = {
    colorSelected: palette.defaultColor,
    questionId: null,
    questions: {},
    inputDeck: null,
    inputQuestion: null,
    selectAnswer: false,
  };

  static navigationOptions = {header: null};

  handelInput = ({value, fieldName}) => {
    const valueNormalized = value.trim();
    const setInputValue = value => this.setState({[fieldName]: value});

    valueNormalized ? setInputValue(value) : setInputValue(null);
  };

  handelSelectAnswer = () => {
    const {inputQuestion} = this.state;

    inputQuestion
        ? this.setState({selectAnswer: true})
        : this.setState({inputQuestion: false}); //!!inputQuestion
  };

  handelAddQuestion = answer => {
    const {questionId, questions, inputQuestion} = this.state;
    const newId = (+new Date()).toString(16);
    const id = questionId || newId;
    const SnackMsg =
        <Text>
          successfully {questionId ? 'update' : 'added'}
        </Text>;

this.dispatch(showSnack({content: SnackMsg}));



    this.setState({
      questions: {
        ...questions,
        [id]: {
          id,
          answer,
          question: inputQuestion,
        },
      },
      questionId: null,
      selectAnswer: false,
      inputQuestion: null,
    });
  };

  handelRemoveQuestion = id => {
    const {questions} = this.state;
    const remove = () => {
      delete questions[id];
      this.setState({questions});
      this.dispatch(hideSnack());
    };
    const SnackMsg = <SnackContent>
      <Text>question will be deleted</Text>
      <TouchableOpacity onPress={() => this.dispatch(hideSnack())}>
        <TittleCancel>CANCEL</TittleCancel>
      </TouchableOpacity>
      <TouchableOpacity onPress={remove}>
        <TittleDelete>OK</TittleDelete>
      </TouchableOpacity>
    </SnackContent>;

    this.dispatch(showSnack({duration: 3000, content: SnackMsg}));
  };

  handelEditQuestion = id => {
    const {questions} = this.state;

    this.setState({
      questionId: id,
      inputQuestion: questions[id].question,
    });
  };

  handelSave = () => {
    const {colorSelected, questions, inputDeck, inputQuestion} = this.state;
    const hasQuestions = Object.keys(questions).length;

    if (inputDeck && hasQuestions) {
      const {navigation: {navigate}} = this.props;
      // show toast
      api.addDeck({title: inputDeck, iconColor: colorSelected, questions});
      navigate('Home');
    } else {
      this.setState({
        inputDeck: !inputDeck ? false : inputDeck,
        inputQuestion: !hasQuestions ? false : inputQuestion,
      });
    }
  };

  renderTab = ({title, fieldValue, content}) => {
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

  renderInput = ({label, callBack, fieldName, fieldValue}) => {
    return (
        <Form >
          <InputWrap floatingLabel last
                     success={!!fieldValue}
                     error={fieldValue === false}
          >
            <Label style={{paddingLeft: 15}}>{label}</Label>
            <Input style={{color: palette.primary1Color}}
                   onChangeText={value => callBack({value, fieldName})}
                   value={fieldValue || ''}
            />
            {fieldValue !== null
                ? (!!fieldValue)
                    ? <Icon name='checkmark-circle'/>
                    : <Icon name='warning'/>
                : <Icon name='create' style={{color: palette.primary3Color}}/>
            }
          </InputWrap>
        </Form>
    );
  };

  render() {
    const {navigation: {goBack}} = this.props;



    const {colorSelected, questionId, questions, inputDeck, inputQuestion, selectAnswer} = this.state;

    const questionsKeys = Object.keys(questions);
    const questionsArr = questionsKeys.map(key => questions[key]);

    return (
        <Wrap>
          <TabsView initialPage={0}
                    tabBarUnderlineStyle={tab.underline}
          >
            {this.renderTab({
              title: 'DECK',
              fieldValue: inputDeck,
              content: <DeckTabView>
                {this.renderInput({
                  label: 'Name of Deck',
                  fieldName: 'inputDeck',
                  fieldValue: inputDeck,
                  callBack: this.handelInput,
                })}
                <SelectColoRTitle>
                  {colorSelected === palette.defaultColor
                      ? 'Select Theme'
                      : `Deck Theme: ${deckTheme[colorSelected]}`
                  }

                </SelectColoRTitle>

                <FlatList
                    data={Object.keys(deckTheme)}
                    renderItem={({item: color}) => (
                        <DeckButton onPress={() => this.setState({colorSelected: color})}>
                          <DeckIcon name='deck' color={color}/>
                          {colorSelected === color &&
                          <CheckIcon name='checkbox'/>
                          }

                        </DeckButton>
                    )

                    }
                    keyExtractor={item => item}
                    numColumns={3}
                    horizontal={false}

                />

              </DeckTabView>,
            })
            }
            {this.renderTab({
              title: 'QUESTIONS',
              fieldValue: inputQuestion,
              content: <View>
                {this.renderInput({
                  label: 'Question',
                  fieldName: 'inputQuestion',
                  fieldValue: inputQuestion,
                  callBack: this.handelInput,
                })
                }
                <AddButton onPress={this.handelSelectAnswer}>
                  <AddButtonTitle>
                    {questionId ? 'EDIT' : 'ADD'}
                  </AddButtonTitle>
                </AddButton>
                <ListView
                    dataArray={questionsArr}
                    renderRow={(item) =>
                        <ListItemView>
                          <QuestionView>
                            <Question>{item.question}</Question>
                            <Answer>{item.answer.toString()}</Answer>
                          </QuestionView>


                         

                           <Actions actions={{
                            edit: () => this.handelEditQuestion(item.id),
                            remove: () => this.handelRemoveQuestion(item.id)
                          }} />
                        
                          


                        </ListItemView>
                    }>
                </ListView>
                <Modal isVisible={selectAnswer}
                       animationIn={'slideInLeft'}
                       animationOut={'slideOutRight'}
                >
                  <SelectAnswerView>
                    <SelectAnswerText>
                      {inputQuestion}
                    </SelectAnswerText>
                    <SelectAnswerSubText>
                      what should be an answer?
                    </SelectAnswerSubText>
                    <AnswerButtons>
                      <TouchableOpacity onPress={() => this.handelAddQuestion(false)}>
                        <ButtonTitle>
                          FALSE
                        </ButtonTitle>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.handelAddQuestion(true)}>
                        <ButtonTitle>
                          TRUE
                        </ButtonTitle>
                      </TouchableOpacity>
                    </AnswerButtons>
                    <LogoIcon name='logo'/>
                  </SelectAnswerView>
                </Modal>
              </View>,
            })
            }
          </TabsView>
          <Footer>
            <FooterTab>
              <FooterButton onPress={() => goBack()} full>
                <HomeIcon name='home'/>
              </FooterButton>
              <FooterButton onPress={this.handelSave} full>
                <ButtonTitle>SAVE</ButtonTitle>
              </FooterButton>
            </FooterTab>
          </Footer>
          <Snack/>
        </Wrap>
    );
  }
}

export default UpdateDeckScreen; 