import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';


export default class WriteTheStory extends React.Component {

    render(){

        return(

            <View style = {styles.backStyle}>
              <View >

                <Text style = {styles.headerStyle}>Read a Story</Text>

              </View>

                <Text>I am a Story. Once upon a time, there was a person who ate a popsicle and used the stick to get his money out of the drain and he lived happily ever after. </Text>


            </View>
        );

    }


}

const styles = StyleSheet.create({
    
    backStyle: {

      backgroundColor: '#ffdddd', 
      flex: 1, 

    },

    headerStyle: {

      textAlign: 'center', 
      fontSize: 35, 
      color: 'white', 
      backgroundColor: '#aa0000', 
      height: 50,

    }, 
    
})

