import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'

export const Report = () => {
    const [selectedValue, setSelectedValue] = useState()

    const styles = StyleSheet.create({
        redText: {
            color: 'red',
            fontSize: 20
        },
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        scrollContainer: {
            height: 200,
            width: '100%'
        }
    });

    return (
        <View style={styles.container}>
            <Text>Hello!</Text>
            <Text style={styles.redText}>My favorite things are:</Text>
            <View>
                <Text>- Cheese burgers</Text>
                <Text>- Armadillos</Text>
                <Text>- Rattlesnake venom</Text>
            </View>
            <View>
                <Text>Please select an option:</Text>
                <View style={styles.scrollContainer}>
                    <ScrollView>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: 300 }}
                            onValueChange={(itemValue) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Steak and taters" value="option1" />
                            <Picker.Item label="Option 2" value="option2" />
                            <Picker.Item label="Option 3" value="option3" />
                        </Picker>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}