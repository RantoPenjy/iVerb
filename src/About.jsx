import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";

const AboutScreen = () => {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  const { width } = Dimensions.get('window');
  const textWidth = width * 0.8;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={{ width: textWidth }}>
          <Text style={styles.text}>
            <Text style={{ fontFamily: "Archivo" }}>I'VERB</Text> est une simple
            application de test dédiée à la listage et à la recherche de verbes
            irréguliers anglais avec ses traductions.
          </Text>
          <Text style={styles.text}>
            Conçue dans un contexte d'apprentissage du développement mobile, cette
            application offre une interface simple et intuitive.
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={{ width: "100%" }}>
          <Text
              style={[
                styles.text,
                { fontWeight: "bold", marginBottom: 10, width: "100%" },
              ]}
          >
            Concepteur et développeur:
          </Text>
          <Text style={[styles.text, { width: "100%" }]}>
            RAKOTONDRAMANANA Tsilavo Ranto Niaina
          </Text>
          <Text
            style={[
              styles.text,
              { fontWeight: "bold", marginBottom: 10, width: "100%" },
            ]}
          >
            Pour une collaboration:
          </Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => handlePress("https://github.com/RantoPenjy")}
            >
              <Image
                style={styles.socialIcon}
                source={require("../assets/github.png")}
              />
            <Text style={styles.linkText}>github.com/RantoPenjy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() =>
                handlePress("https://facebook.com/rantomanana.rakoto")
              }
            >
              <Image
                style={styles.socialIcon}
                source={require("../assets/facebook.png")}
              />
            <Text style={styles.linkText}>facebook.com/rantomanana.rakoto</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() =>
                handlePress("mailto:rakotondramanana.rantoniaina@gmail.com")
              }
            >
              <Image
                style={styles.socialIcon}
                source={require("../assets/mail.png")}
              />
            <Text style={styles.linkText}>
              rakotondramanana.rantoniaina@gmail.com
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Archivo Black",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    width: "100%",
    textAlign: "center",
    marginBottom: 20,
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 20,
  },
  bottomContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginRight: 10,
  },
  socialButton: {
    flexDirection: "row",
    marginRight: 10,
    borderRadius: 50,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  linkText: {
    fontSize: 16,
    marginLeft: 10,
    textAlignVertical: "center",
  },
});

export default AboutScreen;
