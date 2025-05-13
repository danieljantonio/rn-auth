import { Redirect } from 'expo-router';
import { EyeClosed, EyeIcon } from 'lucide-react-native';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Button } from '~/components/Button';
import { useAuth } from '~/hooks/useAuth';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { signIn, signUp, isLoading, isAuthenticated } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },

    // resolver: yupResolver(authSchema),
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
        {isSignUp && (
          <>
            <Text className="text-sm text-gray-500">Name:</Text>
            <Controller
              control={control}
              name="name"
              rules={{
                required: 'Name is required.',
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Name"
                  className={`h-16 rounded-lg border p-2 ${errors.name?.message ? 'border-red-500' : 'border-zinc-100'}`}
                />
              )}
            />
            {errors.name?.message && (
              <View className="flex flex-col">
                <Text className="text-sm text-red-500">{errors.name.message}</Text>
              </View>
            )}
          </>
        )}
        <Text className="mt-2 text-sm text-gray-500">Email:</Text>
        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Email is required.',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Invalid email format',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChangeText={(text) => {
                onChange(text.toLowerCase());
              }}
              onBlur={onBlur}
              value={value}
              placeholder="Email"
              className={`h-16 rounded-lg border p-2 ${errors.email?.message ? 'border-red-500' : 'border-zinc-100'}`}
            />
          )}
        />
        {errors.email?.message && (
          <View className="flex flex-col">
            <Text className="text-sm text-red-500">{errors.email.message}</Text>
          </View>
        )}
        <Text className="mt-2 text-sm text-gray-500">Password:</Text>
        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required.',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
            pattern: isSignUp
              ? {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                  message:
                    'Password must contain at least one uppercase letter, one lowercase letter, and one number',
                }
              : undefined,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className="relative">
              <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Password"
                className={`h-16 rounded-lg border p-2 ${errors.password?.message ? 'border-red-500' : 'border-zinc-100'}`}
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
          )}
        />
        {errors.password && (
          <View className="flex flex-col">
            <Text className="text-sm text-red-500">
              {errors.password.message || 'Password is required.'}
            </Text>
          </View>
        )}
        <Button
          title={isSignUp ? 'Sign Up' : 'Sign In'}
          className="mt-4 rounded-lg disabled:opacity-50"
          onPress={handleSubmit(isSignUp ? signUp : signIn)}
        />
        <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
          <Text className="text-sm text-gray-500">
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
