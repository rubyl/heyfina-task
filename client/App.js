import React from 'react'
import styles from './styles/app_style'
import { SafeAreaView } from 'react-native'
import CurrencyList from './components/CurrencyList'

function App() {
  return (
      <SafeAreaView style={styles.container}>
        <CurrencyList/>
      </SafeAreaView>
  );
}

export default App;
