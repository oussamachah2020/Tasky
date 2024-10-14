import { fontFamily } from "@/constants/typography";
import { SummaryData } from "@/types/dashboard";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
import { Entypo } from "@expo/vector-icons"; // Import Entypo for the ellipsis icon

type Props = {};

function Summary({}: Props) {
  const data: SummaryData[] = [
    {
      id: 1,
      label: "In Progress",
      count: 24,
    },
    {
      id: 2,
      label: "On Hold",
      count: 16,
    },
    {
      id: 3,
      label: "In Review",
      count: 56,
    },
    {
      id: 4,
      label: "Completed",
      count: 45,
    },
  ];

  const getGradientColors = (id: number) => {
    switch (id) {
      case 1:
        return ["#A085FF", "#688EFF"]; // Light purple gradient
      case 2:
        return ["#F6C06D", "#F9AB65"]; // Yellow gradient
      case 3:
        return ["#DA82F8", "#E9A5FF"]; // Pinkish-purple gradient
      case 4:
        return ["#66DA98", "#79E9A6"]; // Green gradient
      default:
        return ["#00a86b", "#00A86B"]; // Fallback gradient
    }
  };

  const renderItem = (item: SummaryData) => (
    <LinearGradient
      key={item.id}
      colors={getGradientColors(item.id)} // Dynamic gradient colors based on item id
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.itemContainer}
    >
      <View style={styles.iconContainer}>
        <Entypo name="dots-three-horizontal" size={20} color="black" />
      </View>
      <Text style={styles.itemCount}>{item.count}</Text>
      <Text style={styles.itemName}>{item.label}</Text>
    </LinearGradient>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.summary}>Summary</Text>
      <View style={styles.gridContainer}>
        {data.map((item) => renderItem(item))}
      </View>
    </View>
  );
}

export default Summary;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  summary: {
    fontFamily: fontFamily.Medium,
    fontSize: 18,
    marginBottom: 15,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  itemContainer: {
    position: "relative",
    borderRadius: 20, // Rounded corners like the example
    padding: 15,
    height: Platform.OS === "ios" ? 140 : 120,
    width: "48%", // Adjust width to fit 2 items in a row
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1, // Subtle shadow for a floating effect
    shadowRadius: 10,
    elevation: 5, // For Android shadow
    borderColor: "#000",
    borderWidth: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 14,
    right: 20,
    width: 30,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor: "#000",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemCount: {
    fontSize: 32, // Large, bold number for count
    fontWeight: "700",
    color: "#000", // Black color for numbers
  },
  itemName: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
    marginTop: 5,
  },
});
