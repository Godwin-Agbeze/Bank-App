import { TextInput, StyleSheet} from "react-native";



const Input = ({title, type}) => {
    return(
        
        <TextInput keyboardType={type} placeholder={title} style={styles.TextInput}></TextInput>
    )
}



export default Input; 

const styles = StyleSheet.create({
    TextInput : {
        borderRadius: 15,
        borderColor:"blue", 
        borderWidth: 1, 
        paddingHorizontal : 10,
    }
})