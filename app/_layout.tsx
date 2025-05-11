import '../global.css';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { AuthProvider } from '~/hooks/useAuth';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  const isLoggedIn = false;

  return (
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Protected guard={!isLoggedIn}>
            <Stack.Screen name="login" options={{ headerShown: false }} />
          </Stack.Protected>
          <Stack.Protected guard={isLoggedIn}>
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ title: 'Modal', presentation: 'modal' }} />
          </Stack.Protected>
        </Stack>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
// export { Stack } from 'expo-router';

// const isLoggedIn = false;

// export function AppLayout() {
//   return (
//     <Stack>
//       <Stack.Protected guard={!isLoggedIn}>
//         <Stack.Screen name="login" />
//       </Stack.Protected>

//       <Stack.Protected guard={isLoggedIn}>
//         <Stack.Screen name="private" />
//       </Stack.Protected>
//       {/* Expo Router includes all routes by default. Adding Stack.Protected creates exceptions for these screens. */}
//     </Stack>
//   );
// }
