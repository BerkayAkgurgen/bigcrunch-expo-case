import { ScrollView, View } from "react-native";
import { Header } from "../../components";
import {
  CategorySlider,
  CreatePostButton,
  UserPosts,
} from "../../components/community";
import { indexStyles } from "../../style/index.style";
import { useState } from "react";

const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={indexStyles.appBackground}
        contentContainerStyle={[indexStyles.flexGrow, indexStyles.fullHeight]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={indexStyles.wrapper}
          contentContainerStyle={indexStyles.flexGrow}
        >
          <Header />
          <CategorySlider
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <UserPosts selectedCategory={selectedCategory} />
        </ScrollView>
      </ScrollView>
      <View style={indexStyles.flex}>
        <CreatePostButton />
      </View>
    </>
  );
};

export default Community;
