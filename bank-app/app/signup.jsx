import { StyleSheet,View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context"
import Input from "../components/input";
import Button from "../components/button";
import TransparentButton from "../components/button02";
import Entypo from '@expo/vector-icons/Entypo';
import { router } from 'expo-router';









const SignUp = () => {

    const [formData, setFormData] = useState({
        name : "",
        bankAccount : "",
        email : "",
        password : ""

    })
    const [checked, setChecked] = useState(false);

    return(
        <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="rgba(8, 10, 140, 0.87)"/>
                  <View style={styles.top}>
                    <Image style={{width:100, height:100, tintColor:"#FFF"}} source={require("../assets/images/Fast.png")}/>
                    <Text style={styles.topText}>Connect to your bank account</Text>
                    </View>

                    <View style={styles.bottom}>
                                <Input
                                    value={formData.name}
                                    type="default"
                                    onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
                                    title="Your Name"
                                />
                                <Input
                                    value={formData.bankAccount}
                                    type="numeric"
                                    onChangeText={(text) => setFormData(prev => ({ ...prev, bankAccount: text }))}
                                    title="Bank Account"
                                />
                                <Input
                                    value={formData.email}
                                    type="email-address"
                                    onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
                                    title="Email"
                                />
                                <Input
                                    value={formData.password}
                                    security={true}
                                    onChangeText={(text) => setFormData(prev => ({ ...prev, password: text }))}
                                    title="Password"
                                />
                                <Text style={{color: "#3a5fe6"}}>Use the Characters with a mix of letters, numbers & symbols</Text>
                                
                                <View style={{flexDirection:"row", paddingHorizontal:10, alignItems:"center"}}>
                                    <TouchableOpacity onPress={() => setChecked(!checked)} 
                                    style={{
                                        width:25,
                                        height:30,                                       
                                        borderWidth:1,
                                        borderRadius:2, 
                                        marginRight:10,
                                        backgroundColor : checked ? "#007BFF" : "transparent",
                                        borderColor : checked ? "#007BFF"  : "#000000a0"
                                        

                                    }}>
                                        <Entypo name="check" size={24} color="white" />
                                    </TouchableOpacity>
                                    <Text style={{marginBottom:5, color:"#000000b4"}}>By signiing up, you agree to Banks Term of Use & Privacy </Text>
                                </View>

                                <View style={{flexDirection:"row", justifyContent:"center", flex:1, marginTop:20}}>
                                        <Button title="SIGN UP"/>
                                        <Text style={{color: "#000", marginHorizontal:10}}>or</Text>
                                       <TransparentButton title="CANCEL" onPress={() => router.back("/index")} />
                                </View>

                                
                                    <TouchableOpacity onPress={ () => router.back("/index")} style={{flexDirection:"row", justifyContent:"center", marginTop:40}}>
                                    <Text style={{color:'#000000b4'}}>Already signed up?</Text>
                                    <Text style={{textDecorationLine:"underline", color:"#3a5fe6"}}> Log in</Text>
                                    </TouchableOpacity>
                                
                                







                               
                    </View>           
            
                                   
        </SafeAreaView>
    )
}

export default SignUp;


const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor:"#FFF"
      
  },

  top : {
    flex : 0.5,
    backgroundColor: "rgba(8, 10, 140, 0.87)",
    justifyContent:"flex-end",
    alignItems: "center",

  },

  topText : {
    color : "#fff",
    fontSize: 18,
    marginBottom:15,
  },
 

  bottom : {
    marginTop:40,
    marginHorizontal:30,
    gap : 20,
    justifyContent:"center",
  },

  
        
})