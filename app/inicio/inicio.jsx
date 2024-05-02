import React, { useState } from 'react';
import { Image, View, Text, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Stack, useRouter, Link} from 'expo-router';
import { COLORS } from '../../constants';

const Home = () => {
    const router = useRouter();
    const userPorfileImageSource = '';
    const userNames = 'Keisy Polanco';
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.headerContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.profileImage} source={userPorfileImageSource}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.greet}>¡Hola, {userNames}!</Text>
                    <Text style={styles.question}>¿Como te sientes hoy?</Text>
                </View>
            </View>
            <View style={styles.contentContainer}>

            </View>
            <View style={styles.navBar}>

            </View>
        </SafeAreaView>
    );
}

export default Home;

const styles = {
    headerContainer: {
        backgroundColor: '#00B6C9',
        padding: 16,
        alignItems: 'center',
        flexDirection: 'row'
      },
      imageContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        overflow: 'hidden',
        marginRight: 16,
        borderWidth: 1
      },
      profileImage: {
        width: '100%',
        height: '100%',
      },
      greet: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
      },
      question: {
        color: COLORS.white,
        fontSize: 16,
      },
      textContainer: {
        flex: 1,
      },
      contentContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
      },
      navBar: {
        height: '10%',
        backgroundColor: COLORS.blue
      }
};

