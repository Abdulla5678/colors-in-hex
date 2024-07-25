import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ColorBox from "../components/ColorBox";

const ColorPalette = ({ route }) => {
    const colors = route.params.colors;
    // console.log(colors);
    return (
        <FlatList
            style={styles.container}
            data={colors}
            keyExtractor={(item) => item.colorName}
            renderItem={({ item }) => (
                <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
});

export default ColorPalette;
