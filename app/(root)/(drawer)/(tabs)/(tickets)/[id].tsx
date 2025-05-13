import { View, Text } from 'react-native';

export default function News() {
  return (
    <View className="flex h-full w-full bg-white px-4 py-8">
      <Text className="text-2xl font-bold">
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
        sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam, quos.
      </Text>
    </View>
  );
}
