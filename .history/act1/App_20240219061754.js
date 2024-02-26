import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
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
      <Text style={styles.title}>Calculadora</Text>
      <TextInput
        style={styles.display}
        value={expression}
        editable={false}
      />
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(7)}>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(8)}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(9)}>
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendOperator('+')}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(4)}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(5)}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(6)}>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendOperator('-')}>
            <Text>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(1)}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(2)}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(3)}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendOperator('*')}>
            <Text>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={clearDisplay}>
            <Text>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendNumber(0)}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={deleteLastCharacter}>
            <Text>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => appendOperator('/')}>
            <Text>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={calculate}>
            <Text>=</Text>
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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
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
  },
  buttons: {
    flexDirection: 'column',
    alignItems: 'center',
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
  },
});

export default App;
