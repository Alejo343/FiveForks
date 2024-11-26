import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa createStackNavigator
import { screen } from "../utils";
import RankingScreen from "../screens/RankingScreen";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screen.ranking.ranking}
      component={RankingScreen}
      options={{ title: "Ranking" }}
    />
  </Stack.Navigator>
);

export default AppNavigation;
