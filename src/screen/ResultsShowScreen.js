import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
    const [result, setResult] = useState(null);
    const { id } = route.params; // ✅ Correct way to get params in React Navigation v6

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`); // ✅ Correct template string
            setResult(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) { // ✅ Handle null case
        return <Text>Loading...</Text>;
    }

    return (
        <View>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                keyExtractor={(photo) => photo}
                data={result.photos}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />; // ✅ Fixed 'uro' typo
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center"
    },
    image: {
        height: 200,
        width: 300,
        marginVertical: 5,
        alignSelf: "center"
    }
});

export default ResultsShowScreen;
