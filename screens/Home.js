import React, { useState, useCallback, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import PalettePreview from "../components/PalettePreview";

const Home = ({ navigation }) => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const refresh = useCallback(async () => {
        setIsRefreshing(true);
        await fetchColorPalettes();
        setIsRefreshing(false);
    });
    const [colorPalettes, setColorPalettes] = useState([]);
    const fetchColorPalettes = useCallback(async () => {
        const result = await fetch(
            "https://color-palette-api.kadikraman.vercel.app/palettes"
        );
        if (result.ok) {
            const palettes = await result.json();
            setColorPalettes(palettes);
        }
    }, []);
    useEffect(() => {
        fetchColorPalettes();
    }, []);
    console.log("from home");
    console.log(colorPalettes);
    return (
        <FlatList
            style={styles.list}
            data={colorPalettes}
            keyExtractor={(item) => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview
                    handlePress={() => {
                        navigation.navigate("ColorPalette", item);
                    }}
                    route={item}
                />
            )}
            refreshing={isRefreshing}
            onRefresh={() => refresh()}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        padding: 10,
    },
});
export default Home;
