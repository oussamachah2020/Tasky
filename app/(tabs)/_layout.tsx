import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { Platform, Text } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      sceneContainerStyle={{
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? 45 : 50,
        paddingHorizontal: 10,
      }}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "grid" : "grid-outline"}
              size={25}
              color={focused ? "#A085FF" : color}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? "#A085FF" : color,
                fontSize: 12,
              }}
            >
              Dashboard
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "list-sharp" : "list-outline"}
              size={25}
              color={focused ? "#A085FF" : color}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? "#A085FF" : color,
                fontSize: 12,
              }}
            >
              Tasks
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="schedules"
        options={{
          title: "Shedules",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              size={25}
              color={focused ? "#A085FF" : color}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? "#A085FF" : color,
                fontSize: 12,
              }}
            >
              Schedules
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person-circle" : "person-circle-outline"}
              size={28}
              color={focused ? "#A085FF" : color}
            />
          ),
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? "#A085FF" : color,
                fontSize: 12,
              }}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
