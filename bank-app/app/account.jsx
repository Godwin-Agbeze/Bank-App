import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity,Image, TextInput} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Input from "../components/input";
import { useState } from "react";
import { router } from "expo-router";

const AccountPage = () => {

    const [formData, setFormData] = useState({
          name : "",
          bankAccount : "",
          email : "",
          password : "",
          yourAddress : "",
    })

    return (

        <SafeAreaView style={styles.container}>
             <View style={{flexDirection:"row",justifyContent:"space-between", paddingHorizontal:20, backgroundColor:"rgba(8, 10, 140, 0.87)"}}>
                        <TouchableOpacity>
                            <Ionicons name="reorder-three-outline" size={24} color="#FFF" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.back("/home")} >
                           <FontAwesome6 name="less-than" size={20} color="#FFF" />
                        </TouchableOpacity>

                        <Text style={{color:"#FFF"}}>ACCOUNT</Text>

                        <TouchableOpacity>
                            <MaterialCommunityIcons name="greater-than" size={24} color="#FFF" />
                        </TouchableOpacity>                        

                        <TouchableOpacity>
                            <Ionicons name="settings-outline" size={24} color="#FFF" />
                        </TouchableOpacity>
                </View>

                  <View style={styles.top}></View>

                 <TouchableOpacity style={{width:110, height:110, backgroundColor:"rgb(17, 181, 231)", borderRadius:55, justifyContent:'center', alignItems:'center', alignSelf:"center", marginTop:30 }}>
                <Image style={{width:90,height:90, tintColor:"#FFF"}} 
                source={require("../assets/images/profile_icon.png")}/>
                </TouchableOpacity>

                            <View style={styles.bottom}>
                                <Text>YOUR NAME</Text>
                                <Input
                                    value={formData.name}
                                    type="default"
                                    onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
                                    title="KARINA BUYS"
                                />

                                 <Text>BANK ACCOUNT</Text>
                                <Input
                                    value={formData.bankAccount}
                                    type="numeric"
                                    onChangeText={(text) => setFormData(prev => ({ ...prev, bankAccount: text }))}
                                    title="00 123 456"
                                />

                                 <Text>EMAIL</Text>
                                <Input
                                    value={formData.email}
                                    type="email-address"
                                    onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
                                    title="karina_buys@email.com"
                                />

                                <Text>PASSWORD</Text>
                                <Input
                                    value={formData.password}
                                    security={true}
                                    onChangeText={(text) => setFormData(prev => ({ ...prev, password: text }))}
                                    title="+44 558 257 68 005   "
                                />

                                 <Text>YOUR ADDRESS</Text>
                                <TextInput
                                value={formData.yourAddress} 
                                type="default"
                                onChangeText={(text) => setFormData(prev => ({...prev, yourAddress:text }))}
                                placeholder="lorem ipsum 22nd street, Tincidunt ut laarest 5N 27T - Lorem ipsioum, lorem ipsum 22nd street, Tincidunt ut laarest 5N 27T - Lorem ipsioum"
                                
                                style={{ borderRadius: 10,
                                    borderColor:"#000000a0", 
                                    borderWidth: 0.5, 
                                    paddingHorizontal : 10,
                                    height:100,
                                    paddingHorizontal:20
                                }}
                                
                                >
                              </TextInput>

                              <TouchableOpacity style={{
                                backgroundColor:"rgba(8, 10, 140, 0.87)", 
                                height:40,
                                width:200,
                                borderRadius:15, 
                                justifyContent:"center", 
                                alignItems:"center",
                                alignSelf:"center",
                                marginTop:20,
                                }}>
                                <Text style={{color:"#FFF"}}>Save Changes</Text>
                              </TouchableOpacity>
                            </View>


           
           
        </SafeAreaView>
    )
}


const styles =  StyleSheet.create({
    container :{
        flex : 1,
    },

    top : {
    height: 10,
    backgroundColor: "rgba(8, 10, 140, 0.87)",
  },

  bottom : {
    marginTop:20,
    marginHorizontal:20,
    gap : 12,
    justifyContent:"center",
  },
})


export default AccountPage;