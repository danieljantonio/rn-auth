import { router } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function News() {
  return (
    <View className="flex h-full w-full bg-white px-4 py-8">
      <View className="flex w-full flex-col gap-2 rounded-lg border border-zinc-100 bg-white p-4">
        <Text className="text-md font-bold">News</Text>
        <Text className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, quos.
        </Text>
        <Pressable onPress={() => router.push('/(root)/(drawer)/(tabs)/(news)/1')}>
          <Text className="text-sm text-blue-500">Read more</Text>
        </Pressable>
      </View>
    </View>
  );
}
