import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const TaskResultItem = (props: TaskResultItemProps) => {
    return (
        <View style={STYLES.taskResultBox}>
            <LinearGradient colors={['rgba(0,0,0,0.8)', 'rgba(139,0,139,0.8)']} style={STYLES.taskResultBoxGradient}>
                <Text style={STYLES.title}>{props.title}</Text>
                <Text style={STYLES.result}>{props.body}</Text>
                <SpecialResultText special={props.special} />
            </LinearGradient>
        </View>
    )
}

export default TaskResultItem;

export type TaskResultItemProps = {
    title: string;
    body: string;
    special: string|null;
}

type SpecialTextProps = {
    special: string|null;
}

const SpecialResultText = (props: SpecialTextProps) => {
    if(props.special != null)
        return(<Text style={STYLES.special}>{props.special}</Text>);
    else
        return(<View />);
}

const STYLES = StyleSheet.create({
    beige: {
        color: '#C2B280',
    },
    purple: {
        color: '#570987',
    },
    taskResultBox: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 10,
        maxWidth: 400
    },
    title: {
        textAlign: 'center',
        margin: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
    result: {
        margin: 10,
        color: '#fff'
    },
    special: {
        margin: 10,
        color: '#fff'
    },
    taskResultBoxGradient: {
        width: '100%',
        borderRadius: 5
    }
});