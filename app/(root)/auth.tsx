import { Redirect } from 'expo-router';
import { EyeClosed, EyeIcon } from 'lucide-react-native';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Button } from '~/components/Button';
import { useAuth } from '~/hooks/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, signUp, isLoading, isAuthenticated } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  if (isAuthenticated) {
    return <Redirect href="/(root)/(drawer)" />;
  }

  return (
    <View className="flex h-full w-full items-center justify-center gap-8 bg-white">
      {isLoading && (
        <View className="absolute inset-0 z-50 flex items-center justify-center bg-white">
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
      <View className="flex flex-col items-center justify-center gap-2">
        <Text className="text-3xl font-bold">AuthRN</Text>
        <Text className="text-md text-gray-500">Quick and simple authentication demo.</Text>
      </View>
      <View className="flex w-3/4 flex-col gap-2 rounded-lg border border-zinc-100 bg-white p-4">
        <TextInput
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
          className={`h-16 rounded-lg border p-2 ${errors.email ? 'border-red-500' : 'border-zinc-100'}`}
          value={email}
          onChangeText={(text) => {
            setEmail(text.toLocaleLowerCase());
          }}
        />

        {errors.email && (
          <View className="flex flex-col">
            <Text className="text-sm text-red-500">*{errors.email.message}</Text>
          </View>
        )}
        <View className="relative">
          <TextInput
            {...register('password', {
              required: true,
              minLength: 8,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
            })}
            placeholder="Password"
            className={`h-16 rounded-lg border p-2 ${errors.password ? 'border-red-500' : 'border-zinc-100'}`}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
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
        {errors.password && (
          <View className="flex flex-col">
            <Text className="text-sm text-red-500">*{errors.password.message}</Text>
          </View>
        )}
        <Button
          title="Login"
          className="rounded-lg disabled:opacity-50"
          disabled={email.length === 0 || password.length === 0}
          onPress={handleSubmit(signIn)}
        />
      </View>
    </View>
  );
}
