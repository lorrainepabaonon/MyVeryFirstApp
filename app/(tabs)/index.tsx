import React, { useState } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {

  // useState variables
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  // Dynamic message
  const message =
    count === 0
      ? 'Tap the buttons below!'
      : `${name || 'User'}, you tapped ${count} times!`;

  return (
    <View style={styles.container}>

      {/* Profile Image */}
      <Image
        source={require('../../assets/profile.jpg')}
        style={styles.photo}
      />

      {/* Name */}
      <Text style={styles.name}>
        Lorraine Joy M. Pabaonon
      </Text>

      {/* Course */}
      <Text style={styles.course}>
        MMA Student - CS126
      </Text>

      {/* Bio */}
      <Text style={styles.bio}>
        I enjoy graphic design, creating visual layouts,
        and turning creative ideas into digital artworks.
      </Text>

      {/* TextInput */}
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      {/* Conditional Rendering */}
      {name === '' ? (
        <Text style={styles.greeting}>
          Please enter your name
        </Text>
      ) : (
        <Text style={styles.greeting}>
          Hello, {name}!
        </Text>
      )}

      {/* Dynamic Message */}
      <Text style={styles.message}>
        {message}
      </Text>

      {/* Counter Buttons */}
      <View style={styles.buttonContainer}>
        <Button
          title="+"
          onPress={() => setCount(count + 1)}
        />

        <Button
          title="-"
          onPress={() => setCount(count - 1)}
        />

        <Button
          title="Reset"
          onPress={() => setCount(0)}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },

  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  course: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },

  bio: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
    color: '#444',
    marginBottom: 20,
  },

  input: {
    width: '90%',
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 15,
  },

  greeting: {
    fontSize: 18,
    marginBottom: 10,
  },

  message: {
    fontSize: 16,
    marginBottom: 20,
  },

  buttonContainer: {
    width: '70%',
    gap: 10,
  },

});


// I changed the stylesheet to improve the profile screen design.
// Date: 05/18/2026
