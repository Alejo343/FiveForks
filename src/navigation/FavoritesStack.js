import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa createStackNavigator
import { screen } from "../utils";
import FavoritesScreen from "../screens/FavoritesScreen";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screen.favorite.favoriteRestaurants}
      component={FavoritesScreen}
      options={{ title: "Favortios" }}
    />
  </Stack.Navigator>
);

export default AppNavigation;
