import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import WarningPrecausioPage from "../pages/WarningPrecausioPage";
 import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
// import MainPage from "../pages/mainPage";
// import AboutDosPage from "../pages/AboutDOSPage";
// import ChildrenStack from "./stacks/ChildrensStack";
// import { useAuth } from "../context/AuthProvider";
// import LogPage from "../pages/logs/LogPage";
// import MainPageReminded from "../pages/MainPageReminded";
// import Pharmacy from "../pages/pharmacy/Pharmacy";
// import DoseStack from "./stacks/DoseStack";  
import CongeScreen from "../screens/CongeScreen";
const DrawerMenu = () => {
  const Drawer = createDrawerNavigator();
//   const { logout } = useAuth();
   return (
    <Drawer.Navigator
      initialRouteName="mainPage"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#b35166", // Change this to the desired color
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          textAlign: "center",
          fontWeight: "bold",
        },
        drawerStyle: {
          backgroundColor: "#e5788e",
          width: 240,
        },
        drawerActiveTintColor: "#661821", // Change the selected color to desired color
        drawerLabelStyle: {
          color: "white", // Change the color of menu item to white
        },
        headerTitleAlign: "center",
      }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {/* <DrawerItem */}
              {/* labelStyle={{ color: "white" }} */}
              {/* label="Logout" */}
              {/* onPress={() => logout()} */}
            {/* /> */}
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        options={{ headerTitle: "Conge ", drawerLabel: "Conge" }}
        name="mainPage"
        component={CongeScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({});
