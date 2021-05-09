/** @format */

import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const dimensions = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		alignItems:"center",
		flex: 1,
		backgroundColor: "#fff",
	},
	Header: {
		borderBottomWidth: 0,

		fontWeight: "bold",
		fontSize: 30,
	},
	StyleImage:{
		width: 150,
		height: 200,
		marginTop:20

	},
	content: {
		justifyContent: "center",
		paddingHorizontal: 16,
		paddingVertical: 20,
	},
	title: {
		fontWeight: "bold",
		fontSize: 25,
	},
	info: {
		fontSize: 20,
	},
	button: {
		fontWeight: "bold",
		backgroundColor: "black",
		fontSize: 20,
		color: "#fff",
		width: 150,
		height: 50,
		borderRadius: 7,
		marginTop: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	txtBtn: {
		fontSize: 20,
		color: "#fff",
		fontWeight: "bold",
	},
});
export default styles;
