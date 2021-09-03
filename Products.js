import React,{useState} from 'react';
import { StyleSheet, View,Text,Image,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Sampledata } from '../data/Sampledata';
import Headerview from '../component/Headerview';
export default function Products({navigation}) {

  return (
 
    <View style={styles.container}>
      <Headerview/>
      <View>
      
      </View>
      <ScrollView>
 { Sampledata.filter(Product => Product.Price<199).map(item =>(
   <Product key={item.ProductId} produc={item}
       />
 ))}
 </ScrollView>
    </View>
    
  );
}
const Product = ({produc,onpresshandaler}) => {
 return(
     <View style={{margin:5,backgroundColor:'#fff',
     height:330,width:"100%",
     borderRadius:6,padding:10,marginHorizontal:3}}>
    
         <View style={{flex:1}}>
            
             <Image source={{uri:produc.SmallImagePath}} style={{height:200,width:230,}}/>
           
       
         </View>
       <View style={{flex:1}}>
       <Text style={styles.Textstyle}>{produc.Collection}</Text>
       <Text  style={styles.Textstyle} > ProductTitle : {produc.ProductTitle}</Text>
       <Text style={styles.Textstyle}> price : {produc.Price}</Text>
        <Text style={styles.Textstyle}> StyleName : {produc.StyleName}</Text>
       <Text style={styles.Textstyle}> StyleNumber : {produc.StyleNumber}</Text>
         <Text style={styles.Textstyle} > NetQuantity : {produc.NetQuantity}</Text>
       <Text style={styles.Textstyle}> ProductCode : {produc.ProductCode}</Text>
       
       </View>
     </View>
   )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  
   justifyContent:'space-around'
  },
  Textstyle:{
    fontWeight:'bold',
    fontSize:15
  }
});
