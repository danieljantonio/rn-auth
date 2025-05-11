import { EyeClosed, EyeIcon } from 'lucide-react-native';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Button } from '~/components/Button';
import { useAuth } from '~/hooks/useAuth';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  return (
    <View className="flex h-full w-full items-center justify-center gap-8">
      <View className="flex flex-col items-center justify-center gap-2">
        <Text className="text-3xl font-bold">AuthRN</Text>
        <Text className="text-md text-gray-500">Quick and simple authentication demo.</Text>
      </View>
      <View className="flex w-3/4 flex-col gap-2 rounded-lg border border-zinc-100 bg-white p-4">
        <TextInput placeholder="Email" className="h-16 rounded-lg border border-zinc-100 p-2" />
        <View className="relative">
          <TextInput
            placeholder="Password"
            className="h-16 rounded-lg border border-zinc-100 p-2"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2">
            {showPassword ? (
              <EyeIcon size={16} color="gray" />
            ) : (
              <EyeClosed size={16} color="gray" />
            )}
          </TouchableOpacity>
        </View>
        <Button
          title="Login"
          className="rounded-lg"
          onPress={() => {
            console.log('login');
            login('test@test.com', 'password');
          }}
        />
      </View>
    </View>
  );
}
