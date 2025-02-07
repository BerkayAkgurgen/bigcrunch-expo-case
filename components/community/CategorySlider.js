import { Dimensions, FlatList, Pressable, Text, View } from "react-native";
import { categorySliderStyle } from "./style/categorySlider.style";

const CategorySlider = ({ selectedCategory, setSelectedCategory }) => {
  const screenWidth = Dimensions.get("window").width;

  const renderItem = ({ item }) => (
    <Pressable
      style={categorySliderStyle.categorySliderWrapper(
        item.categoryId + 1 === categoriesList.length
      )}
      onPress={() => setSelectedCategory(item.categoryId)}
    >
      <View
        style={categorySliderStyle.categorySliderContainer(
          selectedCategory === item.categoryId
        )}
      >
        <Text
          style={categorySliderStyle.categorySliderTitle(
            selectedCategory === item.categoryId
          )}
        >
          {item.name}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View>
      <Text style={categorySliderStyle.categoriesTitle}>Wellness Hub</Text>
      <FlatList
        data={categoriesList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.categoryId.toString()}
        renderItem={renderItem}
        contentContainerStyle={categorySliderStyle.scrollSliderContainer}
        style={{ width: screenWidth }}
      />
    </View>
  );
};

export default CategorySlider;

const categoriesList = [
  { categoryId: 0, name: "Trending" },
  { categoryId: 1, name: "Relationship" },
  { categoryId: 2, name: "Self Care" },
  { categoryId: 3, name: "Top Problems" },
];
