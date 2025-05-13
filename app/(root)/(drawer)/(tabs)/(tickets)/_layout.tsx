import { Stack } from 'expo-router';

export default function TicketsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'Tickets' }} />
      <Stack.Screen name="[id]" options={{ headerTitle: 'Ticket details' }} />
    </Stack>
  );
}
