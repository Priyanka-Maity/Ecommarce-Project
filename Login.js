import React, { useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
export default function Login({navigation}) {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    })
    const [show, setShow] = React.useState()
    const [visible, setVisible] = React.useState()
   
    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View style={{ height: 50, width: "100%", padding: 5, marginBottom: 20, borderWidth: 3, borderColor: '#e6e6e6' }}>
                <TextInput placeholder="Enter your mail" onChangeText={(e)=>{setData(e)}} />
            </View>
            <View style={{ height: 50, width: "100%", padding: 5, marginBottom: 20, borderWidth: 3, borderColor: '#e6e6e6', }}>
                <TextInput placeholder="Enter your name" onChangeText={(e)=>{setData(e)}} />

            </View>
            <View style={{ height: 50, width: "100%", padding: 5, marginBottom: 40, borderWidth: 3, borderColor: '#e6e6e6', flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput placeholder="Enter your Password"  />
                <TouchableOpacity onPress={() => { setVisible(!visible), setShow(!show) }}>
                    <MaterialCommunityIcons name={show ? "eye-outline" : "eye-off-outline"} size={24} color="black" style={{ paddingRight: 5 }} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                <LinearGradient
                    colors={['#bebcfc', '#b185db']} style={{ marginBottom: 20, borderRadius: 5 }}>
                    <View style={{
                        height: 50, width: "100%", padding: 5, justifyContent: 'center',
                    }}>
                        <Text style={{ textAlign: 'center', color: '#fff' }}>Login</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{
                    height: 50, width: "100%", padding: 5, marginBottom: 20, borderWidth: 3, borderColor: '#e6e6e6', justifyContent: 'center',
                }}>
                    <Text style={{ textAlign: 'center' }}>Signin</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

