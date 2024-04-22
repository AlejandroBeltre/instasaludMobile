import React from 'react';
import { useState } from 'react';
import { Image, View, Text, ScrollView, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, FONT, icons, images, SIZES } from '../constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';

const Home = () => {
    const router = useRouter();
    const backgroundImageSource = require('../assets/images/fondoInicio.png');
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };
    return (
        <SafeAreaView style={{flex: 1}}>
        <ImageBackground
        source={backgroundImageSource}
        style={{ flex: 1 }}
        resizeMode="cover" 
        >
        <Stack.Screen
            options={{
                headerShown: false
            }}
        />
        <View style={stylesHome.imageContainer}>
            <Image style={{width: 180,  height: 180}}source={require('../assets/icons/instasalud.png')}/>
        </View>
        <View>
            <Image style={{width: 'auto'}}source={require('../assets/instasalud.png')}/>
        </View>
        <Text style={stylesHome.inputLabels}>No. de Record o Cédula:</Text>
        <View style={{width: '95%', paddingHorizontal: '8%'}}>
            <TextInput style={stylesHome.inputs} placeholder='125690' placeholderTextColor={COLORS.gray}/>
        </View>
        <Text style={stylesHome.inputLabels}>Contraseña:</Text>
        <View style={{width: '95%', paddingHorizontal: '8%'}}>
            <TextInput style={stylesHome.inputs}/>
        </View>
        <View style={{width: '95%', paddingLeft: '35%'}}>
            <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            style={{ opacity: isPressed ? 0.6 : 1 }}
            >
                <Text style={{color: COLORS.blue, fontSize: 16, textDecorationLine: 'underline'}}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>    
        </View>
        <View style={{width: '95%', paddingHorizontal: '8%', paddingTop: '20%'}}>
            <TouchableOpacity
            onPress={() => router.navigate('Home')}
            style={{borderRadius: 30, paddingVertical: 10, borderColor: 'gray', borderWidth: 1, backgroundColor: '#8DB1B230'}}
            >
                <Text style={{color: COLORS.white, fontSize: 16, textAlign: 'center'}}>Iniciar Sesión</Text>
            </TouchableOpacity>
        </View>
        <View style={{width: '100%', alignContent: 'center', justifyContent: 'center', paddingTop: '40%', flexDirection: 'row'}}>
            <Text style={{color: COLORS.white}}>¿No tienes una cuenta? </Text>
            <TouchableOpacity
            onPress={() => router.navigate('Register')}
            >
                <Text style={{color: COLORS.blue, textDecorationLine: 'underline'}}>¡Regístrate Aquí!</Text>
            </TouchableOpacity>    
        </View>
        </ImageBackground>
        </SafeAreaView>
    );
}

export default Home;

const stylesHome = {
    imageContainer:{
        width: '100%',
        paddingHorizontal: '50%',
        paddingTop: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputLabels: {
        color: COLORS.white,
        fontSize: 16,
        paddingTop: '5%',
        paddingHorizontal: '8%'
    },
    inputs: {
        color: COLORS.white,
        fontSize: 16,
        paddingTop: '2%',
        borderBottomWidth: 1, // Add a bottom border
        borderBottomColor: "white", // Set the color of the underline
    },
}