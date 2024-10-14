import React from "react";
import { Platform, Text, View } from "react-native";

type Props = {};

const TaskDetails = (props: Props) => {
  return (
    <View
      style={{
        marginTop: Platform.OS === "android" ? 45 : 50,
        marginHorizontal: 10,
      }}
    >
      <Text>Details</Text>
    </View>
  );
};

export default TaskDetails;
