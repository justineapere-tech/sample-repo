import { View, Text, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>

      <View style={styles.card}>
        <Image source={require("./assets/Chill_guy.webp")} style={styles.image} />

        <Text style={styles.name}>Justine Edward P. Apere</Text>
        <Text style={styles.subtitle}>BSCS 3-3 | Age: 20</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.text}>I'm a lazy nerd who loves programming.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <Text style={styles.text}>• Dean’s Lister (2024)</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <Text style={styles.text}>
            • Python and Java Programming{"\n"}
            • Analysis and Problem-Solving
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9eef5',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2a3d66',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4, // Android shadow
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a2a44',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7a8f',
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2a3d66',
    marginBottom: 5,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    color: '#4a4a4a',
    textAlign: 'center',
    lineHeight: 22,
  },
});