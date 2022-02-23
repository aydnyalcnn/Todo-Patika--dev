import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 10,
        
        borderWidth:2,
        borderradius:1,
        borderColor:'#989C97',
    },

    TodoView: {
        flex: 1,
        backgroundColor:'#131010',
        flexDirection: 'row',
        
        borderRadius:10,
    },
    OutputView: {
        flex:8,
        backgroundColor:'#585353',
        borderRadius: 10,
        
    },
    InputView: {
        flex:2.3,
        backgroundColor:'#C1FE15',
        position:'absolute',
        bottom:0,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },
    Todo:{
        fontWeight:'bold',
        fontSize:24,
        marginTop:10,
        marginLeft:8,
        color:'#E7BF15',
    },
    TodoCounter:{
        fontWeight:'bold',
        fontSize:25,
       margin:9,
       
        color:'#E7BF15',
        
    },
    input:{
        height:70,
        width:300,
        margin:12,
        padding:2,
        borderWidth:7,
        borderColor:'gray',
        padding:10,
        borderRadius:115,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:15,
        fontWeight:'bold',

    },
    btnView:{
        marginRight:5,
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: '#FFF',
        borderColor: 'gray',
        borderWidth: 5,
        justifyContent: 'center',
        alignItems:'center',
    },
    addBtntxt:{
        fontWeight:'bold',
        fontSize:34,
        color:'black',
        
    },
    


})