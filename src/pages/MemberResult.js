import React from 'react';
import {View, Text} from 'react-native';

function MemberResult({route}) {
  const {user} = route.params;
  return (
    <View>
      <Text>Uye Adi:{user.userName}</Text>
      <Text>Uye Yas:{user.userSurname}</Text>
      <Text>Uye E-posta:{user.userMail}</Text>
      <Text>Uye Soyadi:{user.userSurname}</Text>
      <Text>Uye Memleket:{user.userHomeTown}</Text>
    </View>
  );
}
export default MemberResult;
