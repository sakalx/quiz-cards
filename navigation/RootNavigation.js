import {StackNavigator} from 'react-navigation';

import HomeScreen from 'screens/home/HomeScreen';
import QuizScreen from 'screens/quiz/QuizScreen';
import UpdateDeckScreen from 'screens/update-deck/UpdateDeckScreen';

const AppNavigator = StackNavigator({
  Home: {screen: HomeScreen},
  Quiz: {screen: QuizScreen},
  UpdateDeck: {screen: UpdateDeckScreen},
});

export default AppNavigator;