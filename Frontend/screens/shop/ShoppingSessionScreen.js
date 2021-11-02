import React from "react";
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
import SESSIONS from "../../data/session-dummy-data";
import ProductItem from "../../components/shop/ProductItem";
import Colors from "../../constants/Colors";
import { Card } from "react-native-elements";

const ShoppingSessionScreen = ({navigation}) => {


  const joinHandler = (id, title) => {
    // props.navigation.navigate("ProductDetail", {
    //   sessionId: id,
    //   sessioinTitle: title,
    // });
    console.log("clicked");
  };


  return (
    <View>
      <FlatList
        // onRefresh={loadProducts}
        // refreshing={isRefreshing}
        style={{height:'95%'}}
        data={SESSIONS}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <Card>
            <Text>{itemData.item.title}</Text>
            <Button
              color={Colors.primary}
              title={itemData.item.time}
              onPress={() => {
                joinHandler(itemData.item.id, itemData.item.title);
              }}
            />
          </Card>
        )}
      />
       <View style={styles.buttonCont} onPress={()=>navigation.navigate('FriendList')}>
      <Text style={{color:'white',fontSize:40}}  
      onPress={()=>navigation.navigate('FriendList',{title:"Create New Session",name:"session",})} >+</Text>

       </View>
    </View>
  );
};

ShoppingSessionScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Virtual Shopping Session",
  
  };
};

const styles=StyleSheet.create({
   buttonCont:{
    height:40,
    width:40,
    backgroundColor:Colors.primary,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center', 
    marginLeft:'80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3},
    shadowOpacity: 1,
    shadowRadius: 3,  
    elevation: 6,
    // marginBottom:'10%',
    marginTop:'-10%',
    
    zIndex:100
   }
})


export default ShoppingSessionScreen;
