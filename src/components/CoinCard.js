import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { images } from '../Utils/CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20,
        // backgroundColor: "black"
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5,
        fontWeight: "bold",
        color: "lime"      
    },
    coinName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20,
        color: "lime"
    },
    seperator: {
        color: "lime",
        marginTop: 10,
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",
        color: "lime"       
    },
    image: {
        width: 35,
        height: 35,
    },
    moneySymbol: {
        fontWeight: "bold",
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "lime",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    },
    lime: {
        color: "lime"
    },
    blue: {
        color: "blue"
    }
})

const { 
    container,
    image,
    moneySymbol,
    upperRow,
    coinSymbol,
    coinName,
    coinPrice,
    statisticsContainer,
    seperator,
    percentChangePlus,
    percentChangeMinus,
    lime,
    blue
} = styles;

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => {
 
    
    return (
        <View style={container}>

            <View style={upperRow}>
                <Image
                    style={styles.image}
                    source={{ uri: images[symbol] }}
                />
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={seperator}>|</Text>
                <Text style={coinName}>{coin_name}</Text>
                <Text style={coinPrice}>{price_usd}
                    <Text style={moneySymbol}> $ </Text>
                </Text>
            </View>

            <View style={statisticsContainer}>

                <Text style={blue}>24h:
                     <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_24h} % </Text>
                </Text>
                <Text style={blue}>7d:
                    <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_7d} % </Text>
                </Text>

            </View>

        </View> 
    );
}



export default CoinCard;