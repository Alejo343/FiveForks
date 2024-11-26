import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa createStackNavigator
import { screen } from "../utils";
import ResturantsScreen from "../screens/Restaurants/RestuarantsScreen";
import AddRestaurant from "../screens/Restaurants/AddRestaurant";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screen.restaurant.restaurants}
      component={ResturantsScreen}
      options={{ title: "Restaurantes" }}
    />
    <Stack.Screen
      name={screen.restaurant.addResturant}
      component={AddRestaurant}
      options={{ title: "Agregar Restaurante" }}
    />
  </Stack.Navigator>
);

export default AppNavigation;
