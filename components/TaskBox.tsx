import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SelectList } from 'react-native-dropdown-select-list';
import TaskResolver from '../logic/TaskResolver';
import Difficulties from '../data/Difficulties';
import { TaskResultItemProps } from './TaskResultItem';

const RESOLVER = new TaskResolver();
const DIFFICULTIES = new Difficulties();

const TaskBox = (props: TaskBoxProps) => {
    const [selected, setSelected] = React.useState(0);

    return (
        <View style={STYLES.taskBox}>
            <LinearGradient colors={['rgba(0,0,0,0.8)', 'rgba(139,0,139,0.8)']} style={STYLES.taskBoxGradient}>
                <Text style={[STYLES.taskBoxTitle, STYLES.beige]}>Task Difficulty</Text>
                <SelectList 
                    setSelected={setSelected} 
                    data={DIFFICULTIES.getDifficultyList()} 
                    save='key' 
                    defaultOption={{key: 0, value: 'Routine'}} 
                    search={false} 
                    inputStyles={STYLES.purple}
                    boxStyles={STYLES.selectList}
                    dropdownStyles={STYLES.selectListDropdown}
                    dropdownItemStyles={STYLES.selectListItem}
                    dropdownTextStyles={STYLES.selectList}
                />
                <Pressable style={STYLES.attemptTaskButton} onPress={() => attemptTask(selected, props.stateChanger)}>
                    <Text style={[STYLES.attemptTaskButtonText, STYLES.purple]}>Attempt Task</Text>
                </Pressable>
            </LinearGradient>
        </View>
    )
};

export default TaskBox;

export type TaskBoxProps = {
    stateChanger: (item: TaskResultItemProps) => void;
}

function attemptTask(difficulty: number, stateChanger: (item: TaskResultItemProps) => void) {
    const taskResult: {title: string, body: string, special: string|null} = RESOLVER.attemptTask(difficulty);
    stateChanger(taskResult);
}

const STYLES = StyleSheet.create({
    beige: {
        color: '#C2B280',
    },
    purple: {
        color: '#570987',
    },
    taskBoxTitle: {
        textAlign: 'center',
        margin: 10
    },
    attemptTaskButton: {
        color: '#C2B280',
        backgroundColor: '#C2B280',
        margin: 10,
        alignItems: 'center',
        borderRadius: 5
    },
    attemptTaskButtonText: {
        margin: 10,
        fontWeight: 'bold'
    },
    taskBox: {
        alignItems: 'center',
        margin: 10,
        width: '100%',
        maxWidth: 400
    },
    taskBoxGradient: {
        width: '100%',
        borderRadius: 5
    },
    selectList: {
        margin: 10,
        backgroundColor: '#C2B280',
        color: '#570987',
    },
    selectListDropdown: {
        margin: 10,
        backgroundColor: '#C2B280'
    },
    selectListItem: {
        backgroundColor: '#C2B280'
    }
});