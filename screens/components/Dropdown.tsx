import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, Button, Pressable, GestureResponderEvent, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '../../types/StackNavigationProp';
interface DropdownProps {
    closeMenu: () => void,
}
export default function Dropdown(props: DropdownProps) {
    const options = [{
        Name: "Profile",
        Screen: "Profile"
    }, {
        Name: "Logout",
        Screen: "Login"
    }
    ]

    const navigation = useNavigation<StackNavigationProp>();
    const [modalVisible, setModalVisible] = useState<boolean>();
    function hideModalAndMenu() {
        setModalVisible(false);
        props.closeMenu();
    }
    return (
        <View style={styles.container}>
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity
                    style={styles.touchableOpacity}
                    onPress={() => hideModalAndMenu()}>
                    <View style={styles.modalView}>
                        {options.map((opt) => {
                            return (
                                <Pressable key={opt.Name} onPress={() => {

                                    hideModalAndMenu();
                                    navigation.navigate(opt.Screen);
                                }
                                }>
                                    <Text style={styles.pressable}>
                                        {opt.Name}
                                    </Text>
                                </Pressable>
                            )
                        })}
                    </View>
                </TouchableOpacity>

            </Modal >
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        overflow: 'visible',
        position: 'absolute',
    },
    modalView: {
        width: 100,
        height: 75,
        backgroundColor: '#F5F5F5',
        position: 'absolute',
        top: 80,
        right: 5,
    },
    pressable: {
        color: '#FF5A5F',
        paddingHorizontal: 5,
        paddingVertical: 1,
        shadowRadius: 1,
        borderWidth: 1,
        borderColor: '#FF999C'
    },
    touchableOpacity: {
        flex: 1,
        width: '100%',
        height: '100%'
    }
})