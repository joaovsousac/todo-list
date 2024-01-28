import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import Icon from 'react-native-vector-icons/Feather'

type Props = {
    description: string,
    onRemove: () => void,
    onToggle: (isDone: boolean) => void
}

export function Task({ description, onRemove, onToggle }: Props) {

    const [isTaskDone, setisTaskDone] = useState(false);

    const handleToggleTask = () => {
        setisTaskDone(!isTaskDone);
        onToggle(!isTaskDone); 
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.check, isTaskDone && {
                    borderColor: '#5E60CE',
                    backgroundColor: '#5E60CE'
                }]}
                onPress={handleToggleTask}
            >
                {isTaskDone && (
                    <Icon
                    name="check"
                    size={13}
                    style={{ color: '#F2F2F2' }}
                />
                )}
                {!isTaskDone && (
                    <Text />
                )}
                
            </TouchableOpacity>
            <Text style={[styles.description, isTaskDone && {
                textDecorationLine: 'line-through',
                color: '#808080'
            }]}>
                {description}
            </Text>
            <TouchableOpacity  style={styles.delete}  onPress={onRemove} >
                <Icon
                    name="trash-2"
                    size={22}
                    style={{ color: '#808080' }}
                    
                />
            </TouchableOpacity>

        </View>
    )
}