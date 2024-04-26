import React, { useState } from 'react';
import { View, Text, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../../constants';
import { SelectList } from 'react-native-dropdown-select-list';

const Register = () => {
    const router = useRouter();
    const [date, setDate] = useState(new Date());
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [showPicker, setShowPicker] = useState(false);
    const headerImageSource = require('../../assets/images/registerHeader.png');
    const [isPressed, setIsPressed] = useState(false);
    const [selected, setSelected] = React.useState("");
    
    const preguntas = [
        {key:'1', value: '¿Cuál es el nombre de tu mascota?'},
        {key:'2', value: '¿Cuál es el nombre de tu mejor amigo?'},
        {key:'3', value: '¿Cuál es tu comida favorita?'},
        {key:'4', value: '¿Cuál es tu color favorito?'},
        {key:'5', value: '¿Cuál es tu película favorita?'},
        {key:'6', value: '¿Cuál es tu libro favorito?'},
        {key:'7', value: '¿Cuál es tu canción favorita?'},
        {key:'8', value: '¿Cuál es tu equipo de fútbol favorito?'},
        {key:'9', value: '¿Cuál es tu serie favorita?'},
        {key:'10', value: '¿Cuál es tu videojuego favorito?'}
    ];

    const handlePressIn = () => {
        setIsPressed(true);
    };

    const handlePressOut = () => {
        setIsPressed(false);
    };

    const toggleDatePicker= () => {
        setShowPicker(!showPicker);
    };

    const onChange = ({ type }, selectedDate) => {
        if (type == "set") {
            const currentDate = selectedDate;
            setDate(currentDate);

            toggleDatePicker();
            setDateOfBirth(currentDate.toDateString());
        } else {
            toggleDatePicker();
        }
    };

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{height: '20%'}}>
                <ImageBackground source={headerImageSource} style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                    <Text style={{color: COLORS.white, fontSize: 30, fontWeight: 'bold'}}>Regístrate</Text>
                    <View style={{height: 10}}/>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <View style={{width: 30, height: 30, borderRadius: 15, backgroundColor: COLORS.white2, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{color: COLORS.teal, fontWeight: 'bold', fontSize: 18}}>1</Text>
                        </View>
                        <View style={{height: 2, width: 100, backgroundColor: COLORS.white}}/>
                        <View style={{width: 30, height: 30, borderRadius: 15, backgroundColor: COLORS.white2, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{color: COLORS.teal, fontWeight: 'bold', fontSize: 18}}>2</Text>
                        </View>
                        <View style={{height: 2, width: 100, backgroundColor: COLORS.white}}/>
                        <View style={{width: 30, height: 30, borderRadius: 15, backgroundColor: COLORS.teal, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>3</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View>
                <View style={{height: 10}}/>
                <View style={{alignItems:'center', justifyContent: 'center'}}>
                        <Text style={{color: COLORS.gray, fontSize: 18}}>Paso 3. Contraseña y Preguntas de Seguridad</Text>
                </View>
                <View style={{height: 20}}/>
                <View style={{paddingHorizontal: '4%' , justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput secureTextEntry={true} style={styles.input} placeholder='Contraseña' placeholderTextColor={COLORS.gray2}/>
                </View>
                <View style={{paddingHorizontal: '4%', justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
                    <TextInput secureTextEntry={true} style={styles.input} placeholder='Confirmar Contraseña' placeholderTextColor={COLORS.gray2}/>
                </View>
                <View style={{paddingHorizontal: '4%', paddingTop: 10}}>
                    <SelectList inputStyles={{fontSize: 14, borderRadius: 15}} maxHeight={100} data={preguntas} setSelected={setSelected} placeholder='Pregunta 1' searchPlaceholder='Buscar...'/>
                </View>
                <View style={{paddingHorizontal: '4%', justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
                    <TextInput style={styles.input} placeholder='Respuesta 1' placeholderTextColor={COLORS.gray2}/>
                </View>
                <View style={{ paddingHorizontal: '4%', paddingTop: 10}}>
                    <SelectList inputStyles={{fontSize: 14, borderRadius: 15}} maxHeight={100} data={preguntas} setSelected={setSelected} placeholder='Pregunta 2' searchPlaceholder='Buscar...'/>
                </View>
                <View style={{paddingHorizontal: '4%', justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
                    <TextInput style={styles.input} placeholder='Respuesta 2' placeholderTextColor={COLORS.gray2}/>
                </View>
                <View style={{paddingHorizontal: '4%', paddingTop: 10}}>
                    <SelectList inputStyles={{fontSize: 14, borderRadius: 15}} maxHeight={100} data={preguntas} setSelected={setSelected} placeholder='Pregunta 3' searchPlaceholder='Buscar...'/>
                </View>
                <View style={{paddingHorizontal: '4%', justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
                    <TextInput style={styles.input} placeholder='Respuesta 1' placeholderTextColor={COLORS.gray2}/>
                </View>
                <View style={{height: 20}}/>
                <View style={{flexDirection:'row', paddingHorizontal:'4%', paddingTop: '2%', width:'100%', alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={() => router.navigate('register/registerInfoAseguradora')}
                        style={{padding: 0, width: '50%', borderRadius: 13, paddingVertical: 10, paddingHorizontal: 10, backgroundColor: COLORS.red, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: COLORS.white, fontSize: 24}}>Atrás</Text>
                    </TouchableOpacity>
                    <View style={{width: 10}}/>
                    <TouchableOpacity onPress={() => router.navigate('')}
                    style={{width: '50%', borderRadius: 13, paddingVertical: 10, paddingHorizontal: 10, backgroundColor: COLORS.gray, alignItems: 'center', justifyContent: 'center'}}
                    >
                        <Text style={{color: COLORS.white, fontSize: 24}}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Register;

const styles = {
    inputs: {
        width: '50%',
        height: 30,
        fontSize: 16,
        paddingTop: '2%',
        borderColor: COLORS.gray2,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingTop: 0
    },
    input: {
        width: '100%',
        height: 30,
        fontSize: 16,
        paddingTop: '2%',
        borderColor: COLORS.gray2,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingTop: 0
    },
    container: {
        backgroundColor: 'white',
        padding: 16,
      },
      dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
}