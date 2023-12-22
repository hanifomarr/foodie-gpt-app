import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import * as Icons from "react-native-heroicons/outline";
import * as IconsSolid from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Loading from "../components/Loading";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

const MealDetails = ({ route }) => {
  const navigation = useNavigation();
  const { idMeal, strMeal, strMealThumb } = route.params;
  const [isFavourite, setIsFavourite] = useState(false);
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMeal(idMeal);
  }, []);

  const fetchMeal = async (idMeal) => {
    try {
      const res = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      setLoading(false);
      setMeal(res.data.meals[0]);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const ingredientsIndex = (meal) => {
    if (!meal) return [];
    let index = [];
    for (let i = 1; i <= 20; i++) {
      if (meal["strIngredient" + i]) {
        index.push(i);
      }
    }
    return index;
  };

  return (
    <View className="bg-white flex-1">
      <StatusBar style="light" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <View className="flex justify-center items-center">
          <Animated.Image
            sharedTransitionTag={idMeal}
            source={{ uri: strMealThumb }}
            style={{
              height: heightPercentageToDP(50),
              width: widthPercentageToDP(98),
              borderRadius: 35,
              marginTop: 4,
            }}
          />
        </View>
        <Animated.View
          entering={FadeIn.delay(200).duration(1000)}
          className="flex-row w-full absolute pt-12 justify-between items-center "
        >
          <Pressable
            className="bg-white ml-5 rounded-full p-2"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icons.ChevronLeftIcon
              size={heightPercentageToDP(3.5)}
              strokeWidth={4.5}
              color={"gray"}
            />
          </Pressable>
          <Pressable
            className="bg-white mr-5 rounded-full p-2"
            onPress={() => setIsFavourite(!isFavourite)}
          >
            <IconsSolid.HeartIcon
              size={heightPercentageToDP(3.5)}
              strokeWidth={4.5}
              color={isFavourite ? "red" : "gray"}
            />
          </Pressable>
        </Animated.View>
        {loading ? (
          <Loading size="large" className="mt-16" />
        ) : (
          <View className="flex justify-between px-4 space-y-4 pt-8">
            {/* Title */}
            <Animated.View
              entering={FadeInDown.delay(100)
                .springify()
                .duration(700)
                .damping(12)}
              className="space-y-2"
            >
              <Text
                style={{ fontSize: heightPercentageToDP(4) }}
                className="font-bold text-neutral-700"
              >
                {meal?.strMeal}
              </Text>
              <Text
                style={{ fontSize: heightPercentageToDP(1.5) }}
                className="text-neutral-400 "
              >
                {meal?.strCategory}
              </Text>
            </Animated.View>

            {/* Misc */}
            <Animated.View
              entering={FadeInDown.delay(200)
                .springify()
                .duration(700)
                .damping(12)}
              className="flex-row justify-around"
            >
              <View className="bg-yellow-400 rounded-full p-2 flex items-center">
                <View className="bg-white rounded-full p-2">
                  <Icons.ClockIcon
                    size={heightPercentageToDP(4)}
                    strokeWidth={2.5}
                    color={"gray"}
                  />
                </View>
                <View className="space-y-1 flex items-center py-1 ">
                  <Text
                    className="font-bold text-neutral-700"
                    style={{ fontSize: heightPercentageToDP(2) }}
                  >
                    25
                  </Text>
                  <Text
                    className="font-semibold text-neutral-700"
                    style={{ fontSize: heightPercentageToDP(1.5) }}
                  >
                    Min
                  </Text>
                </View>
              </View>
              <View className="bg-yellow-400 rounded-full p-2 flex items-center">
                <View className="bg-white rounded-full p-2">
                  <Icons.ClockIcon
                    size={heightPercentageToDP(4)}
                    strokeWidth={2.5}
                    color={"gray"}
                  />
                </View>
                <View className="space-y-1 flex items-center py-1 ">
                  <Text
                    className="font-bold text-neutral-700"
                    style={{ fontSize: heightPercentageToDP(2) }}
                  >
                    25
                  </Text>
                  <Text
                    className="font-semibold text-neutral-700"
                    style={{ fontSize: heightPercentageToDP(1.5) }}
                  >
                    Min
                  </Text>
                </View>
              </View>
              <View className="bg-yellow-400 rounded-full p-2 flex items-center">
                <View className="bg-white rounded-full p-2">
                  <Icons.ClockIcon
                    size={heightPercentageToDP(4)}
                    strokeWidth={2.5}
                    color={"gray"}
                  />
                </View>
                <View className="space-y-1 flex items-center py-1 ">
                  <Text
                    className="font-bold text-neutral-700"
                    style={{ fontSize: heightPercentageToDP(2) }}
                  >
                    25
                  </Text>
                  <Text
                    className="font-semibold text-neutral-700"
                    style={{ fontSize: heightPercentageToDP(1.5) }}
                  >
                    Min
                  </Text>
                </View>
              </View>
              <View className="bg-yellow-400 rounded-full p-2 flex items-center">
                <View className="bg-white rounded-full p-2">
                  <Icons.ClockIcon
                    size={heightPercentageToDP(4)}
                    strokeWidth={2.5}
                    color={"gray"}
                  />
                </View>
                <View className="space-y-1 flex items-center py-1 ">
                  <Text
                    className="font-bold text-neutral-700"
                    style={{ fontSize: heightPercentageToDP(2) }}
                  >
                    25
                  </Text>
                  <Text
                    className="font-semibold text-neutral-700"
                    style={{ fontSize: heightPercentageToDP(1.5) }}
                  >
                    Min
                  </Text>
                </View>
              </View>
            </Animated.View>

            {/* Ingredients */}
            <Animated.View
              entering={FadeInDown.delay(300)
                .springify()
                .duration(700)
                .damping(12)}
              className="space-y-4"
            >
              <Text
                style={{ fontSize: heightPercentageToDP(2.5) }}
                className="font-bold flex-1 text-neutral-700"
              >
                Ingredients
              </Text>
              <View className="space-y-2 ml-3">
                {ingredientsIndex(meal).map((i) => {
                  return (
                    <View key={i} className="flex-row space-x-4">
                      <View
                        className="bg-yellow-400 rounded-full"
                        style={{
                          height: heightPercentageToDP(1.5),
                          width: heightPercentageToDP(1.5),
                        }}
                      />
                      <View className="flex-row space-x-2">
                        <Text
                          style={{ fontSize: heightPercentageToDP(1.7) }}
                          className="font-extrabold text-neutral-700"
                        >
                          {meal[`strMeasure${i}`]}
                        </Text>
                        <Text
                          style={{ fontSize: heightPercentageToDP(1.7) }}
                          className="font-medium text-neutral-600"
                        >
                          {meal[`strIngredient${i}`]}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </Animated.View>

            {/* Instruction */}
            <Animated.View
              entering={FadeInDown.delay(400)
                .springify()
                .duration(700)
                .damping(12)}
              className="space-y-4"
            >
              <Text
                style={{ fontSize: heightPercentageToDP(2.5) }}
                className="font-bold flex-1 text-neutral-700"
              >
                Instructions
              </Text>
              {meal?.strInstructions && (
                <Text
                  style={{ fontSize: heightPercentageToDP(1.6) }}
                  className="text-neutral-700"
                >
                  {meal?.strInstructions
                    .split("\r\n")
                    .map((instruction, index) => (
                      <Text key={index}>
                        <Text style={{ fontWeight: "bold" }}>
                          {index + 1}.{" "}
                        </Text>
                        {instruction}
                        {"\n"}
                      </Text>
                    ))}
                </Text>
              )}
            </Animated.View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({});
