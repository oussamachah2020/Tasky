import { Entypo } from "@expo/vector-icons";
import * as React from "react";
import { View } from "react-native";
import { Button, Menu, Divider, PaperProvider } from "react-native-paper";

const Actions = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button>
              <Entypo name="dots-three-horizontal" size={20} color="black" />
            </Button>
          }
        >
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </PaperProvider>
  );
};

export default Actions;
