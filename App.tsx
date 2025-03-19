import React, { useState } from "react";
import { SafeAreaView, TextInput, Text, TouchableOpacity, View } from "react-native";
import styles from "./App_Styles";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState<string | number | null>(null);

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Erro: Insira números válidos!");
      return;
    }

    let res;
    switch (operation) {
      case "+":
        res = number1 + number2;
        break;
      case "-":
        res = number1 - number2;
        break;
      case "*":
        res = number1 * number2;
        break;
      case "/":
        res = number2 !== 0 ? number1 / number2 : "Erro: Insira\nnúmeros válidos!";
        break;
      default:
        res = "Operação inválida";
    }

    setResult(res);
  };

  return (
    <SafeAreaView style={styles.container}>
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

      <View style={styles.buttonContainer}>
        {["+", "-", "*", "/"].map((op) => (
          <TouchableOpacity key={op} style={styles.button} onPress={() => setOperation(op)}>
            <Text style={styles.buttonText}>{op}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.calculateButton} onPress={calculate}>
        <Text style={styles.calculateText}>Calcular</Text>
      </TouchableOpacity>

      {result !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {typeof result === "number" ? `Resultado: ${result}` : result}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;