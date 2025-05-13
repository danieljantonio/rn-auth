import { StatusBar } from 'expo-status-bar';
import { Platform, View, Text } from 'react-native';
import { useAuth } from '~/hooks/useAuth';
export default function Modal() {
  const { user } = useAuth();

  return (
    <>
      <View className="flex h-full flex-col bg-white px-8 py-12">
        <Text className="text-2xl font-bold">Profile Details</Text>
        <View className="mt-4 flex flex-col gap-4 ">
          <View className="flex flex-col">
            <Text className="mb-1 text-sm font-medium text-gray-500">Name</Text>
            <View className="rounded-md bg-slate-100 p-3">
              <Text className="text-gray-800">{user?.name}</Text>
            </View>
          </View>
          <View className="flex flex-col">
            <Text className="mb-1 text-sm font-medium text-gray-500">Email</Text>
            <View className="rounded-md bg-slate-100 p-3">
              <Text className="text-gray-800">{user?.email}</Text>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}
