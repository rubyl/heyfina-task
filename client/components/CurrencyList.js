import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, FlatList, TouchableOpacity, Animated, ScrollView} from 'react-native';
import { Picker } from '@react-native-picker/picker'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import styles from '../styles/app_style'
import getAllCurrency from '../api/api'

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({ uri: 'http://localhost:4000' });

function CurrencyList() {
  const [selectedValue, setSelectedValue] = useState("");
  let [currencies, setCurrenices] = useState([])
  let [choice, setChoice] = useState([])
  let [selectedCurrencies, setSelectedCurrecies] = useState([])

  React.useEffect(() => {
    client.query({
      query: gql`${getAllCurrency()}`
    }).then((res) => {
      setCurrenices(res.data.allCurrency)
    })

    const filterChoices = async () => {
      setChoice(currencies.filter(item => {
        return selectedCurrencies.includes(item.name)
      }))
    }
    filterChoices()
  }, [selectedCurrencies])

  const addSelected = async () => {
    if (!selectedCurrencies.includes(selectedValue)) {
      setSelectedCurrecies([...selectedCurrencies, selectedValue])
    }
  }

  const GetList = () => {
    return (
      <View style={styles.main}>
        <Picker
            selectedValue={selectedValue}
            itemStyle={styles.choice}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Add to your list" value="initial" />
            {currencies.map((value, index) => {
              return <Picker.Item label={value.name} value={value.name} key={ value.symbol}/>
              })}
        </Picker>
        <Button
          onPress={addSelected}
          color="skyblue"
          title="Add a Currency"
          accessibilityLabel="Add a Currency"
        />
      </View>
    );
  }

  const UserCurrencies = () => {
    return (
      <>
      <View style={[styles.rowItem]}>
        <Text style={ [styles.rowDetails]}>Name</Text>
        <Text style={[styles.rowDetails, {textAlign: 'right'}]}>Price</Text>
          <Text style={[styles.rowDetails, { textAlign: 'right' }]}>24H</Text>
        </View>
      <FlatList
         data={choice}
         keyExtractor={item => item.name}
         renderItem={({ item }) => <ListItem {...item} />}
        />
    </>
    )
  }
  const RightActions = (progress, dragX, name) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0.7, 0]
    })
    return (
      <>
        <TouchableOpacity  onPress={() => deleteItem(name)}>
          <View
            style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center' }}>
            <Animated.Text
              style={{
                color: 'white',
                paddingHorizontal: 10,
                fontWeight: '600'
              }}>
              Delete
            </Animated.Text>
          </View>
        </TouchableOpacity>
      </>
    )
  }

  const ListItem = (value) => (
    <ScrollView>
    <Swipeable renderRightActions={(progress, dragX) => RightActions(progress, dragX, value.name)}>
      <View style={[styles.rowItem, { paddingVertical: 10 }]}>
          <Text style={[styles.rowDetails]}>{value.name}</Text>
          <Text style={[styles.rowDetails, {textAlign: 'right'}]}>${parseFloat(value.metrics.market_data.price_usd).toFixed(2)}</Text>
          <Text style={[styles.rowDetails, { textAlign: 'right' }, percentageChangeCheck(value)]}>{ }{parseFloat(value.metrics.market_data.percent_change_usd_last_24_hours).toFixed(2)}%</Text>
      </View>
      </Swipeable>
    </ScrollView>
  )
  const percentageChangeCheck = (value) => {
    return parseFloat(value.metrics.market_data.percent_change_usd_last_24_hours).toFixed(2) >= 0 ? { color: 'green' } : {color: 'red'}
  }

  const deleteItem = (name) => {
    const updatedData = selectedCurrencies.filter(d => d !== name)
    setSelectedCurrecies(updatedData)
   }

  return (
    <SafeAreaView style={styles.container}>
      <GetList></GetList>
      <UserCurrencies choice={choice}/>
    </SafeAreaView>
  );
}

export default CurrencyList;
