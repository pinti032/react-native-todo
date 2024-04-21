import { useState } from "react";
import {
    StyleSheet,
    View,
    FlatList,
    Button
} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [yourGoals, setYourGoals] = useState([]);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function addGoalHandler (enteredGoalText) {
        setYourGoals((currentGoals) => [
            ...yourGoals,
            { text: enteredGoalText, id: Math.random().toString()}
        ]);
    }

    function deleteGoalHandler(id) {
        setYourGoals(enteredGoalText => {
            return enteredGoalText.filter(goal => goal.id !== id);
        })
    }

    return (
        <View style={styles.appContainer}>
            <Button title={"Add Goal"} onPress={startAddGoalHandler}/>
            <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler}/>
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
