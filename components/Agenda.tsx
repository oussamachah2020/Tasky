import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, View, Text } from "react-native";
import { Calendar } from "react-native-big-calendar";
import { differenceInMinutes } from "date-fns";

const today = new Date();
const events = [
  {
    title: "Meeting",
    start: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      10,
      0
    ),
    end: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      10,
      30
    ),
    color: "#A085FF",
  },
  {
    title: "Coffee break",
    start: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      15,
      45
    ),
    end: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      16,
      30
    ),
    color: "#F6C06D",
  },
];

export function SchedulesHolder() {
  const calendarHeight = Dimensions.get("screen").height - 200;
  const hourHeight = calendarHeight / 24; // Calculate the height of one hour

  return (
    <Calendar
      events={events}
      height={calendarHeight}
      mode="day" // Show only the current day's events
      hideNowIndicator // Hide the current time indicator
      calendarCellStyle={{
        borderWidth: 0, // Remove grid lines
      }}
      renderEvent={(event) => {
        const { start, end } = event;
        const durationInMinutes = differenceInMinutes(end, start);

        const startHour = start.getHours() + start.getMinutes() / 60; // Convert to decimal hour
        const top = startHour * hourHeight; // Positioning the event based on start time

        return (
          <View
            style={{
              backgroundColor: event.color,
              paddingVertical: 4,
              paddingHorizontal: 6,
              borderRadius: 8,
              position: "absolute",
              top: top, // Set top based on calculated value
              left: 0,
              right: 0,
              height: durationInMinutes * 1.5, // Set height based on duration
              borderWidth: 1,
            }}
          >
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              style={{
                fontSize: 12,
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              {event.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <Ionicons
                name="calendar-clear-outline"
                size={14}
                color={"#fff"}
              />
              <Text
                style={{
                  fontSize: 11,
                  color: "#fff",
                  fontWeight: "500",
                  marginLeft: 4,
                }}
              >
                {`${start.getHours()}:${start
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")} - ${end.getHours()}:${end
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")}`}
              </Text>
            </View>
          </View>
        );
      }}
    />
  );
}
