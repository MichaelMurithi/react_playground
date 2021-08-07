import React from 'react';
import {
	StyleSheet,
	Text,
	Image,
	SafeAreaView,
	TouchableWithoutFeedback,
	Button,
	Alert,
	Platform,
	StatusBar
} from 'react-native';

export default function App() {
	const handlePress = (message: string) => console.log(message);
	return (
		<SafeAreaView style={[styles.container, containerStyle]}>
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
			<Button
				color='blue'
				title='Change Text'
				onPress={() =>
					Alert.alert('Confirm Action', ' Are you sure you want to do this ?', [
						{ text: ' Yes', onPress: () => console.log('Yes, they are sure :(') },
						{
							text: ' No',
							onPress: () => console.log('Nop, they dont know what they are doing :(')
						}
					])
				}
			/>
			<StatusBar />
		</SafeAreaView>
	);
}

/**
 * Stylesheet.create validates the styling properties passed to it
 * This makes the stylesheet api better in defining styles
 * When multiple style classes are provided, the object on the right overides the properties of the object on the left
 */
const containerStyle = { backgroundColor: 'orange' };
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
	}
});
