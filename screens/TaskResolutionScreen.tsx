import React, {useState} from 'react';
import { StyleSheet, View, ImageBackground, FlatList } from 'react-native';
import TaskBox from '../components/TaskBox';
import TaskResultItem, { TaskResultItemProps } from '../components/TaskResultItem';

const TaskResolutionScreen = () => {
    const [resultList, setResultList] = useState<TaskResultItemProps[]>([]);

    function updateResultList(newItem: TaskResultItemProps) {
        setResultList([...resultList, newItem]);
    }

    return(
        <View style={STYLES.container}>
            <ImageBackground source={require('../assets/amber-monolith.png')} style={STYLES.bgImage} resizeMode='cover'>
                <TaskBox stateChanger={(item: TaskResultItemProps) => updateResultList(item)} />
                <FlatList
                    data={resultList.reverse()}
                    numColumns={1}
                    style={STYLES.resultList}
                    renderItem={({item}) => <TaskResultItem title={item.title} body={item.body} special={item.special} />}
                />
            </ImageBackground>
        </View>
    )
};

export default TaskResolutionScreen;

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    bgImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%'
    },
    resultList: {
        maxWidth: 400,
        width: '100%'
    }
});