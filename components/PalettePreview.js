import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const PalettePreview = ({ handlePress, route }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{route.paletteName}</Text>
      <FlatList
        style={styles.list}
        horizontal={true}
        data={route.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.hexCode }]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  box: {
    height: 30,
    width: 30,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 10,
  },
  list: {
    marginBottom: 20,
  },
});
export default PalettePreview;
