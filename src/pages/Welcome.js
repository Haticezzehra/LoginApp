import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/Button/Button';
const Welcome = ({navigation}) => {
  function goToMemberSign() {
    navigation.navigate('MemberSign');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Kebap Fitnes Salonu</Text>
      <Button text="Uye Kaydi Olustur." onPress={goToMemberSign} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default Welcome;
