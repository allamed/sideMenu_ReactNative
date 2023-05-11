import {Image, Text} from "react-native";
import random from "../assets/1122563.jpg";
import React from "react";

const CurrentScreen=({tabTitle})=>{
    return (
        <>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                paddingTop: 20
            }}>{tabTitle}</Text>

            <Image source={random} style={{
                width: '100%',
                height: 300,
                borderRadius: 15,
                marginTop: 25
            }}></Image>

            <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
                , paddingTop: 15,
                paddingBottom: 5
            }}>Lorum epsum</Text>

            <Text style={{
            }}>Lorem ipsum dolor sit amet.</Text>
        </>
    );
}
export default CurrentScreen