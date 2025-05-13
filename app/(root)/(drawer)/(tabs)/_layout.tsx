import { Tabs } from 'expo-router';
import { NewspaperIcon, Ticket } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="(news)"
        options={{
          title: 'News',
          headerShown: false,
          tabBarIcon: ({ color }) => <NewspaperIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tickets)"
        options={{
          title: 'Tickets',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ticket size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
