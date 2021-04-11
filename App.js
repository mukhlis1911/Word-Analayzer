import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput  } from 'react-native';

  
export default class App extends Component {  
    constructor() {  
        super();  
        this.state = {
          
          text: '',
          consonent: 0,
          vowel: 0,
          character: 0
        };  
    }  

    countCharacter(){

      let str =this.state.text;
      var total_char =str.length;


      this.setState({

          character :total_char

          });
    }

  countVowel(){
  
  var vowels ='aeiouAEIOU';
  var vowelcount =0;
  var str =this.state.text;
  
  for(var x=0; x<str.length; x++)
  {
    if (vowels.indexOf(str[x]) !== -1)
    {
      vowelcount += 1;
    }

    this.setState({

        vowel: vowelcount

        });
  }

  }

  countConsonant(){
  
    var consonants = 'bcdfgjklmnpqstvxzhrwy';
    var vowelcount2 = 0;
    var str = this.state.text;
    
    for(var x=0; x<str.length; x++)
    {
      if (consonants.indexOf(str[x]) !== -1)
      {
        vowelcount2 += 1;
      }
  
      this.setState({
  
          consonant: vowelcount2
  
          });
    }
  
    }

    
    render(){  
        return (  
        
            <View style={styles.container}>  

             <Text style={styles.header}>WELCOME TO THE WORD ANALYZER {"\n"} </Text>

                <TextInput
                  style={styles.textinput}
                  value={this.state.text}
                  placeholder="Let's start analyzing your word!"  
                  onChangeText={text => this.setState({ text })}
                />
               

                <Button style={styles.button} onPress={() => {this.countCharacter(), this.countVowel(), this.countConsonant()}}
                  title="Analyze" 
                />

              <Text style={styles.contents}>{"\n"}Your word is: {this.state.text}</Text>
              <Text style={styles.contents}>No of Consonants: {this.state.consonant} </Text>
              <Text style={styles.contents}>No of Vowels: {this.state.vowel} </Text>
              <Text style={styles.contents}>No of Characters: {this.state.character} </Text> 
                
            </View>  
        );  
    }  
}  

const styles = StyleSheet.create({ 
  container: {
  flex: 1,
  justifyContent: 'flex-start', 
  alignItems: 'center', 
  backgroundColor: 'yellow',

  }, 
  
  header: {
    marginTop: 60,
 fontStyle: 'italic',
 fontSize: 30, 
 textAlign: 'center', 
 margin: 10,
 marginBottom: 10,
 },
 
 contents: {
 textAlign: 'center', 
 color: 'red', 
 marginBottom: 5,
 },

 textinput: {

  height: 40, 
  width: 300,
  borderColor: 'black', 
  borderWidth: 3 ,
  marginBottom: 15
 },

 button: {

  height: 40, 
  width: 'auto',
  marginTop: 15,
  padding: 15, 
  borderColor: 'black'
 
 }
})

