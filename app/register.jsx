import React, { useState } from 'react';
import { Image, View, Text, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants';

const Register = () => {
    const router = useRouter();
    const navigation = useNavigation();
    const headerImageSource = require('../assets/images/registerHeader.png');
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };
    return(
        <SafeAreaView style={{flex: 1}}>

        </SafeAreaView>
    );
}

export default Register;