import {View} from 'react-native';
import React from 'react';
import {HomeScreen} from '@screens';

type Props = {};

const App = (props: Props) => {
  console.log('check');

  return (
    <View>
      <HomeScreen />
    </View>
  );
};

export default App;
