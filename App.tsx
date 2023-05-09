/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, Modal, SafeAreaView, Text, View, StyleSheet, TextInput} from 'react-native';
import AddGoal from './components/AddGoal';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [listGoals, setListGoals] = useState<Array<string>>([])

  const addHundler = (goal: string)=>{
    setListGoals([goal, ...listGoals]);
  }

  return (
    <SafeAreaView>
      <View style={styles.appContainer}>
        <AddGoal isOpen={isOpen} addHundler={addHundler} onClose={setIsOpen}/> 
        <Button  title='open' onPress={()=>setIsOpen(true)}/>
          {
            listGoals.map((el, index)=>{
              return (
                <Text style={styles.listItem} key={index}>
                  {el}
                </Text>
              )
            })
          }
      </View>
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  appContainer:{
    backgroundColor: '#2c3e50',
    height: '100%',
    padding: 20
  },
  listItem:{
    backgroundColor: '#e67e22',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    color: '#fff'
  }
})