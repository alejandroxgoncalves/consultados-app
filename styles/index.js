import { Dimensions, Platform, StyleSheet } from "react-native";
const { width: SCREEN_WIDTH } = Dimensions.get('window');


export const styles = StyleSheet.create({
  containerSafe: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 80 : 50,
    marginHorizontal: 20
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleImg: {
    width: SCREEN_WIDTH * 0.9,  // 🧠 60% del ancho de pantalla
    height: SCREEN_WIDTH * 0.2, // opcional: proporción adaptable
    alignSelf: 'center',
    marginVertical: 20,
    backgroundColor: '#ffffffca',
    borderRadius: 15,
    borderColor: '#fff',
    borderWidth: 5,
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  boxQuestion: {
    marginVertical: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: "#fff",
    borderWidth: 5,
    shadowColor: "#aaa",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 0,
  },
  textQuestion: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  boxOption: {
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: "#fff",
    borderWidth: 5,
    shadowColor: "#aaa",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 0,
  },
  textOption: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  boxOptionCorrect: {
    backgroundColor: "#57ad01",
    borderColor: "#498e04",
  },
  boxOptionIncorrect: {
    backgroundColor: "#a50000",
    borderColor: "#780404",
  },
  boxOptionUnselected: {
    backgroundColor: "#fff",
    borderColor: "#fff",
  },
  btnNext : {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: "#fff",
    borderWidth: 5,
    shadowColor: "#aaa",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 0,
  },

});

//#780404
