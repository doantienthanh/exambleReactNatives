import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { NavigationUtils } from '../../navigation';
import { defaultColors } from '../../themes/Colors';
const Profile = () => {
  const user = useSelector((state) => state.getProfile.getUserResponse);

  const onChangePassword = () => {
    NavigationUtils.push({
      screen: 'ChangePassword',
      passProps: { fromProfile: false },
    });
  };
  return (
    <View style={styles.bodyProfile}>
      <Text>
        Full name: {user.firstName} {user.lastName}
      </Text>
      <Text>Email: {user.email}</Text>
      <Text>Birthday: {user.birthDay}</Text>
      <TouchableOpacity style={styles.btnChangePass} onPress={() => onChangePassword()}>
        <Text>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  bodyProfile: {
    width: '90%',
    marginLeft: '10%',
  },
  btnChangePass: {
    width: '60%',
    marginLeft: '15%',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultColors.aqua,
    borderRadius: 25,
    height: 40,
  },
});
export default Profile;
