import {StackNavigator} from 'react-navigation';

import HomeScreen from 'screens/HomeScreen';
import QuizScreen from 'screens/QuizScreen';

const AppNavigator = StackNavigator({
  Home: {screen: HomeScreen},
  Quiz: {screen: QuizScreen},
});

export default AppNavigator;