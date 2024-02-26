import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const appendNumber = (number) => {
    setExpression(prevExpression => prevExpression + number);
  };

  const appendOperator = (operator) => {
    setExpression(prevExpression => prevExpression + operator);
  };

  const clearDisplay = () => {
    setExpression('');
  };

  const deleteLastCharacter = () => {
    setExpression(prevExpression => prevExpression.slice(0, -1));
  };

  const calculate = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.title}>Calculator</Text>
        <TextInput
          style={styles.display}
          value={expression}
          editable={false}
        />
      </View>
      <View style={styles.keyboard}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={clearDisplay}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={deleteLastCharacter}>
            <Text style={styles.buttonText}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendOperator('%')}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton} onPress={() => appendOperator('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(7)}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(8)}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(9)}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton} onPress={() => appendOperator('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(4)}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(5)}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(6)}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton} onPress={() => appendOperator('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(1)}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(2)}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(3)}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operatorButton} onPress={() => appendOperator('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => appendOperator('-')}>
            <Text style={styles.buttonText}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(0)}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendOperator('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.equalButton]} onPress={calculate}>
            <Text style={[styles.buttonText, styles.equalButtonText]}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  display: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    textAlign: 'right',
    paddingRight: 10,
    fontSize: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  keyboard: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    margin: 5,
    borderRadius: 35,
  },
  operatorButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9800',
    margin: 5,
    borderRadius: 35,
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
  equalButton: {
    width: 70,
    height: 90,
    backgroundColor: '#2196f3',
    marginTop: 5,
    borderRadius: 35,
  },
  equalButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default Calculator;
