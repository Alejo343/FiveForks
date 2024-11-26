import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa createStackNavigator
import { screen } from "../utils";
import AccountScreen from "../screens/AccountScreen";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screen.account.account}
      component={AccountScreen}
      options={{ title: "Favortios" }}
    />
  </Stack.Navigator>
);

export default AppNavigation;
