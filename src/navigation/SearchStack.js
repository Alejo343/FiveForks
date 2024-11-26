import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa createStackNavigator
import { screen } from "../utils";
import SearchScreen from "../screens/SearchScreen";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screen.search.search}
      component={SearchScreen}
      options={{ title: "Busqueda" }}
    />
  </Stack.Navigator>
);

export default AppNavigation;
