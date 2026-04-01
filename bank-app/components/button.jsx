import { TouchableOpacity, Text, StyleSheet } from "react-native"




const Button = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button : {
        backgroundColor:"rgba(8, 10, 140, 0.87)",
        height:40,
        borderRadius:15,
        paddingVertical : 10,
        width:150,
        alignSelf:"center"

        
        
    },

    buttonText : {
        color : "#FFF",
        fontWeight:"bold",
        textAlign:"center",
    }
})


export default Button;