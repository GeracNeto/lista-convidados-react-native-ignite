import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"

import { styles } from "./styles"

import { useState } from "react"

import { Participant } from "../../components/Participant"

export function Home() {

    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState("")

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome")
        }

        setParticipants(prev => [...prev, participantName])

        setParticipantName('')
    }

    function handleParticipantRemove(name: string) {

        Alert.alert("Remover", `Deseja remover o participante ${name}?`,[
            {
                text: 'Sim',
                onPress: () => {
                    Alert.alert("Deletado!")

                    setParticipants(prev => prev.filter(participant => participant !== name))
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 4 de novembro de 2022
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={handleParticipantRemove}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
                    </Text>
                )}
            />

        </View>
    )
}