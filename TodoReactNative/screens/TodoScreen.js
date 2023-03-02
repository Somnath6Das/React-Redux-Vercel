import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { logout } from '../redux-state/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, deleteTodo, fetchTodo } from './../redux-state/todoReducer';

export default function TodoScreen() {
    const [myTodo, setMytodo] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    useEffect(() => {
        dispatch(fetchTodo())
    }, []);
    const ItemList = ({ title, id }) => {
        return (
            <View style={styles.list}>
                <Text style={styles.text}>{title}</Text>
                <MaterialCommunityIcons onPress={() => dispatch(deleteTodo(id))} name="delete-forever" size={24} color="red" />
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
                onPress={() => dispatch(createTodo({ todos: myTodo }))}
            />
            <TouchableOpacity style={{ marginVertical: 5 }}>
                <Button
                    title="Logout"
                    color="#ff4081"
                    onPress={() => dispatch(logout())}
                />
            </TouchableOpacity>
            <FlatList data={todos}
                renderItem={({ item }) => {return <ItemList title={item.todos} id={item._id} />}}
                // keyExtractor={item => item._id}
                keyExtractor={(item, index) => item._id}
            />

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