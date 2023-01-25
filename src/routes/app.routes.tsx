import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "@screens/Home";
import { Food } from "@screens/Food";
import { Feedback } from "@screens/Feedback";
import { Statistics } from "@screens/Statistics";
import { FormFood } from "@screens/FormFood";

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="food" component={Food} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="formFood" component={FormFood} />
    </Navigator>
  );
}
