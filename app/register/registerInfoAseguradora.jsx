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

    const aseguradora = [
        {key:'1', value: 'BMI Compañía de Seguros'},
        {key:'2', value: 'Humano Seguros'},
        {key:'3', value: 'Universal Seguros'},
        {key:'4', value: 'Palic Seguros'},
        {key:'5', value: 'Seguros Reservas'},
        {key:'6', value: 'Seguros Universal'},
        {key:'7', value: 'Seguros Sura'},
        {key:'8', value: 'Seguros Constitución'},
        {key:'9', value: 'Seguros Banreservas'},
        {key:'10', value: 'Seguros Universal'}
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
                        <View style={{width: 30, height: 30, borderRadius: 15, backgroundColor: COLORS.teal, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>2</Text>
                        </View>
                        <View style={{height: 2, width: 100, backgroundColor: COLORS.white}}/>
                        <View style={{width: 30, height: 30, borderRadius: 15, backgroundColor: COLORS.white2, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{color: COLORS.teal, fontWeight: 'bold', fontSize: 18}}>3</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View>
                <View style={{height: 10}}/>
                <View style={{alignItems:'center', justifyContent: 'center'}}>
                    <Text style={{color: COLORS.gray, fontSize: 18}}>Paso 2. Información de la Aseguradora</Text>
                </View>
                <View style={{height: 10}}/>
                <View style={{alignItems:'center', justifyContent: 'center'}}>
                    <Text style={{color: '#919191', fontSize: 14, textAlign: 'center', padding: 4}}>Si no posee seguro medico o no conoce la información puede omitir este paso presionando “Continuar”.</Text>
                </View>
                <View style={{height: 20}}/>
                <View style={{paddingHorizontal: '5%'}}>
                    <SelectList inputStyles={{fontSize: 14, borderRadius: 15}} data={aseguradora} setSelected={setSelected} placeholder='Aseguradora' searchPlaceholder='Buscar...'/>
                </View>
                <View style={{flexDirection: 'row', width: '100%', paddingHorizontal: '4%', justifyContent: 'center', alignItems: 'center', paddingTop: 10}}>
                    <TextInput keyboardType='numeric' style={styles.input} placeholder='Número de afiliado' placeholderTextColor={COLORS.gray2}/>
                </View>
                <View style={{paddingHorizontal: '4%', paddingTop: '2%'}}>
                    <TextInput keyboardType='default' style={styles.input} placeholder='Nombre de titular' placeholderTextColor={COLORS.gray2}/>
                </View>
                <View style={{height: 10}}/>
                <View style={{flexDirection: 'row', width:'100%', paddingHorizontal: '4%', alignItems:'center', justifyContent:'center'}}>
                    <TextInput keyboardType='default' style={styles.input} placeholder='Plan' placeholderTextColor={COLORS.gray2}/>
                </View>
                <View style={{height: 20}}/>
                <View style={{flexDirection:'row', paddingHorizontal:'4%', paddingTop: '2%', width:'100%', alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={() => router.navigate('register/registerInfoPersonal')}
                        style={{padding: 0, width: '50%', borderRadius: 13, paddingVertical: 10, paddingHorizontal: 10, backgroundColor: COLORS.red, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: COLORS.white, fontSize: 24}}>Atrás</Text>
                    </TouchableOpacity>
                    <View style={{width: 10}}/>
                    <TouchableOpacity onPress={() => router.navigate('register/registerPassword')}
                    style={{width: '50%', borderRadius: 13, paddingVertical: 10, paddingHorizontal: 10, backgroundColor: COLORS.gray, alignItems: 'center', justifyContent: 'center'}}
                    >
                        <Text style={{color: COLORS.white, fontSize: 24}}>Continuar</Text>
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