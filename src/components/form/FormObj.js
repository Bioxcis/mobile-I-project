import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './App_Styles';

const OperationScreen = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  const operationNames = {
    '+': 'Soma',
    '-': 'Subtração',
    '*': 'Multiplicação',
    '/': 'Divisão',
  };

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Erro: Insira números válidos!');
      return;
    }

    let res;
    switch (operation) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      case '/':
        res = number2 !== 0 ? number1 / number2 : 'Erro: Divisão por zero!';
        break;
      default:
        res = 'Operação inválida';
    }

    setResult(res);
  };

  return (
    <View style={styles.generalView}>
      <Text style={styles.operationTitle}>{operationNames[operation]}</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
        placeholder="Digite o 1º número"
      />

      <Text style={styles.operation}>{operation}</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
        placeholder="Digite o 2º número"
      />

      <View style={styles.pickerView}>
        <Picker
          selectedValue={operation}
          onValueChange={(itemValue) => setOperation(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="+" value="+" />
          <Picker.Item label="-" value="-" />
          <Picker.Item label="*" value="*" />
          <Picker.Item label="/" value="/" />
        </Picker>
      </View>

      <View style={styles.calculateButton}>
        <Text style={styles.calculateText} onPress={calculate}>
          Calcular
        </Text>
      </View>

      {result !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {typeof result === 'number' ? `Resultado: ${result}` : result}
          </Text>
        </View>
      )}
    </View>
  );
};

export default OperationScreen;
