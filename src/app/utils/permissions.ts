import { PermissionsAndroid } from "react-native";
import * as Notifications from "expo-notifications"

async function requestCameraPermission() : Promise<void> {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: 'Cool Photo App Camera Permission',
                message:
                'Cool Photo App needs access to your camera ' +
                    'so you can take awesome pictures.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera');
        } else {
            console.log('Camera permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
};
// Requesting Notifications access 
async function registerForPushNotifications() {
    let token:string;
    const { status: existingStatus  } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status;
    }

    if (finalStatus !== 'granted' ){
        alert('failed to get the push token for push notifications')
        return
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
}

export {
    requestCameraPermission,
    registerForPushNotifications
}
