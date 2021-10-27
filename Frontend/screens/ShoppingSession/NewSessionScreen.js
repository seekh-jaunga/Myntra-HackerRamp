import React from "react";
import {
  View,
  FlatList,
  Text,
  Platform,
  ActivityIndicator,
  StyleSheet,
  Button,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import Colors from "../../constants/Colors";
import { SearchBar, FAB } from "react-native-elements";

import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from "../../styles/MessageStyles";

const Messages = [
  {
    id: "1",
    userName: "Jenny Doe",
    userImg: require("../../assets/users/user-3.jpg"),
    messageTime: "4 mins ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "2",
    userName: "John Doe",
    userImg: require("../../assets/users/user-1.jpg"),
    messageTime: "2 hours ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "3",
    userName: "Ken William",
    userImg: require("../../assets/users/user-4.jpg"),
    messageTime: "1 hours ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "4",
    userName: "Selina Paul",
    userImg: require("../../assets/users/user-6.jpg"),
    messageTime: "1 day ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "5",
    userName: "Christy Alex",
    userImg: require("../../assets/users/user-7.jpg"),
    messageTime: "2 days ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
];

const NewSessionScreen = () => {
  return (
    <View style={styles.body}>
      <SearchBar
        placeholder="Search for friends.."
        lightTheme="true"
        color={Colors.accent}
        // onChangeText={this.updateSearch}
        // value={search}
      />
      <FlatList
        data={Messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <UserInfo>
              <UserImgWrapper>
                <UserImg source={item.userImg} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <Button
                    color={Colors.primary}
                    title="Add"
                    onPress={() => {
                      // joinHandler(itemData.item.id, itemData.item.title);
                      console.log("Add clicked");
                    }}
                  />
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
      <FAB title="Create" placement="right" color={Colors.primary} />
    </View>
  );
};

NewSessionScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "New Shopping Group",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  body: { padding: 10 },
});

export default NewSessionScreen;
