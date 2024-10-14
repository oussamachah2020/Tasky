import { fontFamily } from "@/constants/typography";
import React from "react";
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const Statistics = () => {
  const barData = [
    { value: 250, label: "M", frontColor: "#FFB74D" },
    { value: 500, label: "T", frontColor: "#FF7043" },
    { value: 745, label: "W", frontColor: "#FF7043" },
    { value: 320, label: "T", frontColor: "#FFB74D" },
    { value: 600, label: "F", frontColor: "#FF7043" },
    { value: 256, label: "S", frontColor: "#FFB74D" },
    { value: 300, label: "S", frontColor: "#FFB74D" },
  ];

  const numberOfBars = barData.length;
  const barWidth = (SCREEN_WIDTH - 220) / numberOfBars;

  return (
    <View>
      <Text style={styles.title}>Statistics</Text>
      <BarChart
        barWidth={barWidth}
        height={Platform.OS === "ios" ? 170 : 100}
        noOfSections={3}
        barBorderRadius={6}
        frontColor="lightgray"
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
        initialSpacing={15}
        isAnimated
      />
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  title: {
    fontFamily: fontFamily.Medium,
    fontSize: 16,
    marginBottom: 18,
  },
});
