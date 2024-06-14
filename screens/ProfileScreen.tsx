import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";

function ProfileScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
                Settings Screen
            </Text>
            <StatusBar style="auto" />

        </View>
    );
}

export default ProfileScreen;