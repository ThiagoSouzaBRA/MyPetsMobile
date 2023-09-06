import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button , TextInput, TextInputComponent} from 'react-native';

export default function Cachorro(context) {

  console.log(context.route.params.nome_cachorro)
  return (
    <View style={stylePage.homeContainer}>
      <Text>{context.route.params.nome_cachorro}</Text>
      <StatusBar hidden={true} />
    </View>
  );

}

const stylePage = StyleSheet.create({
  homeContainer: {
    flex:1,
    backgroundColor: '#F9F9F9',
    alignItems:'center',
    justifyContent: 'center'
  }
});
