import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar, View,Text, StyleSheet, TouchableOpacity, Image} from "react-native"
import Input from "../components/input"
import Button from "../components/button"
import { router } from "expo-router"



export default function HomeScreen (){
  return (

      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="rgba(8, 10, 140, 0.87)"/>
          <View style={styles.top}>
            <Image style={{width:150, height:150, tintColor:"#FFF"}} source={require("../assets/images/Fast.png")}/>
            <Text style={styles.topText}>WELCOME</Text>
           
          </View>

          <View style={styles.bottom}>
            <Input title="Email" />
            <Input  title="Password" />
            <Button title="Log In"/>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot Password?</Text>

            </TouchableOpacity>
            
          
          <TouchableOpacity onPress={()=> router.push("/signup")} style={{flexDirection:"row",alignSelf:"center"}}>
              <Text style={{color:"gray"}}>New to Bank Apps?</Text>
              <Text style={{color:"#3a5fe6", textDecorationLine:"underline"}}> Sign Up</Text>
          </TouchableOpacity>
           
          </View>

      
      </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  container : {
    flex : 1,
    
   
  },

  top : {
    flex : 0.7,
    backgroundColor: "rgba(8, 10, 140, 0.87)",
    justifyContent:"center",
    alignItems: "center",

  },

  topText : {
    
    color : "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },

  bottom : {
    marginTop:40,
    marginHorizontal:30,
    gap : 20,
    // justifyContent:"center",
  },

  forgotText :{
    color:"#3a5fe6",
    textAlign:"center",
    marginTop:20,
    textDecorationLine:"underline",
  }

  

})