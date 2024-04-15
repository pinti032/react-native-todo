import { useState } from "react";
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [yourGoals, setYourGoals] = useState([]);

    function addGoalHandler (enteredGoalText) {
        setYourGoals((currentGoals) => [
            ...yourGoals,
            { text: enteredGoalText, id: Math.random().toString()}
        ]);
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList data={yourGoals} renderItem={itemData => {
                    return (
                        <GoalItem text={itemData.item.text} />
                    )
                }}
                keyExtractor={(item, index) => {
                    return item.id;
                }}
                alwaysBounceVertical={false} />
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
    goalsContainer: {
        flex: 5
    },


});
