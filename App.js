import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Weeks from './Screens/Weeks';
import Week2 from './Screens/Week2';
import Week3 from './Screens/Week3';
import Week4 from './Screens/Week4';
import Week5 from './Screens/Week5';
import Week6 from './Screens/Week6';
import Week7 from './Screens/Week7';
import Week8 from './Screens/Week8';
import Week9 from './Screens/Week9';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home Screen">
        <Drawer.Screen name="Home Screen" component={Weeks} />
        <Drawer.Screen name="Week 2 - Profile Screen" component={Week2} />
        <Drawer.Screen name="Week 3" component={Week3} />
        <Drawer.Screen name="Week 4 - Cards & useRef" component={Week4} />
        <Drawer.Screen name="Week 5 - Drawer Home/Profile" component={Week5} />
        <Drawer.Screen name="Week 6 - Input Form" component={Week6} />
        <Drawer.Screen name="Week 7 - Meet7 Lat1" component={Week7} />
        <Drawer.Screen name="Week 8 - Axios & Forms" component={Week8} />
        <Drawer.Screen name="Week 9 - Camera" component={Week9} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
