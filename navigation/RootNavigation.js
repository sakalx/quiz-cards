import {StackNavigator} from 'react-navigation';

import HomeScreen from 'screens/HomeScreen';
import QuizScreen from 'screens/QuizScreen';
import UpdateDeckScreen from 'screens/updateDeck/UpdateDeckScreen';

const AppNavigator = StackNavigator({
  Home: {screen: HomeScreen},
  Quiz: {screen: QuizScreen},
  UpdateDeck: {screen: UpdateDeckScreen},
});

export default AppNavigator;