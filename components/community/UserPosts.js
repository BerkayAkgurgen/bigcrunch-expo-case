import React, { useState, useMemo } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import {
  AnimationAvatar,
  AnimationAvatarFourth,
  AnimationAvatarSecond,
  AnimationAvatarThird,
} from "../../assets/images/";
import { LikeIcon, CommentIcon, ShareIcon } from "../../assets/icons";
import { userPostsStyle } from "./style/userPosts.style";

const UserPosts = ({ selectedCategory }) => {
  const [posts, setPosts] = useState(
    postArray.map((post, index) => ({
      ...post,
      liked: index === 0,
      likeCount: index === 0 ? post.likeCount + 1 : post.likeCount,
    }))
  );

  const filteredPosts = useMemo(
    () => posts.filter((post) => post.categoryId.includes(selectedCategory)),
    [selectedCategory, posts]
  );

  const handleLike = (index) => {
    setPosts((prevPosts) =>
      prevPosts.map((post, i) =>
        i === index
          ? {
              ...post,
              likeCount: post.liked ? post.likeCount - 1 : post.likeCount + 1,
              liked: !post.liked,
            }
          : post
      )
    );
  };

  const PostItem = ({ item, index }) => (
    <View style={userPostsStyle.postContainer}>
      <View style={userPostsStyle.userInfoContainer}>
        <Image source={item.avatarImage} style={userPostsStyle.avatar} />
        <View style={userPostsStyle.textContainer}>
          <View style={userPostsStyle.userRow}>
            <Text style={userPostsStyle.userName}>{item.name}</Text>
            <Text style={userPostsStyle.separator}>•</Text>
            <Text style={userPostsStyle.postDate}>{item.postDate}</Text>
          </View>
          <Text style={userPostsStyle.postContent}>{item.postContent}</Text>
        </View>
      </View>
      <View style={userPostsStyle.actionsContainer}>
        <Pressable
          style={userPostsStyle.actionItem}
          onPress={() => handleLike(item.id)}
        >
          <LikeIcon color={item.liked ? "#FE8235" : "#D6CCC6"} />
          <Text style={userPostsStyle.actionText}>{item.likeCount}</Text>
        </Pressable>
        <View style={userPostsStyle.actionItem}>
          <CommentIcon />
          <Text style={userPostsStyle.actionText}>{item.commentCount}</Text>
        </View>
        <View style={userPostsStyle.shareIconContainer}>
          <ShareIcon />
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={filteredPosts}
      keyExtractor={(item, index) => index.toString()}
      scrollEnabled={false}
      renderItem={({ item, index }) => <PostItem item={item} index={index} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={userPostsStyle.container}
      ListEmptyComponent={
        <Text style={userPostsStyle.noPostsText}>No posts available</Text>
      }
    />
  );
};

export default UserPosts;

const postArray = [
  {
    id: 0,
    name: "Coal Dingo",
    postContent:
      "Is there a therapy which can cure crossdressing & bdsm compulsion?",
    avatarImage: AnimationAvatar,
    likeCount: 2,
    commentCount: 0,
    postDate: "just now",
    categoryId: [0, 2],
  },
  {
    id: 1,
    name: "Pigeon Car",
    postContent:
      "Is there a therapy which can cure crossdressing & bdsm compulsion?",
    avatarImage: AnimationAvatarSecond,
    likeCount: 12,
    commentCount: 2,
    postDate: "3 hrs ago",
    categoryId: [0, 1],
  },
  {
    id: 2,
    name: "Pigeon Car",
    postContent:
      "Is there a therapy which can cure crossdressing & bdsm compulsion?",
    avatarImage: AnimationAvatarThird,
    likeCount: 12,
    commentCount: 2,
    postDate: "1hr ago",
    categoryId: [0, 3],
  },
  {
    id: 3,
    name: "Pigeon Car",
    postContent:
      "Is there a therapy which can cure crossdressing & bdsm compulsion?",
    avatarImage: AnimationAvatarFourth,
    likeCount: 12,
    commentCount: 2,
    postDate: "2 min ago",
    categoryId: [0, 2],
  },
  {
    id: 4,
    name: "Pigeon Car",
    postContent:
      "Is there a therapy which can cure crossdressing & bdsm compulsion?",
    avatarImage: AnimationAvatarSecond,
    likeCount: 12,
    commentCount: 2,
    postDate: "3 hrs ago",
    categoryId: [0, 3],
  },
];
