import { Stack } from 'expo-router';

export default function NewsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'News' }} />
      <Stack.Screen name="[id]" options={{ headerTitle: 'News details' }} />
    </Stack>
  );
}
