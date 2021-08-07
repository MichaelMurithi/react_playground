import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, TouchableWithoutFeedback } from 'react-native';

export default function App() {
	const handlePress = (message: string) => console.log(message);
	return (
		<SafeAreaView style={styles.container}>
			<Text numberOfLines={1} onPress={() => handlePress('Hello text pressed')}>
				Hello User, from Done With It app!
			</Text>
			<TouchableWithoutFeedback onPress={() => handlePress('Image Pressed')}>
				<Image
					fadeDuration={1000}
					source={{
						uri: 'https://picsum.photos/200/200',
						width: 200,
						height: 200
					}}
				/>
			</TouchableWithoutFeedback>
			<StatusBar style='auto' />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
