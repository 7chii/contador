import { Component , useState} from "react";
import { Text, View , StyleSheet, TouchableOpacity} from "react-native";

export default function Index() {
  const [varval, setVarval] = useState(0);
  
  return (
    <View
      style={styles.component}
    >
      <Text style={{marginBottom:30, fontSize:20, fontWeight:'bold'}}>Eu sou um contador!</Text>
      <View style={styles.textView}>
      <Text style={styles.texto}>{varval}</Text>
      </View>
      <TouchableOpacity style={styles.botao} onPress={()=>setVarval(varval+1)}>
        <Text style={{color:'#FFF', fontSize:30, fontWeight:'bold'}}>Aperte me!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop:20}} onPress={()=>setVarval(varval-varval)}>
        <Text>reset</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  component:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  botao:{
    backgroundColor:'#000',
    width:'60%',
    height:'10%',
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center'
  },
  texto:{
    fontSize:30,
    color:'#FFF',
  },
  textView:{
    marginBottom:40,
    borderRadius:12,
    width:"20%",
    height:"10%",
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000',
  }
})
