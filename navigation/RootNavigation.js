import {StackNavigator} from 'react-navigation';

import HomeScreen from 'screens/HomeScreen';
import QuizScreen from 'screens/QuizScreen';
import NewDeckScreen from 'screens/NewDeckScreen';

const AppNavigator = StackNavigator({
  Home: {screen: HomeScreen},
  Quiz: {screen: QuizScreen},
  NewDeck: {screen: NewDeckScreen},
});

export default AppNavigator