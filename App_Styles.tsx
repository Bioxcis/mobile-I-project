import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  input: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#104d8f",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  calculateButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#127a2a"
  },
  calculateText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  operation: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  resultContainer: {
    width: 200,
    height: 50,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  resultText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
  },
});

export default styles;