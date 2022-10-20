import { View, Text, TouchableOpacity } from "react-native"

import { styles } from "./styles"

type Props = {
    name: string;
    onRemove: (name: string) => void
}

export function Participant({ name, onRemove }: Props) {

    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => onRemove(name)}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}