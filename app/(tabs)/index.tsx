import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {

  // useState variable
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>

      {/* Profile Image */}
      <Image
        source={require('../../assets/profile.jpg')}
        style={styles.photo}
      />

      {/* Name */}
      <Text style={styles.title}>
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

      {/* Text Input */}
      <TextInput
        placeholder="Type your name..."
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      {/* Display Typed Name */}
      <Text style={styles.greeting}>
        Hello, {name}!
      </Text>

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

  title: {
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
    borderColor: '#999',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 15,
  },

  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
  },

});


// I changed the stylesheet to improve the profile screen design.
// Date: 05/18/2026