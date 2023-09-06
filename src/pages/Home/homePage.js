import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button , TextInput, TextInputComponent} from 'react-native';

export default function Home({navigation}) {

  
  return (
    <View style={stylePage.homeContainer}>
      <Button title='Clique aqui' onPress={()=> navigation.navigate('LoginPage')}/>
      <StatusBar hidden={true} />
    </View>
  );

}

const stylePage = StyleSheet.create({
  homeContainer: {
    flex:1,
    backgroundColor: '#FFF',
    alignItems:'center',
    justifyContent: 'center'
  }
});
