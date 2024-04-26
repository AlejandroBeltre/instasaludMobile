import React, { useState } from 'react';
import { Image, View, Text, SafeAreaView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Stack, useRouter, Link} from 'expo-router';
import { COLORS } from '../../constants';

const forgotPassword = () => {
    const router = useRouter();
    const headerImageSource = require('../../assets/images/registerHeader.png');
    const [isPressed, setIsPressed] = useState(false);

    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={{height: '20%'}}>
            <ImageBackground source={headerImageSource} style={{flex: 1, width: '100%'}}>
            <TouchableOpacity
            style={{ paddingLeft: '5%', paddingTop: '18%' }}
            onPress={() => router.navigate('')} >
                <Image style={{ width: 50, height: 50 }} source={require('../../assets/images/arrowBack.png')} />
            </TouchableOpacity>
            </ImageBackground>
        </View>
        <View style={{padding: '5%'}}>
            <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 30, fontWeight: 'bold', color: COLORS.black}}>Contraseña olvidada</Text>
            </View>
            <Text style={{fontSize: 16, color: COLORS.gray, paddingTop: '5%'}}>Para reajustar su contraseña, envíe su No. Cédula o No. de Record. Si podemos encontrarlo en la base de datos, le enviaremos un email con instrucciones para poder acceder de nuevo.</Text>
            <View style={{paddingTop: '5%'}}>
                <Text style={{fontSize: 16, color: COLORS.gray}}>No. de Record o Cédula</Text>
                <TextInput style={{borderBottomWidth: 1, borderBottomColor: COLORS.gray, padding: 0, margin: 0}}/>
            </View>
            <View style={{paddingTop: '10%'}}>
                <TouchableOpacity style={{backgroundColor: COLORS.blue, paddingVertical: 10, borderRadius: 30}}>
                    <Text style={{color: COLORS.white, fontSize: 16, textAlign: 'center'}}>Enviar</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingTop: '30%'}}>
                <Text style={{color: COLORS.black, fontSize: 20}}>Contáctanos</Text>
                <View style={{flexDirection: 'row'}}>
                    <Image style={{width: 70, height: 70}} source={require('../../assets/images/contactUs.png')}/>
                    <Text style={{color: COLORS.gray, fontSize: 16, paddingLeft: '2%'}}>Si tiene dificultades para ingresar a la plataforma llamar al +1 (809) 000-0000 opción 1 o completar el                 <Link href=''>
                        <Text style={{color: COLORS.blue, fontSize: 16}}>formulario de contacto.</Text>
                </Link></Text>
                </View>
                <Text style={{color: COLORS.gray, fontSize: 16}}>Un integrante de nuestro equipo de Soporte le  estará asistiendo.</Text>
            </View>
        </View>
    </SafeAreaView>
    )
}

export default forgotPassword;