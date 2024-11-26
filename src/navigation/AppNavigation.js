import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantStack from "./RestaurantStack";
import FavoritesStack from "./FavoritesStack";
import RankingStack from "./RankingStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";

import { Icon } from "react-native-elements";

import { screen } from "../utils";
const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => getScreenIcon(route, color, size), // Usar correctamente la función
      })}
    >
      <Tab.Screen
        name={screen.restaurant.tab}
        component={RestaurantStack}
        options={{ title: "Restaurantes" }}
      />
      <Tab.Screen
        name={screen.favorite.tab}
        component={FavoritesStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingStack}
        options={{ title: "Ranking" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Busqueda" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

function getScreenIcon(route, color, size) {
  let iconName;
  switch (route.name) {
    case screen.restaurant.tab:
      iconName = "home-outline";
      break;
    case screen.favorite.tab:
      iconName = "heart-outline";
      break;
    case screen.ranking.tab:
      iconName = "trophy-outline";
      break;
    case screen.search.tab:
      iconName = "magnify"; // Corrige a "magnify" en lugar de "search-outline"
      break;
    case screen.account.tab:
      iconName = "account-outline";
      break;
    default:
      iconName = "home-outline";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
