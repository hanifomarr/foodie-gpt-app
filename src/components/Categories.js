import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";

const Categories = ({ categories, activeCategory, handleChangeCategory }) => {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="space-x-4"
      >
        {categories.map((category, index) => {
          const isActive = category.strCategory === activeCategory;
          const activeButtonClass = isActive ? "bg-amber-300" : "bg-black/5";
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                handleChangeCategory(category.strCategory);
              }}
              className="flex items-center space-y-1"
            >
              <View className={`rounded-full p-[6px] ${activeButtonClass}`}>
                <Image
                  source={{ uri: category.strCategoryThumb }}
                  style={{ height: hp(6), width: hp(6) }}
                  className="rounded-full"
                />
              </View>
              <Text className="text-center text-nuetral-600">
                {category.strCategory}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </Animated.View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
