import { useState } from "react";
import {
    StyleSheet,
    View,
    FlatList,
    Button
} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar} from "expo-status-bar";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [yourGoals, setYourGoals] = useState([]);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    function addGoalHandler (enteredGoalText) {
        setYourGoals((currentGoals) => [
            ...yourGoals,
            { text: enteredGoalText, id: Math.random().toString()}
        ]);
        endAddGoalHandler();
    }

    function deleteGoalHandler(id) {
        setYourGoals(enteredGoalText => {
            return enteredGoalText.filter(goal => goal.id !== id);
        })
    }

    return (
        <>
        <StatusBar style='light' />
        <View style={styles.appContainer}>
            <Button
                title={"Add Task"}
                onPress={startAddGoalHandler}
                color="#a065ec"
            />
            <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList data={yourGoals} renderItem={itemData => {
                    return (
                        <GoalItem
                            text={itemData.item.text}
                            id={itemData.item.id}
                            onDeleteItem={deleteGoalHandler}
                        />
                    )
                }}
                keyExtractor={(item, index) => {
                    return item.id;
                }}
                alwaysBounceVertical={false} />
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 100,
        paddingHorizontal: 16
    },
    goalsContainer: {
        flex: 5
    },


});
