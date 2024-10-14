import Statistics from "@/components/dashboard/statistics";
import Summary from "@/components/dashboard/summary";
import { fontFamily } from "@/constants/typography";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Platform } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        paddingHorizontal: 10,
      }}
    >
      <Text style={styles.title}>Dashboard</Text>
      <Summary />
      <View
        style={{
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.1)",
          marginVertical: 15,
        }}
      />
      <Statistics />
      <View
        style={{
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.1)",
          marginVertical: 15,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.card}>
          <Text
            style={{
              fontWeight: "600",
              fontFamily: fontFamily.Regular,
            }}
          >
            Total working hours
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 7,
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: fontFamily.semiBold,
              }}
            >
              5:25:06
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 3,
                alignItems: "center",
                backgroundColor: "#66DA98",
                width: 60,
                padding: 5,
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <Ionicons name="arrow-up" size={16} />
              <Text>34%</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <Text
            style={{
              fontWeight: "600",
              fontFamily: fontFamily.Regular,
            }}
          >
            Total task activity
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 7,
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: fontFamily.semiBold,
              }}
            >
              125 Tasks
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 3,
                alignItems: "center",
                backgroundColor: "#688EFF",
                width: 60,
                padding: 5,
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <Ionicons name="arrow-down" size={16} />
              <Text>50%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: fontFamily.semiBold,
  },
  card: {
    borderWidth: 1,
    borderColor: "#000",
    height: 80,
    width: 190,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});
