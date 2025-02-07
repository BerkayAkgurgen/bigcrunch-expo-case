import { Dimensions, View } from "react-native";
import { PenIcon } from "../../assets/icons";
import { createPostButtonStyle } from "./style/createPostButton.style";

const CreatePostButton = () => {
  return (
    <View
      style={createPostButtonStyle.postButton(Dimensions.get("screen").width)}
    >
      <PenIcon />
    </View>
  );
};

export default CreatePostButton;
