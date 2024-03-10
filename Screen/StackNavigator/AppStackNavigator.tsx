// AppNavigator.tsx
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookmarkScreen from '../Bookmarks/Bookmark';
import HomeScreen from '../Home/HomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Bookmark" component={BookmarkScreen} />
      {/* Thêm các màn hình khác nếu cần */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
