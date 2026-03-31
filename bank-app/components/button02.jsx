import { TouchableOpacity, Text, StyleSheet } from "react-native"




const TransparentButton = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor:"#FFF",
        height:40,
        borderRadius:15,
        paddingVertical : 10,
        width:150,
        alignSelf:"center",
        borderWidth:1,
        borderColor:"#3a5fe6"
        
        
    },

    buttonText : {
        color : "#000",
        fontWeight:"bold",
        textAlign:"center",
    }
})


export default TransparentButton;




