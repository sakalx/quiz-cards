import React from 'react';

import {TouchableOpacity} from 'react-native';
import {Menu, MenuOptions, MenuTrigger} from 'react-native-popup-menu';
import {
  EditIcon,
  Option,
  optionsContainer,
  TitleDelete,
  TitleEdit,
  TrashIcon,
  TriggerIcon
} from './style.js';

const ActionsMenu = props => {
  const {style = {}, actions = {}} = props;

  return (
      <Menu style={{...style}}>
        <MenuTrigger customStyles={{TriggerTouchableComponent: TouchableOpacity}}>
          <TriggerIcon name='dots-three-vertical'/>
        </MenuTrigger>
        <MenuOptions customStyles={{optionsContainer}}>
          <Option onSelect={() => actions.remove()}>
            <TitleDelete >DELETE</TitleDelete>
            <TrashIcon name='trash'/>
          </Option>
          <Option onSelect={() => actions.edit()}>
            <TitleEdit >EDIT</TitleEdit>
            <EditIcon name='edit'/>
          </Option>
        </MenuOptions>
      </Menu>
  );
};

export default ActionsMenu;