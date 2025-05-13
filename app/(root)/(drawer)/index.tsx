import { Text, View } from 'react-native';
import { useAuth } from '~/hooks/useAuth';
import { Button } from '~/components/Button';
export default function Home() {
  const { user, logout } = useAuth();

  return (
    <View className="flex h-full w-full flex-col justify-between gap-4 bg-white px-4 py-8">
      <View className="flex flex-col gap-2">
        <Text className="text-2xl font-bold">Welcome back, {user?.name}</Text>
        <Text className="text-gray-500">
          This is your dashboard, a place where miracles happen.
        </Text>
        <Text className="text-gray-500">
          All news and tickets are fake, but notifications will be sent to{' '}
          {user?.email.toLowerCase()}.
        </Text>
      </View>

      <View className="flex flex-col gap-2">
        <Text className="text-md text-gray-300 ">
          If you change your mind, you can <Text className="text-red-500">logout</Text> here
        </Text>
        <Button title="Logout" onPress={logout} className="rounded-lg" />
        <Text className="text-xs text-gray-300">
          Ps. This was just a requirement for the test. True good button exists on the drawer.
        </Text>
      </View>
    </View>
  );
}
