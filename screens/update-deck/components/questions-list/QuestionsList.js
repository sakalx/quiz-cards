import React from 'react';
import {connect} from 'react-redux';
import {hideSnack, showSnack} from 'redux-core/actions/snack';
import snackId from 'components/popup/snack/constants';

import * as Animatable from 'react-native-animatable';

import ActionsMenu from 'components/popup/dropdown/ActionsMenu';
import RemoveMessage from 'components/popup/snack/remove-message/RemoveMessage';

import {Answer, ItemWrap, Question, QuestionWrap, Wrap} from './style';

@connect(store => {
  return {
    dispatch: store.dispatch,
  };
})

class QuestionsList extends React.PureComponent {
  _dispatch = this.props.dispatch;

  state = {editingQuestion: null};

  async handelEditQuestion(id) {
    const {editingQuestion} = this.state;

    if (editingQuestion) {
      this[editingQuestion].slideInDown(500);
      this.setState({editingQuestion: null})
    }
    this.props.handelEditQuestionCB(id, this[id]);
    this.setState({editingQuestion: id});
    await this[id].slideOutUp(700);
  }

  async handelRemoveQuestion(id) {
    const questions = {...this.props.questionsObj};

    delete questions[id];
    await this[id].zoomOutRight(500);
    this.props.handelRemoveQuestionCB(questions);

    for (let key in questions) {
      this[key].fadeInUpBig(500);
    }

    this._dispatch(hideSnack());
  }

  handelConfirmRemove(id) {
    this[id].rubberBand(500);
    this._dispatch(showSnack({
      openSnack: snackId.QUESTION_TAB,
      duration: 3000,
      content: <RemoveMessage title='QUESTION'
                              handelRemove={() => this.handelRemoveQuestion(id)}
      />,
    }));
  }

  render() {
    const {questionsObj} = this.props;

    const questionsKeys = Object.keys(questionsObj);
    const questionsArr = questionsKeys.map(key => questionsObj[key]);

    return (
        <Wrap
            dataArray={questionsArr}
            renderRow={item =>
                <Animatable.View ref={c => this[item.id] = c}>
                  <ItemWrap>
                    <QuestionWrap>
                      <Question>{item.question}</Question>
                      <Answer>{item.answer.toString()}</Answer>
                    </QuestionWrap>
                    <ActionsMenu actions={{
                      edit: () => this.handelEditQuestion(item.id),
                      remove: () => this.handelConfirmRemove(item.id),
                    }}/>
                  </ItemWrap>
                </Animatable.View>
            }>
        </Wrap>
    );
  }
}

export default QuestionsList;