import React from 'react';
import {connect} from 'react-redux';
import {showSnack} from 'app/redux-core/actions/snack';
import snackId from 'app/components/popup/snack/constants';

import {Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

import {ButtonTitle, LogoIcon, SubTitle, Title, Wrap, WrapButtons} from './style';

@connect(store => {
  return {
    dispatch: store.dispatch,
  };
})

class SetAnswer extends React.PureComponent {
  _dispatch = this.props.dispatch;

  handelAddQuestion = answer => {
    const {question, questionId, handelAddQuestionCB} = this.props;
    const id = questionId || (+new Date()).toString(16);

    const SnackMsg =
        <Text>
          successfully {questionId ? 'update' : 'added'}
        </Text>;

    this._dispatch(showSnack({
      openSnack: snackId.QUESTION_TAB,
      content: SnackMsg,
    }));
    handelAddQuestionCB(id, question, answer);
  };

  render() {
    const {setAnswer, question} = this.props;

    return (
        <Modal isVisible={setAnswer}
               animationIn={'slideInLeft'}
               animationOut={'slideOutRight'}
        >
          <Wrap>
            <Title>
              {question}
            </Title>
            <SubTitle>
              what should be an answer?
            </SubTitle>
            <WrapButtons>
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
            </WrapButtons>
            <LogoIcon name='logo'/>
          </Wrap>
        </Modal>
    );
  }
}

export default SetAnswer;