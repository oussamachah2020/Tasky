import { fontFamily } from "@/constants/typography";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { Badge } from "react-native-paper";

type Props = {};

const CategoryCard = ({
  category,
  selectedCategory,
  setCategoryId,
}: {
  selectedCategory: number;
  category: {
    id: number;
    label: string;
    count: number;
  };
  setCategoryId: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderRadius: 30,
        padding: 10,
        width: 130,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor:
          selectedCategory === category.id ? "#000" : "transparent",
      }}
      onPress={() => setCategoryId(category.id)}
    >
      <Text
        style={{
          fontFamily: fontFamily.semiBold,
          color: selectedCategory === category.id ? "#fff" : "#000",
        }}
      >
        {category.label}
      </Text>
      <Badge
        style={{
          backgroundColor:
            selectedCategory === category.id ? "#79E9A6" : "rgba(0,0,0,0.1)",
          color: "#000",
          width: 30,
        }}
      >
        {category.count}
      </Badge>
    </TouchableOpacity>
  );
};

const CategoriesSlider = (props: Props) => {
  const CATEGORIES = [
    {
      id: 1,
      label: "Complete",
      count: 10,
    },
    {
      id: 2,
      label: "To Do",
      count: 10,
    },
    {
      id: 3,
      label: "In Review",
      count: 10,
    },
    {
      id: 4,
      label: "On Hold",
      count: 10,
    },
  ];

  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => (
        <CategoryCard
          category={item}
          selectedCategory={selectedCategoryId}
          setCategoryId={setSelectedCategoryId}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 2,
        marginTop: 30,
        gap: 10,
      }}
    />
  );
};

export default CategoriesSlider;
