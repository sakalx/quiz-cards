import React from 'react';
import palette from 'constants/Colors';

import Modal from 'react-native-modal';
import {TouchableOpacity} from 'react-native';
import {Footer, FooterTab, Form, Icon, Input, Label, List, Text, View} from 'native-base';

import {
  AddButton,
  AddButtonTitle,
  AnswerButtons,
  ButtonTitle,
  EditIcon,
  FooterButton,
  HomeIcon,
  InputWrap,
  ListItemView,
  LogoIcon,
  Question,
  SelectAnswerView,
  tab,
  TabsView,
  TabView,
  TrashIcon,
  Wrap
} from './style.js';

class UpdateDeckScreen extends React.Component {

  state = {
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

    if (value) {
      this.setState({
        validation: {
          ...validation,
          [fieldName]: value,
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

  handelSelectAnswer = answer => {
    const {questions, validation: {inputQuestion}} = this.state;
    const id = (+new Date()).toString(16);

    this.setState({
      questions: {
        ...questions,
        [id]: {
          id,
          answer,
          question: inputQuestion,
        },
      },
      selectAnswer: false,
    });

  };

  handelSave = () => {
    const {validation: {inputDeck, inputQuestion}} = this.state;

    if (inputDeck && inputQuestion) {
      // validate !title & !questions
      // addDeck(this.state.deck)
      // show toast
      // return to homeScreen
    } else {
      console.log(this.state.validation);

      this.setState({
        validation: {
          inputDeck: !!inputDeck,
          inputQuestion: !!inputQuestion,
        },
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
            <Input onChangeText={value => callBack({value, fieldName})}
                   style={{color: palette.primary1Color}}/>

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
      questions,
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
                label: 'Name of new Deck',
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
                  label: 'New Question',
                  fieldName: 'inputQuestion',
                  fieldValue: inputQuestion,
                  callBack: this.handelInput,
                })
                }
                <AddButton onPress={() => this.setState({selectAnswer: true})}>
                  <AddButtonTitle> ADD </AddButtonTitle>
                </AddButton>

                <Modal isVisible={this.state.selectAnswer}
                       animationIn={'slideInLeft'}
                       animationOut={'slideOutRight'}
                >
                  <SelectAnswerView>
                    <Text style={{color: palette.primary3Color}}>
                      Question go here
                    </Text>
                    <Text style={{color: palette.defaultColor}}>
                      What should be an Answer?
                    </Text>
                    <AnswerButtons>
                      <TouchableOpacity onPress={() => this.handelSelectAnswer(false)}>
                        <ButtonTitle>FALSE</ButtonTitle>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => this.handelSelectAnswer(true)}>
                        <ButtonTitle>TRUE</ButtonTitle>
                      </TouchableOpacity>
                    </AnswerButtons>
                    <LogoIcon name='logo'/>
                  </SelectAnswerView>
                </Modal>
                <List
                    dataArray={questionsArr}
                    renderRow={(item) =>
                        <ListItemView>
                          <Question>{item.question}</Question>
                          <View>
                            <TouchableOpacity>
                              <EditIcon name='edit'/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                              <TrashIcon name='trash'/>
                            </TouchableOpacity>
                          </View>
                        </ListItemView>
                    }>
                </List>
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