import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as Icons from "react-native-heroicons/outline";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Categories from "../components/Categories";
import Recipes from "../components/Recipes";
import axios from "axios";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  const fetchCategory = async () => {
    try {
      const res = await axios.get(
        "https://themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(res.data.categories);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const fetchMeals = async (category = "Beef") => {
    try {
      const res = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setMeals(res.data.meals);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
    fetchMeals();
  }, []);

  const handleChangeCategory = (category) => {
    setMeals([]);
    fetchMeals(category);
    setActiveCategory(category);
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* Header */}
        <View className="flex-row justify-between items-center mx-4 mb-2">
          <Icons.UserCircleIcon color="gray" size={40} />
          <Text className="font-bold text-xl">Foodie GPT</Text>
          <Icons.BellIcon color="gray" size={40} />
        </View>

        {/* Search Bar */}
        <View className="flex-row mx-4 p-[6px] rounded-full bg-black/5">
          <TextInput
            placeholderTextColor="gray"
            placeholder="Search any recipe"
            className="flex-1 pl-3 text-base mb-1 tracking-wider"
          />
          <View className="bg-white rounded-full p-3">
            <Icons.MagnifyingGlassIcon
              color="gray"
              size={hp(2.5)}
              strokeWidth={3}
            />
          </View>
        </View>

        {/* Categories */}
        <View>
          {categories.length > 0 && (
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              handleChangeCategory={handleChangeCategory}
            />
          )}
        </View>

        {/* List of Recipes */}
        <View>
          <Recipes meals={meals} categories={categories} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
