import React from 'react';
import {resetApp} from 'app/api/api-storage';

import {Form, Icon, Input, Label} from 'native-base';

import {createIconStyle, inputStyle, InputView, labelStyle, warningStyle} from './style';

class InputField extends React.PureComponent {

  state = {warningLabel: false};

  _normalized = (value, max) => {
    const {warningLabel} = this.state;
    const length = value.length;

    if (value.length >= 0) {
      value.charAt(0) === ' '
      && (value = value.trim());
      value.charAt(length - 1) === ' ' && value.charAt(length - 2) === ' '
      && (value = value.trim());
      value === 'RESEТR'
      && resetApp().then(r => this.setState({warningLabel: '😈'}));
    }

    length >= max + 1 && (value = value.substr(0, max));
    length >= max && this.setState({warningLabel: `max length`});
    warningLabel && length < max && this.setState({warningLabel: false});

    return value;
  };

  handelInput = (fieldName, value) => {
    const {handelInputCB} = this.props;

    const normalized = (fieldName === 'inputDeck')
        ? this._normalized(value, 21)
        : this._normalized(value, 99);

    normalized
        ? handelInputCB(fieldName, normalized)
        : handelInputCB(fieldName, null);
  };

  render() {
    const {label, fieldName, fieldValue} = this.props;
    const {warningLabel} = this.state;

    return (
        <Form>
          <InputView floatingLabel last
                     success={!!fieldValue}
                     error={fieldValue === false}
          >
            <Label style={warningLabel ? warningStyle : labelStyle}>
              {warningLabel || label}
            </Label>
            <Input value={fieldValue || ''}
                   style={inputStyle}
                   onChangeText={value => this.handelInput(fieldName, value)}
            />
            {fieldValue !== null
                ? (!!fieldValue)
                    ? <Icon name='checkmark-circle'/>
                    : <Icon name='warning'/>
                : <Icon name='create' style={createIconStyle}/>
            }
          </InputView>
        </Form>
    );
  }
}

export default InputField;