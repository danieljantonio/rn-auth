import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { HeaderButton } from '../../../components/HeaderButton';
import CustomDrawerContent from '~/components/CustomDrawerContent';
import { TouchableOpacity } from 'react-native';
import { SettingsIcon } from 'lucide-react-native';

const DrawerLayout = () => {
  return (
    <Drawer drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name="index"
        options={{
          headerTitle: 'Home',
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
          headerTitle: 'Tabs',
          drawerLabel: 'Tabs',
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
