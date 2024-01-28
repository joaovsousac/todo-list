import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/AntDesign'
import { useState } from "react";
import { Task } from "../../components/Task";

export function Home() {
    const [isFocused, setIsFocused] = useState(false);
    const [tasks, setTasks] = useState<string[]>([])
    const [newTask, setNewTask] = useState('')
    const [completedTasks, setCompletedTasks] = useState(0); 
    const [createdTasks, setCreatedTasks] = useState(0); 

    function handleAddNewTask() {
        if (tasks.includes(newTask)) {
            return Alert.alert("Tarefa repetida", "Você já colocou essa tarefa em sua lista de tarefas!")
        }

        if (newTask.length == 0) {
            return Alert.alert("Tarefa sem descrição", "Sua tarefa precisa de ter uma descrição!")
        }

        setTasks(prevState => [...prevState, newTask])
        setCreatedTasks(createdTasks + 1); 
        setNewTask('')
    }

    function handleRemoveTask(description: string) {
        Alert.alert("Remover", "Você deseja remover essa tarefa de sua lista?", [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks(prevState => prevState.filter(task => task !== description));
                    
                  
                    const isTaskDone = tasks.includes(description);
                  
                    if (isTaskDone) {
                        setCompletedTasks(prevCompletedTasks => prevCompletedTasks - 1);
                    } else {
                        setCreatedTasks(prevCreatedTasks => prevCreatedTasks - 1);
                    }
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }
    function handleToggleTask(isDone: boolean) {
        if (isDone) {
            setCompletedTasks(completedTasks + 1); 
            setCreatedTasks(createdTasks - 1); 
        } else {
            setCompletedTasks(completedTasks - 1); 
            setCreatedTasks(createdTasks + 1); 
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/logo.png')} />
            </View>
            <View style={styles.body}>
                <View style={styles.form}>
                    <TextInput
                        style={[styles.textInput, isFocused && { borderColor: '#8284FA' }]}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor='#808080'
                        onBlur={() => setIsFocused(false)}
                        onFocus={() => setIsFocused(true)}
                        onChangeText={setNewTask}
                        value={newTask}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleAddNewTask}
                    >
                        <Icon name="pluscircleo" style={{ color: '#FFF' }}
                            size={16}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.status}>
                    <View style={styles.eachStatus}>
                        <Text style={[styles.texts, { color: '#4EA8DE' }]}>Criadas</Text>
                        <Text style={styles.number}>{createdTasks}</Text>
                    </View>

                    <View style={styles.eachStatus}>
                        <Text style={[styles.texts, { color: '#8284FA' }]}>Concluídas</Text>
                        <Text style={styles.number}>{completedTasks}</Text>
                    </View>
                </View>
                <FlatList
                    style={styles.tasks}
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Task
                            key={item}
                            description={item}
                            onRemove={() => handleRemoveTask(item)}
                            onToggle={(isDone: boolean) => handleToggleTask(isDone)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyList}>
                            <View style={styles.separator} />
                            <Image source={require('../../../assets/clipboard.png')} style={{ marginTop: 60 }} />
                            <View style={{ marginTop: 20}}>
                                <Text style={{ fontSize: 14, color: '#808080', fontWeight: 'bold'}}>Você ainda não tem tarefas cadastradas</Text>
                                <Text style={{ fontSize: 14, color: '#808080'}}>Crie tarefas e organize seus itens a fazer</Text>
                            </View>
                        </View>
                    )}
                >

                </FlatList>
            </View>
        </View>
    )
}