import { CheckBox } from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.disclaimerView}>
          <Text style={styles.disclaimerHeading}>Disclaimer</Text>
          <Text style={styles.disclaimerText}>{disclaimerText}</Text>
          <CheckBox value={false} />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc5b9",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
  disclaimerView: {
    flex: 1,
    backgroundColor: "#98473E",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 8,
    maxHeight: "90%",
    padding: "5%",
  },
  disclaimerHeading: {
    fontSize: 18,
    color: "#ffcf2f",
    margin: "auto",
    textAlign: "center",
    paddingBottom: "5%",
  },
  disclaimerText: {
    fontSize: 12,
    color: "#ffffff",
  },
});

const disclaimerText =
  "The symptom checker feature in this app is designed to provide general information and recommendations based on the symptoms you enter. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.\n\nThe recommendations provided are not a diagnosis and should not be used as a basis for self-diagnosis or self-treatment. The information in the app should not be relied upon to make decisions about your health or medical care.\n\nIf you are experiencing any symptoms or health concerns, it is important to seek professional medical advice from a qualified healthcare provider. The symptom checker is intended to be used as a tool to help you better understand your symptoms and to prepare you for your appointment with your GP.\n\nYou should always consult your GP or other qualified healthcare provider if you have questions about your health or if your symptoms persist or worsen. We are not responsible for any medical decisions made based on the information provided by this app.\n\nCheck the box to show you understand and accept these terms to continue.";
