import { createStackNavigator } from 'react-navigation';
import SchoolSignUpScreen from '../screens/SchoolSignUpScreen';
import StudentSignUpScreen from '../screens/StudentSignUpScreen';
import SelectFlowScreen from '../screens/SelectFlowScreen';

const App = createStackNavigator({
  SelectFlow: { screen: SelectFlowScreen },
  SignUpSchool: { screen: SchoolSignUpScreen },
  SignUpStudent: { screen: StudentSignUpScreen },
});

export default App;
