import CategoriesSlider from "@/components/tasks/categories-slider";
import TaskCard from "@/components/tasks/task-card";
import { TASKS } from "@/constants/defaultValues";
import { fontFamily } from "@/constants/typography";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-paper";

type Props = {};



const TasksScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            fontSize: 25,
            fontFamily: fontFamily.semiBold,
          }}
        >
          Tasks List
        </Text>
      </View>
      <CategoriesSlider />
      <FlatList
        data={TASKS}
        renderItem={({ item }) => <TaskCard task={item} />}
        keyExtractor={(item) => item.id}
        style={{
          marginTop: 20,
        }}
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 3,
        }}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log("Pressed")}
      />
    </SafeAreaView>
  );
};

export default TasksScreen;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 10,
    bottom: 10,
    borderRadius: 10,
    backgroundColor: "#688EFF",
  },
});
