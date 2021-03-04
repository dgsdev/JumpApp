import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  
  caixa: {
    height: Platform.OS === "web" ? "100vh" : "100%",
  },
  container: {    
    padding: 30,
    color: "#fff",
    backgroundColor: "#2a8994",
    //backgroundImage: 'linear-gradient(to left bottom, #5f0262, #53398b, #3a5caa, #117bbf, #0099cc)',
    alignItems: "center",
    justifyContent: "center",
    height: 672,
    width: "100%",
  },
  fundo: {
    backgroundColor: "#2a8994",
    
  },
  divlogo: {   
    padding: 5,
    
   
  },
  logo: {    
    width: 280,  
    height: 65,
   
  },
  input: {
    marginTop: 20,
    padding: 10,
    paddingLeft: 20,
    width: 300,
    backgroundColor: "#f2f2f2",
    fontSize: 16,
    borderRadius: 10,
    fontFamily: 'Comfortaa-regular',
  }, 
  text: {
    color: "#fff",
    fontFamily: "Comfortaa-regular",
    fontWeight: "bold",
    borderRadius: 10,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },  
  divbutton: {
    flexDirection: "row",
    margin: 5,
    fontFamily: 'Comfortaa-regular',
  },
  button: {
    flexWrap: "wrap",
    fontFamily: 'Comfortaa-regular',  
    backgroundColor: "#3b9ca7",
    // backgroundImage: 'linear-gradient(to bottom, #177681, #39aebb, #2a8994, #33929d, #3b9ca7)',
    color: "#fff",
    margin: 15,
    padding: 6,
    width: 120,
    height: 40,
    borderRadius: 10,
   
  },
  video: {
    alignSelf: 'center',
    borderRadius: 10,
    width: 350,

  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
 
});


export default styles;
