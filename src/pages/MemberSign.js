import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import MemberResult from './MemberResult';

const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userSurName, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userHomeTown, setUserHomeTown] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurName || !userAge || !userMail || !userHomeTown) {
      Alert.alert('Bilgiler boş bırakılamaz');
    }
    const user = {
      userName,
      userAge,
      userSurName,
      userMail,
      userHomeTown,
    };
    navigation.navigate('MemberResult', {user});
  }
  return (
    <View>
      <Text>Member Sign</Text>
      <Input
        label="Uye Adi:"
        placeholder="Uye ismini giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Uye Soyadi:"
        placeholder="Uye soyismini giriniz..."
        onChangeText={setUserSurname}
      />
      <Input
        label="Uye Yas:"
        placeholder="Uye yaşını giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label="Uye E-posta :"
        placeholder="Uye e posta adresini giriniz..."
        onChangeText={setUserMail}
      />
      <Input
        label="Uye Memleket"
        placeholder="Uye memleketini giriniz..."
        onChangeText={setUserHomeTown}
      />
      <Button text="Kaydi Tamamla" onPress={handleSubmit} />
    </View>
  );
};
export default MemberSign;
