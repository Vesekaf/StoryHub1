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

                <Text style = {styles.headerStyle}>Write a Story</Text>

              </View>

                <View>
                    <TextInput style = {styles.inputBox}  placeholder = "Title" />
                    <TextInput style = {styles.inputBox}  placeholder = "Author" />
                </View>

                <View style = {styles.inputHeaderStyle}>
                    <TextInput style = {styles.inputStoryBox}  placeholder = "Write Your Story" multiline = {true} />
                </View>
                <View>
                    <TouchableOpacity

                        style= {styles.buttonStyle}

                    ><Text style = {styles.buttonText}> Submit Story </Text></TouchableOpacity>

                </View>
            </View>
        );

    }


}

const styles = StyleSheet.create({
    
    backStyle: {

      backgroundColor: '#ddffdd', 
      flex: 1, 

    },

    headerStyle: {

      backgroundColor: 'red',
      textAlign: 'center', 
      fontSize: 35, 
      color: 'white', 
      backgroundColor: '#00aa00', 
      height: 50,

    },

    inputBox: {
      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      borderColor: 'black',
      outline: 'none',
    },

    

    inputStoryBox: {

      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 350,
      textAlign: 'center',
      borderWidth: 4,
      borderColor: 'black',
      outline: 'none',
      textAlign: 'center',

    }, 

    buttonStyle: {
        width: '40%',
        height: 50,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
        borderWidth: 4,
        borderRadius: 20,
        borderColor: 'black',
        backgroundColor: 'white', 
        marginTop: 50, 
      },

      buttonText: {
        textAlign: 'center',
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: 'bold',
      },
    
    
})

