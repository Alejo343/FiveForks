import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importa createStackNavigator
import { screen } from "../utils";
import AccountScreen from "../screens/Account/AccountScreen";
import { LoginScreen } from "../screens/Account/LoginScreen";
import { RegisterScreen } from "../screens/Account/RegisterScreen";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screen.account.account}
      component={AccountScreen}
      options={{ title: "Cuenta" }}
    />
    <Stack.Screen
      name={screen.account.login}
      component={LoginScreen}
      options={{ title: "Iniciar sesión" }}
    />
    <Stack.Screen
      name={screen.account.register}
      component={RegisterScreen}
      options={{ title: "Registrarse" }}
    />
  </Stack.Navigator>
);

export default AppNavigation;
