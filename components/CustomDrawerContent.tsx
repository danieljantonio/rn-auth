import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { LogOutIcon } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '~/hooks/useAuth';

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { bottom } = useSafeAreaInsets();
  const { logout } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        onPress={() => logout()}
        style={{
          padding: 20,
          paddingBottom: bottom + 20,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <LogOutIcon size={20} color="grey" />
        <Text style={{ color: 'grey' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
