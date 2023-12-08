import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const SalvageScreen = () => (
    <View style={STYLES.container}>
            <ImageBackground source={require('../assets/salvage-bg.jpg')} style={STYLES.bgImage} resizeMode='cover'>
                <Text>SALVAGE</Text>
            </ImageBackground>
        </View>
);

export default SalvageScreen;

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
    }
});