import React from 'react';
import { View, Text } from 'react-native';
import TabItem from '../TabItem';

function BottomTabNavigator({ state, descriptors, navigation }) {
  return (
    <View style={{ backgroundColor: 'black' }}>
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30,
        paddingVertical: 20, backgroundColor: '#2D2D2D', borderTopLeftRadius: 20, borderTopRightRadius: 20, width: '100%'
      }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabItem
              key={index}
              onPress={onPress}
              onLongPress={onLongPress}
              label={label}
              isFocused={isFocused} />
          );
        })}
      </View>
    </View>
  );
}

export default BottomTabNavigator;
