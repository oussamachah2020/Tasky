import { TASKS } from "@/constants/defaultValues";
import { fontFamily } from "@/constants/typography";
import { CATEGORIES, PRIORITIES, Task } from "@/types/tasks";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { Platform, Text, View } from "react-native";
import PDF from "@/assets/images/icons/pdf.svg";
import Docs from "@/assets/images/icons/docs.svg";

type Props = {};

const TaskDetails = (props: Props) => {
  const { id } = useLocalSearchParams();
  const selectedTask = TASKS.filter((item) => item.id === id)[0];

  const status = useMemo(() => {
    if (selectedTask.category === CATEGORIES.COMPLETE) {
      return {
        label: "Complete",
        bg: "#79E9A6",
      };
    } else if (selectedTask.category === CATEGORIES.TODO) {
      return {
        label: "Todo",
        bg: "#F9AB65",
      };
    } else if (selectedTask.category === CATEGORIES.ON_HOLD) {
      return {
        label: "On Hold",
        bg: "#688EFF",
      };
    } else {
      return {
        label: "In Progress",
        bg: "#DA82F8",
      };
    }
  }, [selectedTask, selectedTask.category]);

  const formattedPriorities = useMemo(() => {
    if (selectedTask.priority === PRIORITIES.LOW) {
      return {
        label: "Low",
        background: "#79E9A6",
      };
    } else if (selectedTask.priority === PRIORITIES.MEDIUM) {
      return {
        label: "Medium",
        background: "#F9AB65",
      };
    } else {
      return {
        label: "High",
        background: "rgba(255,0,0,0.7)",
      };
    }
  }, [selectedTask, selectedTask.priority]);

  return (
    <View
      style={{
        marginTop: Platform.OS === "android" ? 45 : 50,
        marginHorizontal: 15,
      }}
    >
      <View
        style={{
          gap: 10,
        }}
      >
        <Ionicons
          name="chevron-back"
          size={25}
          onPress={() => router.replace("/tasks")}
        />
        <Text
          style={{
            fontSize: 30,
            fontFamily: fontFamily.semiBold,
            fontWeight: 500,
          }}
        >
          Task Details
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          gap: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#66DA98",
              width: 50,
              borderRadius: 10,
            }}
          >
            <Ionicons
              name="cube-outline"
              size={40}
              style={{
                textAlign: "center",
                borderRadius: 20,
                padding: 4,
              }}
            />
          </View>
          <View
            style={{
              gap: 4,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: fontFamily.semiBold,
                fontWeight: "600",
              }}
            >
              {selectedTask.title}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: fontFamily.Regular,
                fontWeight: "400",
                color: "rgba(0,0,0,0.8)",
              }}
            >
              App
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              padding: 15,
              gap: 10,
              width: "48%",
              borderColor: "rgba(0,0,0,0.2)",
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "rgba(0,0,0,0.6)",
              }}
            >
              Start Date
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 7,
                alignItems: "center",
              }}
            >
              <Ionicons
                name="calendar-clear-outline"
                size={23}
                color={"rgba(255,0,0, 0.7)"}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                }}
              >
                {selectedTask.date}
              </Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 1,
              padding: 15,
              gap: 10,
              borderColor: "rgba(0,0,0,0.2)",
              borderRadius: 12,
              width: "48%",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "rgba(0,0,0,0.6)",
              }}
            >
              Due Date
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 7,
                alignItems: "center",
              }}
            >
              <Ionicons
                name="calendar-clear-outline"
                size={23}
                color={"rgba(255,0,0, 0.7)"}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                }}
              >
                20 October 2024
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 1,
            borderWidth: 0.5,
            borderColor: "rgba(0,0,0,0.2)",
          }}
        />
        <View
          style={{
            gap: 35,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 18,
              }}
            >
              Status
            </Text>
            <View
              style={{
                borderWidth: 1,
                width: 200,
                paddingVertical: 10,
                borderRadius: 50,
                backgroundColor: status.bg,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                {status.label}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 18,
              }}
            >
              Priority
            </Text>
            <View
              style={{
                borderWidth: 1,
                width: 100,
                paddingVertical: 10,
                borderRadius: 50,
                backgroundColor: formattedPriorities.background,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                {formattedPriorities.label}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 18,
              }}
            >
              Tags
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  width: 100,
                  paddingVertical: 10,
                  borderRadius: 50,
                  backgroundColor: "#F6C06D",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  On Track
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  width: 100,
                  paddingVertical: 10,
                  borderRadius: 50,
                  backgroundColor: "#688EFF",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  {selectedTask.tag}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 1,
            borderWidth: 0.5,
            borderColor: "rgba(0,0,0,0.2)",
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            Attachment
          </Text>

          <View
            style={{
              gap: 20,
              marginTop: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(255,0,0,0.1)",
                borderRadius: 15,
                paddingHorizontal: 15,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <PDF width={45} />
              <View
                style={{
                  gap: 5,
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Developer Document.pdf
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 12,
                    color: "rgba(0,0,0,0.8)",
                  }}
                >
                  2.5 MB PDF
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#AFDBF5",
                borderRadius: 15,
                paddingHorizontal: 15,
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Docs width={43} />
              <View
                style={{
                  gap: 5,
                }}
              >
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 14,
                  }}
                >
                  Mobile Application brief.doc
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 12,
                    color: "rgba(0,0,0,0.8)",
                  }}
                >
                  2.5 MB Document
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TaskDetails;
