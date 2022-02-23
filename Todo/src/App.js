import React,{useState} from 'react';
import { SafeAreaView, StyleSheet,FlatList,View} from 'react-native';
import TodoCard from './components/TodoCard';
function App() {
  

  return (
    <SafeAreaView style={styles.container}>
      <TodoCard />    
    
    </SafeAreaView>
  );

}


const styles = StyleSheet.create({
 container: {flex: 1,
  },
});

export default App;