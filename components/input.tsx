import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  nome: string;
}

const Input = ({ nome, ...props }: InputProps) => {
  const [hover, setHover] = useState('#CCCCCC'); // Cor fixa para o hover

  const styles = StyleSheet.create({
    camp: {
      marginLeft: 3,
      width: 320,
      height: 40,
      borderRadius: 5,
      padding: 10,
      borderWidth: 1,
      borderColor: hover,
      backgroundColor: '#FFFFFF', // Cor fixa para o background
    },
    texto: {
      marginLeft: 3,
      marginBottom: 10,
      fontSize: 17,
      color: '#000000', // Cor fixa para o texto
    }
  });

  return (
    <View>
      <Text style={styles.texto}>{nome}</Text>
      <TextInput
        {...props}
        style={styles.camp}
        placeholderTextColor={'#000000'} // Cor fixa para a cor do placeholder
        onFocus={() => {
          setHover('#FF0000'); // Mudança temporária de cor para o hover
        }}
        onBlur={() => {
          setHover('#CCCCCC'); // Voltando para a cor original quando não está em foco
        }}
      />
    </View>
  );
};

export default Input;
