import React,{} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {

  return (
    <View style={styles.container}>
      <Text style={{fontSize:30,fontWeight:'bold'}}>Welcome to the page</Text>
       
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
   margin:10,
   justifyContent:'center',
   alignItems:'center'
  },
})