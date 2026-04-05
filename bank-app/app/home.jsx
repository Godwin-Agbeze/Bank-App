import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet,StatusBar, Image, TouchableOpacity, ScrollView} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router } from 'expo-router';





const HomePage = () => {
    return(

       
        
              <SafeAreaView style={styles.container}>
                <ScrollView>
                <StatusBar backgroundColor="rgba(8, 10, 140, 0.87)"/>
                <View style={{flexDirection:"row",justifyContent:"space-between", paddingHorizontal:20, backgroundColor:"rgba(8, 10, 140, 0.87)"}}>
                        <TouchableOpacity>
                            <Ionicons name="reorder-three-outline" size={24} color="#FFF" />
                        </TouchableOpacity>

                        
                      
                        <TouchableOpacity>
                            <Ionicons name="settings-outline" size={24} color="#FFF" />
                        </TouchableOpacity>
                </View>
                  <View style={styles.top}>
                    <View style={{backgroundColor:"#FFF", borderRadius:80}}>
                    <Image style={{
                        width:150, 
                        height:150, 
                        tintColor:"rgb(17, 181, 231)",
                        
                    }} 
                        source={require("../assets/images/profile_icon.png"
                        
                        )}/>
                    </View>
                    <Text style={styles.topText}>YOUR NAME</Text>
                    <Text style={{color:"#FFF", marginVertical:5}}>your-email@email.com</Text>

                    <View style={styles.balanceView}>
                        <Text style={{color:"rgb(17, 181, 231)", fontSize:15, marginTop:5}}>BALANCE</Text>
                        <Text style={{fontSize:20, fontWeight:"bold",color:"rgba(25, 29, 245, 0.87)"}}>$4,180.20</Text>
                        <View style={styles.transferView}>
                            <Text style={{color:"#FFF"}}>TRANSFER</Text>
                        </View>
                    </View>
                  </View>

                <View>
                    <Text style={{
                        justifyContent:"center", 
                        textAlign:"center", 
                        color:"rgb(17, 181, 231)", 
                        marginVertical:20,
                        fontSize:16
                        }}>LATEST TRANSACTIONS</Text>


                        <View style={styles.mainContainer}>
                           <View style={{flexDirection:"row"}}>
                              <View style={{backgroundColor:"rgba(8, 10, 140, 0.87)",marginLeft:10, height: 50, width: 50, borderRadius:50}}></View>
                              <View style={styles.TextView}>
                                 <Text>Lorem ispoium Company</Text>
                                 <Text>Recieved Payment</Text>
                              </View>
                           </View>
                           <Text style={{marginRight:20, alignSelf:"center"}}>$2,030.80</Text>
                        </View>

                        
                       

                         <View style={styles.mainContainer}>
                           <View style={{flexDirection:"row"}}>
                              <View style={{backgroundColor:"rgba(8, 10, 140, 0.87)",marginLeft:10, height: 50, width: 50, borderRadius:50}}></View>
                              <View style={styles.TextView}>
                                 <Text>Auctor Elit Ltd.</Text>
                                 <Text>Transfer Money</Text>
                              </View>
                           </View>
                           <Text style={{marginRight:20, alignSelf:"center"}}>-$450.00</Text>
                       
                        </View>
                        

                        
                         <View style={styles.mainContainer}>
                           <View style={{flexDirection:"row"}}>
                              <View style={{backgroundColor:"rgba(8, 10, 140, 0.87)",marginLeft:10, height: 50, width: 50, borderRadius:50}}></View>
                              <View style={styles.TextView}>
                                 <Text>Lectus Sit Amet est</Text>
                                 <Text>Gas & electricity payment</Text>
                              </View>
                           </View>
                           <Text style={{marginRight:20, alignSelf:"center"}}>-$239.50</Text>
                       
                        </View>
                        
                        

                         <View style={styles.mainContainer}>
                           <View style={{flexDirection:"row"}}>
                              <View style={{backgroundColor:"rgba(8, 10, 140, 0.87)",marginLeft:10, height: 50, width: 50, borderRadius:50}}></View>
                              <View style={styles.TextView}>
                                 <Text>Congue Quisque</Text>
                                 <Text>Withdraw money</Text>
                              </View>
                           </View>
                           <Text style={{marginRight:20, alignSelf:"center"}}>-$1,500.00</Text>
                       
                        </View>

                        <TouchableOpacity style={{alignSelf: 'flex-end', marginRight:30}}>
                            <Text style={{color:"rgb(17, 181, 231)"}}> more » </Text>
                        </TouchableOpacity>

                          <TouchableOpacity onPress={() => router.push("/account")} style={{alignItems:"flex-end", marginRight:30, marginTop:10}}>
                            <MaterialCommunityIcons name="greater-than" size={24} color="rgb(17, 181, 231)" />
                        </TouchableOpacity>     


                        
                    
                </View>
                </ScrollView>
                </SafeAreaView>  
  )
}



const styles = StyleSheet.create({
    container : {
    flex : 1,
    
   
  },

  top : {
    flex : 0.98,
    backgroundColor: "rgba(8, 10, 140, 0.87)",
    justifyContent:"center",
    alignItems: "center",

  },

  topText : {
    
    color : "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
  balanceView : {
    backgroundColor:"#fFF",
    width:200,
    height:120,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
    gap:5,
    marginBottom:20,
    
  },

  transferView :{
    backgroundColor:"rgba(8, 10, 140, 0.87)", 
    width:100, 
    height:30, 
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",

},

mainContainer : {
    justifyContent:"space-between",
    flexDirection:"row",
    marginBottom:15,

    
    
},

TextView :{
    marginLeft:10,
    alignSelf:"center",
}

})


export default HomePage;