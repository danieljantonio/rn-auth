import { Link, useRouter } from 'expo-router';
import { View, Text, Pressable, SafeAreaView } from 'react-native';

export default function News() {
  const router = useRouter();

  return (
    <View className="flex h-full w-full bg-white px-4 py-8">
      <View className="flex w-full flex-col gap-2 rounded-lg border border-zinc-100 bg-white p-4">
        <Text className="text-md font-bold">
          Aliens vs Predators -{' '}
          {new Date()
            .toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'short',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            })
            .replace(',', '')}
        </Text>
        <Text className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, quos.
        </Text>
        <Pressable onPress={() => router.push('/(root)/(drawer)/(tabs)/(tickets)/1')}>
          <Text className="text-sm text-blue-500">Ticket details</Text>
        </Pressable>
      </View>
    </View>
  );
}
