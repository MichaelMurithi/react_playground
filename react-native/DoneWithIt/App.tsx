import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar, View, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
/* 
- We can get the Dimensions of a screen using the dimensions API

*/
export default function App() {
	console.log(Dimensions.get('screen'));
	const { landscape } = useDeviceOrientation();
	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					backgroundColor: 'black',
					width: '100%',
					height: landscape ? '100%' : '30%'
				}}></View>
		</SafeAreaView>
	);
}

/**
 * Stylesheet.create validates the styling properties passed to it
 * This makes the stylesheet api better in defining styles
 * When multiple style classes are provided, the object on the right overides the properties of the object on the left
 */
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
	}
});
