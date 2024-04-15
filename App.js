import { useState } from "react";
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [yourGoals, setYourGoals] = useState([]);

    function goalInputHandler (enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler () {
        setYourGoals((currentGoals) => [
            ...yourGoals,
            enteredGoalText
        ]);
    }


    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Type your goal!'
                    onChangeText={goalInputHandler}
                />
                <Button title="Add Goal" onPress={addGoalHandler}/>
            </View>
            <View style={styles.goalsContainer}>
                {yourGoals.map((goal) => (<Text key={goal}>{goal}</Text>))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8
    },
    goalsContainer: {
        flex: 5
    }

});
