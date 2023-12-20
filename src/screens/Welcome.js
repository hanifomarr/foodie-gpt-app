import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigate = useNavigation();
  const padding1 = useSharedValue(0);
  const padding2 = useSharedValue(0);

  useEffect(() => {
    padding1.value = 0;
    padding2.value = 0;
    setTimeout(() => {
      padding1.value = withSpring(padding1.value + hp(5.5));
    }, 100);
    setTimeout(() => {
      padding2.value = withSpring(padding2.value + hp(5));
    }, 300);

    setTimeout(() => {
      navigate.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    }, 2500);
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-yellow-500 space-y-10">
      <StatusBar style="light" />
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: padding1 }}
      >
        <Animated.View
          className="bg-white/20 p-0.2 rounded-full"
          style={{ padding: padding2 }}
        >
          <Image
            source={require("../../assets/welcome.png")}
            style={{ width: hp(25), height: hp(25) }}
          />
        </Animated.View>
      </Animated.View>
      <View className="flex items-center space-y-2">
        <Text className="text-white text-6xl font-bold">Foodie GPT</Text>
        <Text className="text-white text-xl font-medium">
          Your Friendly AI Chef in the Kitchen
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
