import '../global.css';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { AuthProvider } from '~/hooks/useAuth';

export default function RootLayout() {
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(root)" options={{ headerShown: false }} />
        </Stack>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
