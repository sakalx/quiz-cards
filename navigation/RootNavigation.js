import {StackNavigator} from 'react-navigation';

import HomeScreen from 'app/screens/home/HomeScreen';
import QuizScreen from 'app/screens/quiz/QuizScreen';
import UpdateDeckScreen from 'app/screens/update-deck/UpdateDeckScreen';

const AppNavigator = StackNavigator({
  Home: {screen: HomeScreen},
  Quiz: {screen: QuizScreen},
  UpdateDeck: {screen: UpdateDeckScreen},
});

export default AppNavigator;