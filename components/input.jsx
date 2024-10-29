import { View } from "react-native"

const InputTeks = (props) => {
    const {label, children, isPassword = false} = props
    return (
        <>
        <View>
            <Text>{label}</Text>
            <TextInput style={{ 
                borderWidth: 2,
                borderColor: 'gray',
                padding: 10,
            }}
            placeholer = {children}
            securePassword = {isPassword}
             ></TextInput>
        </View>
        </>
    )
}

export default InputTeks;