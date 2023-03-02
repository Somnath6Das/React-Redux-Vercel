import { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { signinUser,signupUser } from './../redux-state/authReducer';

export default function AuthScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState("Signin");

    const dispatch = useDispatch();

    const authenticate = () => {
        if(auth == "Signin"){
           dispatch(signinUser({ email, password })); 
        }else{
            dispatch(signupUser({ email, password}));
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Please {auth}.</Text>
            <TextInput style={styles.textInput}
            keyboardType="email-address" 
            placeholder='email' 
            value={email} 
            onChangeText={text => setEmail(text)} />
            <TextInput secureTextEntry={true}
             style={styles.textInput} 
             keyboardType="default" 
             placeholder='email' 
             value={password} 
             onChangeText={text => setPassword(text)} />
            <Button color="#ff4081" 
            title={auth} 
            onPress={() => authenticate()} />
            {auth == "Signin" ? 
            <TouchableOpacity onPress={() => setAuth("Signup")}><Text style={styles.text1}>Don't have an account?</Text></TouchableOpacity>
            :<TouchableOpacity onPress={() => setAuth("Signin")}><Text style={styles.text1}>Already have an account?</Text></TouchableOpacity>}
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "50%",
        justifyContent: "space-around",
        marginHorizontal: 20
    },
    text: {
        fontSize: 24,
        textAlign: "center",
    },
    text1: {
        textAlign: "center",
        fontSize: 18
    },
    textInput: {
        height: 50,
        borderColor: "#ff4081",
        borderWidth: 2

    },


});