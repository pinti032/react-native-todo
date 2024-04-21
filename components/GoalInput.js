import {Button, TextInput, View, StyleSheet, Modal} from "react-native";
import {useState} from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Type your goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <Button title="Add Goal" onPress={addGoalHandler}/>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 40
    },
    textInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 20
    }
})