import { fontFamily } from "@/constants/typography";
import { PRIORITIES, Task } from "@/types/tasks";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  task: Task;
};

const TaskCard = ({ task }: Props) => {
  const formattedPriorities = useMemo(() => {
    if (task.priority === PRIORITIES.LOW) {
      return {
        label: "Low",
        background: "#79E9A6",
      };
    } else if (task.priority === PRIORITIES.MEDIUM) {
      return {
        label: "Medium",
        background: "#FFA836",
      };
    } else {
      return {
        label: "High",
        background: "#E9A5FF",
      };
    }
  }, [task, task.priority]);

  return (
    <TouchableOpacity
      style={{
        width: "100%",
        borderColor: "#000",
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 12,
      }}
      onPress={() => router.push(`/task/${task.id}`)}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily.semiBold,
            fontSize: 16,
          }}
        >
          {task.title}
        </Text>
        <Entypo name="dots-three-horizontal" size={20} color="black" />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          marginTop: 10,
        }}
      >
        <View
          style={{
            borderRadius: 50,
            backgroundColor: formattedPriorities.background,
            paddingHorizontal: 15,
            paddingVertical: 6,
          }}
        >
          <Text>{formattedPriorities.label}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 8,
          }}
        >
          <Ionicons name="calendar-outline" size={20} />

          <Text
            style={{
              fontFamily: fontFamily.semiBold,
              fontSize: 16,
            }}
          >
            {task.date}
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 3,
          }}
        >
          <Ionicons name="attach-outline" size={20} />
          <Text>2</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
