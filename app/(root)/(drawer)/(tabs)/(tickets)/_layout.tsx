import { useRoute } from '@react-navigation/native';
import { Stack, useRouter } from 'expo-router';
import { AlignLeft } from 'lucide-react-native';
import { Pressable } from 'react-native';

export default function TicketsLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'Tickets'}} />
      <Stack.Screen name="[id]" options={{ headerTitle: 'Ticket details' }} />
    </Stack>
  );
}
