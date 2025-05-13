import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';

import { HeaderButton } from '../../../components/HeaderButton';
import { useAuth } from '~/hooks/useAuth';
import CustomDrawerContent from '~/components/CustomDrawerContent';

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
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
