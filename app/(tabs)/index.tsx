import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import Input from '@/components/input';


export default function Cadastro(){
  return(
    <>
  <View style={styles.view1} >
    <Text style={styles.title} >Bem Vindo</Text>
    <Text style={styles.text1} >Realize o Login para entrar</Text>
  </View>

  <View style={styles.view2}>
   <Input nome='EMAIL' ></Input>
  </View>

  </>
  )
}

const styles = StyleSheet.create({

  view1:{
    backgroundColor: '#AC94F4',
    maxWidth: '100%',
  
  },
    view2:{
      backgroundColor: '#AC94F4',
      maxWidth: '100%',
      height: '100%'



  },
    title:{
      fontSize: 50,
      textAlign: 'center',
      marginTop: 50,

    },

    text1:{
      fontSize: 20,
      textAlign: 'center',

    }
})