import CategoriesSlider from "@/components/tasks/categories-slider";
import TaskCard from "@/components/tasks/task-card";
import { fontFamily } from "@/constants/typography";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FAB } from "react-native-paper";

type Props = {};

const TASKS = [
  {
    id: "1",
    title: "Finish project report",
    priority: "HIGH",
    category: "IN REVIEW",
    date: "2024-10-14",
  },
  {
    id: "2",
    title: "Grocery shopping",
    priority: "MEDIUM",
    category: "TODO",
    date: "2024-10-15",
  },
  {
    id: "3",
    title: "Doctor's appointment",
    priority: "LOW",
    category: "COMPLETE",
    date: "2024-10-16",
  },
  {
    id: "4",
    title: "Team meeting",
    priority: "HIGH",
    category: "ON HOLD",
    date: "2024-10-17",
  },
  {
    id: "5",
    title: "Read a book",
    priority: "LOW",
    category: "TODO",
    date: "2024-10-18",
  },
];

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
    bottom: -(Dimensions.get("screen").height - 100),
    borderRadius: 10,
    backgroundColor: "#688EFF",
  },
});
