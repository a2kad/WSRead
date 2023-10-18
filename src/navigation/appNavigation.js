import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getDocs, query, where } from "firebase/firestore";
import { usersDb } from './src/config/firebase';

export default function AppNavigation() {
    // const getUsers = async () => {

    //     // const q = query(usersDb, where("phone", "!=", null))
    //     const querySnapshot = await getDocs(usersDb);
    //     querySnapshot.forEach(doc => { console.log(doc.data) });

    // }
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            {/* <TouchableOpacity onPress={()=>{}}>
                <Text>Users</Text>
            </TouchableOpacity> */}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});