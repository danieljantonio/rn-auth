import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from '~/components/CustomDrawerContent';
import { TouchableOpacity } from 'react-native';
import { SettingsIcon } from 'lucide-react-native';
import { useAuth } from '~/hooks/useAuth';

const DrawerLayout = () => {
  const { user } = useAuth();

  return (
    <Drawer drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name="index"
        options={{
          headerTitle: `${user?.name}'s Dashboard`,
          drawerLabel: 'Home',
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          drawerItemStyle: {
            borderRadius: 10,
          },
          headerRight: () => (
            <Link href="/modal" asChild>
              <TouchableOpacity>
                <SettingsIcon size={24} color="gray" />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          drawerLabel: 'News & Tickets',
          title: 'News & Tickets',
          drawerIcon: ({ size, color }) => (
            <MaterialIcons name="border-bottom" size={size} color={color} />
          ),
          drawerItemStyle: {
            borderRadius: 10,
          },
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
