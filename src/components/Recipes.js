import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { heightPercentageToDP } from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import { mealData } from "../constants/data";
import Animated, { FadeInDown } from "react-native-reanimated";

const Recipes = () => {
  return (
    <View className="mx-4 space-y-3">
      <Text
        style={{ fontSize: heightPercentageToDP(3) }}
        className="font-bold text-neutral-600"
      >
        Recipes
      </Text>
      <View>
        <MasonryList
          data={mealData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => <ReciperCard item={item} index={i} />}
          // refreshing={isLoadingNext}
          // onRefresh={() => refetch({ first: ITEM_CNT })}
          onEndReachedThreshold={0.1}
          // onEndReached={() => loadNext(ITEM_CNT)}
        />
      </View>
    </View>
  );
};

const ReciperCard = ({ item, index }) => {
  let isEven = index % 2 == 0;
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .duration(500)
        .springify()
        .damping(12)}
    >
      <Pressable
        style={{
          width: "100%",
          paddingLeft: isEven ? 0 : 8,
          paddingRight: isEven ? 8 : 0,
        }}
        className="flex justify-center mb-4 space-y-1 "
      >
        <Image
          source={{ uri: item.image }}
          style={{
            width: "100%",
            height:
              index % 3 == 0
                ? heightPercentageToDP(25)
                : heightPercentageToDP(35),
            borderRadius: 35,
          }}
          className="bg-black/5"
        />
        <Text
          style={{ fontSize: heightPercentageToDP(1.5) }}
          className="ml-2 font-semibold text-neutral-600"
        >
          {item.name.length > 20 ? `${item.name.slice(0, 20)}...` : item.name}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default Recipes;

const styles = StyleSheet.create({});