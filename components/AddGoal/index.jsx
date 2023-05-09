import { useState } from "react";
import { Button, Modal, Text, TextInput, View, StyleSheet } from "react-native";

function AddGoal({isOpen, addHundler, onClose}) {
    const [goal, setGoal] = useState('')

    const addItem = ()=>{
        addHundler(goal)
        setGoal('')
    }

    return (
        <Modal
            style={styles.modal}
            animationType="slide" 
            visible={isOpen}
        >
            <View style={styles.modalContainer}>
                <TextInput style={styles.textInput} value={goal} onChangeText={(e)=>{setGoal(e)}}/>
                <View style={styles.btnGroup}>
                    <View style={styles.btnAdd}>
                        <Button title='Cancel' color={'#e74c3c'} onPress={()=>onClose(false)}/>
                    </View>
                    <View style={styles.btnAdd}>
                        <Button title='Add' onPress={addItem}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default AddGoal;

const styles = StyleSheet.create({
    modalContainer:{
        backgroundColor: '#2c3e50',
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    textInput:{
        backgroundColor: '#ecf0f1',
        marginBottom: 20,
        borderRadius: 5,
        padding: 10,
        fontSize: 20,
        width: '100%'
    },
    btnAdd:{
        flex: 1,
        borderRadius: 5
    },
    btnCancel:{
        flex: 1,
        borderRadius: 200,
        overflow: 'hidden'
    },
})