import { Stack } from 'expo-router';
import { AuthProvider, useAuth } from '~/hooks/useAuth';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function MainLayout() {
  const { isAuthenticated } = useAuth();

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Protected guard={isAuthenticated}>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ title: 'Settings', presentation: 'modal' }} />
        </Stack.Protected>
      </Stack>
    </AuthProvider>
  );
}
