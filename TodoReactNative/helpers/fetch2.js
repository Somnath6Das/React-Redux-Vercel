import AsyncStorage from '@react-native-async-storage/async-storage';

const backendUrl = "https://react-redux-vercel-production.up.railway.app";

export const fetchCondition = async (api, body,) => {
    const res = await fetch(backendUrl + api, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            // Authorization token only need at the time of create todo.
            "Authorization":await AsyncStorage.getItem('token'),
        },
        body: JSON.stringify(body)
    });
    return await res.json();
}


export const fetchDeleteTodos = async (api, type) => {
    const res = await fetch(backendUrl + api, {
        method: type,
        headers: {
            "Content-Type": "application/json",
            // Authorization token only need at the time of get or delete todo.
            "Authorization": await AsyncStorage.getItem('token'),
        },
      
    });
    return await res.json();
}