import HomePage from "./src/pages/Home/homePage";
import CachorroPage from "./src/pages/Home/cachorroPage";
import { LogBox } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

LogBox.ignoreLogs(['Got a component']);

const StackPages = createStackNavigator();
const Tab = createBottomTabNavigator();


// function stackAppPages(){
//     return(
//       <StackPages.Navigator>
//         <StackPages.Screen name="Amora" options={{headerShown:false}} component={CachorroPage}/>
//       </StackPages.Navigator>
//     )
// }

export default function App() {
  return (
    <NavigationContainer options={{headerShown:false}}> 

      <Tab.Navigator>
        <Tab.Screen name="Amora" options={{headerShown:false}} component={CachorroPage} initialParams={{nome_cachorro:"AMORA"}} />
        <Tab.Screen name="Pipoca" options={{headerShown:false}} component={CachorroPage} initialParams={{nome_cachorro:"PIPOCA"}}/>
        <Tab.Screen name="Logan" options={{headerShown:false}}component={CachorroPage} initialParams={{nome_cachorro:"LOGAN"}}/>
      </Tab.Navigator>      

    </NavigationContainer>
  );
}
