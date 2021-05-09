/** @format */

import React from "react";
import{ Picker} from"@react-native-community/picker";
import { Text, View } from "react-native";
import { useState } from "react";


function Outcome(navigation) {
	const [selectedValue, setSelectedValue] = useState("Java");
	return (
		<View >
		<Picker
		  selectedValue={selectedValue}
		  style={{ height: 50, width: 150 }}
		  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
		>
		  <Picker.Item label="Chọn Lớp" value="" />
		  <Picker.Item label="Java" value="java" />
		  <Picker.Item label="Java" value="java" />
		  <Picker.Item label="Java" value="java" />
		  <Picker.Item label="Java" value="java" />
		  <Picker.Item label="Java" value="java" />
		  <Picker.Item label="JavaScript" value="js" />
		</Picker>
	  </View>
	);
}
export default Outcome;
