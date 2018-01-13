import React from 'react';
import palette from 'constants/Colors';

import Modal from 'react-native-modal';
import {TouchableOpacity} from 'react-native';
import {Footer, FooterTab, Form, Icon, Input, Label, Text, View} from 'native-base';


import {
  AddButton,
  AddButtonTitle,
  AnswerButtons,
  ButtonTitle,
  EditIcon,
  FooterButton,
  HomeIcon,
  InputWrap,
  ListView,
  ListItemView,
  LogoIcon,
  Question,
  SelectAnswerView,
  SelectAnswerText,
  SelectAnswerSubText,
  tab,
  TabsView,
  TabView,
  TrashIcon,
  Wrap
} from './style.js';

import * as api from 'api/api-storage';

class UpdateDeckScreen extends React.Component {

  state = {
    questionId: null,

    questions: {
      cardID1: {
        id: 'cardID1',
        question: 'is React a so good?',
        answer: true,
      },
      cardID2: {
        id: 'cardID2',
        question: 'is Ajax requests in React? is Ajax requests in React? is Ajax requests in React? is Ajax requests in React? is Ajax requests in React?333333333333333333',
        answer: true,
      },
        cardID4: {
        id: 'cardID4',
        question: 'is React a so good?',
        answer: true,
      },
        cardID5: {
        id: 'cardID5',
        question: 'is React a so good?',
        answer: true,
      },
    },

    validation: {
      inputDeck: null,
      inputQuestion: null,
    },

    selectAnswer: false,
  };

  static navigationOptions = {header: null};

  handelInput = ({value, fieldName}) => {
    const {validation} = this.state;
    const valueNormalized = value.trim();

    if (valueNormalized) {
      this.setState({
        validation: {
          ...validation,
          [fieldName]: valueNormalized,
        },
      });
    } else {
      this.setState({
        validation: {
          ...validation,
          [fieldName]: null,
        },
      });
    }
  };

  handelAddQuestion = () => {
    const {questionId, validation, validation: {inputQuestion}} = this.state;

   if (inputQuestion) {
    this.setState({
      
      selectAnswer: true,
    })
  } else {
    this.setState({
      validation: {
        ...validation,
        inputQuestion: !!inputQuestion
      },
    })
  }
};

  handelSelectAnswer = answer => {
    const {questionId, questions, validation, validation: {inputQuestion}} = this.state;
    const newId = (+new Date()).toString(16);
    const id = questionId || newId;

    this.setState({
      questionId: null,
      questions: {
        ...questions,
        [id]: {
          id,
          answer,
          question: inputQuestion,
        },
      },
      selectAnswer: false,
      validation: {
           ...validation, 
        inputQuestion: null,
      }
    });

  };


handelRemoveQuestion = id => {
  const {questions} = this.state;

  delete questions[id];
  this.setState({questions})
};

handelEditQuestion = id => {
 const {questions, validation,  validation: {inputQuestion}} = this.state;


 this.setState({
  questionId: id,
  validation: {
    ...validation,
    inputQuestion: questions[id].question,
  }
 })
};


  handelSave = () => {
    const {questions, validation: {inputDeck, inputQuestion}} = this.state;
    const hasQuestions = Object.keys(questions).length;

    if (inputDeck && hasQuestions) {
      const {navigation: {navigate}} = this.props;
      // show toast
    

      api.addDeck({title:inputDeck, questions});
      navigate('Home');
    } else {
      this.setState({
        validation: {
          inputDeck: !inputDeck ? false : inputDeck,
          inputQuestion: !hasQuestions ? false : inputQuestion,
        }
      })
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
                    : <Icon name='close-circle'/>
                : <Icon name='create' style={{color: palette.primary3Color}}/>
            }
          </InputWrap>
        </Form>
    );
  };

  render() {
    const {navigation: {navigate}} = this.props;

    const {
      questionId,
      questions,
      selectAnswer,
      validation: {inputDeck, inputQuestion},
    } = this.state;

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
              content: this.renderInput({
                label: 'Name of Deck',
                fieldName: 'inputDeck',
                fieldValue: inputDeck,
                callBack: this.handelInput,
              }),
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
                <AddButton onPress={this.handelAddQuestion}>
                  <AddButtonTitle>
                    {questionId ? 'EDIT' : 'ADD'}
                   </AddButtonTitle>
                </AddButton>
                <ListView
                      dataArray={questionsArr}
                      renderRow={(item) =>
                        <ListItemView>
                          <Question>{item.question}</Question>
                          <View>
                            <TouchableOpacity onPress={() => this.handelEditQuestion(item.id)}>
                              <EditIcon name='edit'/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.handelRemoveQuestion(item.id)}>
                              <TrashIcon name='trash'/>
                            </TouchableOpacity>
                          </View>
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
                      <TouchableOpacity onPress={() => this.handelSelectAnswer(false)}>
                        <ButtonTitle>
                          FALSE
                        </ButtonTitle>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.handelSelectAnswer(true)}>
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
              <FooterButton onPress={() => navigate('Home')} full>
                <HomeIcon name='home'/>
              </FooterButton>
              <FooterButton onPress={this.handelSave} full>
                <ButtonTitle>SAVE</ButtonTitle>
              </FooterButton>
            </FooterTab>
          </Footer>
         
        </Wrap>
    );
  }
}

export default UpdateDeckScreen; 