import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Image
        source={require('../../assets/profile.jpg')}
        style={styles.photo}
      />

      <Text style={styles.name}>
        Lorraine Joy M. Pabaonon
      </Text>

      <Text style={styles.course}>
        MMA Student - CS126
      </Text>

      <Text style={styles.bio}>
        I enjoy graphic design, creating visual layouts,
        and turning creative ideas into digital artworks.
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
  },

});


// I changed the stylesheet to improve the profile screen design.
// Date: 05/18/2026
