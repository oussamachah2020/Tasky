import { SchedulesHolder } from "@/components/Agenda";
import { fontFamily } from "@/constants/typography";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, View } from "react-native";
import { Agenda } from "react-native-calendars";

export default function SchedulesScreen() {
  const [selected, setSelected] = useState("");

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#E9A5FF",
            padding: 8,
            borderRadius: 10,
          }}
        >
          <Ionicons name="calendar-clear-outline" size={25} />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontFamily: fontFamily.semiBold,
            fontWeight: "600",
          }}
        >
          Calendar
        </Text>
      </View>
      <SchedulesHolder />
    </View>
  );
}
