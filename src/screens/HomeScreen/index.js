/** @format */

import React from "react";

import {
	Text,
	View,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Image,
	Alert,
	Keyboard,
} from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import { useState } from "react";
import{ Picker} from"@react-native-community/picker";
function HomeScreen({ navigation }) {
	const [selectedValue, setSelectedValue] = useState("Java");
	return (
		<View style={styles.container}>

			<Header
				label='Trang chủ'
				style={styles.Header}></Header>
				<Image 
				style={styles.StyleImage}
				source={{ uri: 'https://tiemanhsky.com/wp-content/uploads/2020/03/61103071_2361422507447925_6222318223514140672_n_1.jpg'}}/>

		
			<View style={styles.content}>
				<Text style={styles.title}>
					Thông tin sinh viên
				</Text>

				<Text style={styles.textInfo}>
					Họ tên: Trần Hoàng Lâm
				</Text>
				<Text style={styles.textInfo}>
					Mã số sinh viên: 180937
				</Text>
				<Text style={styles.textInfo}>
					Ngày sinh: 24/12/2000
				</Text>
				
			</View>
		
			{/* <Picker
			  selectedValue={selectedValue}
			  style={{ height: 30, width: 150, borderRadius:25,paddingLeft:10 }}
			  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
			>
			  <Picker.Item label="Chọn Lớp" value="" />
			  <Picker.Item label="Java" value="java" />
			  <Picker.Item label="Java" value="java" />
			  <Picker.Item label="Java" value="java" />
			  <Picker.Item label="Java" value="java" />
			  <Picker.Item label="Java" value="java" />
			  <Picker.Item label="JavaScript" value="js" />
			</Picker> */}
		  </View>
	
	);
}

export default HomeScreen;
