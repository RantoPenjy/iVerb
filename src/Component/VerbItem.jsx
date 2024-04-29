import React from "react";
import {View, StyleSheet, Text} from "react-native";

const VerbItem = React.memo(({verb}) => {
    return (
        <View style={styles.box}>
            <Text style={styles.title}>{verb.Infinitive}</Text>
            <Text>
                <Text style={styles.bold}>Traduction:</Text> {verb.French}
            </Text>
            <Text>
                <Text style={styles.bold}>Preterit:</Text> {verb.SimplePast}
            </Text>
            <Text>
                <Text style={styles.bold}>Participe passé:</Text> {verb.PastParticiple}
            </Text>
        </View>
    );
});

const styles = StyleSheet.create({
    box: {
        backgroundColor: "#fff",
        top: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        borderRadius: 10,
        shadowOffset: {width: 0, height: 5},
        shadowColor: "#333",
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    bold: {
        fontWeight: "bold",
    }
});

export default VerbItem;
