import React,{ useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
//import * as userActions from '../../store/actions/users'
import * as sessionActions from '../../store/actions/sessions'; 
import {
  View,
  FlatList,
  Text,
  Platform,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
//import SESSIONS from "../../data/session-dummy-data";
import ProductItem from "../../components/shop/ProductItem";
import Colors from "../../constants/Colors";
import { Card } from "react-native-elements";

const ShoppingSessionScreen = (props) => {
  const navigation = props.navigation
  const userId = useSelector((state) => state.auth.userId);
  const sessionList = useSelector((state) => state.sessions.availableSessions);
  const userSessions = sessionList.filter((session) => {

    for (let i = 0; i < session.members.length; i++) {
      if (session.members[i] == userId)
        return true;
    }
    return false;
  })
  console.log("user id is", userId);
  console.log("all sessions", sessionList);
  console.log("current user sesion", userSessions);

  const joinHandler = (title, members) => {
    //console.log("title is",title);
    //console.log("joineers are",members);
    navigation.navigate("CurrentShoppping", {
      title: title,
      members: members
    });

  };

  const ViewDetailHandler = (title, members) => {
    navigation.navigate("ViewDetail", {
      title: title,
      members: members
    });
  }
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }


  return (
    <View>
      <FlatList
        // onRefresh={loadProducts}
        // refreshing={isRefreshing}
        style={{ height: '95%' }}
        data={userSessions}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <Card>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{fontWeight:'700',color:Colors.primary}}>{itemData.item.title}</Text>

              <Text color={Colors.primary}>{`${itemData.item.date.date}/${itemData.item.date.month}/${itemData.item.date.year}`}</Text>
              <View style={{flexDirection:'row'}}>
              <Text color={Colors.primary}>{`${itemData.item.time.hour}:${itemData.item.time.minute}`} </Text>
              <Text>{itemData.item.time.hour >= 12 ? 'PM' : 'AM'}</Text>
              </View>
              {itemData.item.newDate == new Date() ?
                <Button
                  color={Colors.primary}
                  title="Join"
                  onPress={() => joinHandler(itemData.item.title, itemData.item.members)}
                /> :
                <Button
                  color={Colors.primary}
                  title="View Details"
                  onPress={() => ViewDetailHandler(itemData.item.title, itemData.item.members)}
                />}

            </View>
          </Card>
        )}
      />
      <View style={styles.buttonCont} onPress={() => navigation.navigate('FriendList')}>
        <Text style={{ color: 'white', fontSize: 40 }}
          onPress={() => navigation.navigate('FriendList', { title: "Create New Session", name: "session", })} >+</Text>

      </View>
    </View>
  );
};

ShoppingSessionScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Virtual Shopping Session",

  };
};

const styles = StyleSheet.create({
  buttonCont: {
    height: 40,
    width: 40,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 6,
    // marginBottom:'10%',
    marginTop: '-10%',

    zIndex: 100,
    marginTop:'-10%',
    
    zIndex:100
   },
   centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  searchBar: {
    height: 45,
    padding: 10,
  }
})


export default ShoppingSessionScreen;
