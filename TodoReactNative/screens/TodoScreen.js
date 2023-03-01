import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TodoScreen() {
    const [myTodo, setMytodo] = useState("");

    const ItemList = () => {
        return (
            <View style={styles.list}>
                <Text style={styles.text}>item1</Text>
                <MaterialCommunityIcons name="delete-forever" size={24} color="red" />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='write todo'
                style={styles.textInput}
                onChangeText={text => setMytodo(text)}
                value={myTodo} />
            <Button title='Add Todo'
                color='#00e676'
                onPress={() => { }}
            />

            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        height: 50,
        flex: 1,
        marginHorizontal: 20,

    },
    list: {

        padding: 12,
        borderBottomColor: "grey",
        borderBottomWidth: .5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 16,
        textAlign: "center",
    },

    textInput: {
        borderRadius: 10,
        height: 50,
        borderColor: "#00e676",
        borderWidth: 2,
        marginVertical: 10
    },


})