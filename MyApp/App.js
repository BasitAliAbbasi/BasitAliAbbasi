/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  HStack,
  Center,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
} from 'native-base';

// Color Switch Component
function ToggleDarkMode() {
  console.log('====================================');
  console.log('hashahs');
  console.log('====================================');
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light' ? true : false}
        onToggle={toggleColorMode}
      />
      <Text>Light</Text>
    </HStack>
  );
}
const App = () => {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{bg: 'blueGray.900'}}
        _light={{bg: 'blueGray.50'}}
        px={4}
        flex={1}>
        <VStack space={5} alignItems="center">
          <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};
export default App;
