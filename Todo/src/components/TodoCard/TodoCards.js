import React,{useState} from 'react';
import {View,Text,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import styles from './TodoCard.style';
import Task from './Task';

const TodoCard =()=>{
    const [task, setTask] = React.useState();
    const [taskItems,setTaskItems] = React.useState([]);
    const [todoCounter,settodoCounter]=React.useState();
    const onPress = ()=>{
        setTaskItems([...taskItems,task])
        setTask(null);
        settodoCounter(taskItems.length+1);
        
        
    };

    
    const completeTask = (index) =>{
        let itemsCopy=[...taskItems];
        itemsCopy.splice(index,1);
        setTaskItems(itemsCopy);
        settodoCounter(taskItems.length-1);
        
       
    };
    return(
        <View style={styles.container}>
        <View style={styles.TodoView}>
        <Text style={styles.Todo}>YAPILACAKLAR</Text>
        <Text style={styles.TodoCounter}>{todoCounter}</Text>
        </View>    
        <View style={styles.OutputView}>
        <ScrollView>
        { taskItems.map((item,index)=>{return(
            <TouchableOpacity key={index} onPress={() => completeTask(index)}> 
            <Task text={item}/>
            </TouchableOpacity>
            )
         })}
        </ScrollView>
        </View>    
        
        <View style={styles.InputView}>
        <TextInput style={styles.input} value={task} onChangeText={task=>setTask(task)}/>
        <TouchableOpacity onPress={()=>onPress()}>
            <View style={styles.btnView}>
                <Text style={styles.addBtntxt}>+</Text>
            </View>
        </TouchableOpacity>

        </View>    
        </View>
    );
};


export default TodoCard;
