import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { defaultColors } from '../../themes/Colors';
import UserTypes from '../../redux/UserRedux/actions';
const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const dispatch = useDispatch();

  const onChangePassword = () => {
    const dataPass = {
      newPassword: newPassword,
      password: password,
    };
    if (dataPass.password === '' || dataPass.newPassword === '') {
      // eslint-disable-next-line no-alert
      alert('You must enter all fields!');
    } else {
      dispatch(UserTypes.userChangePassword(dataPass));
    }
  };
  return (
    <ScrollView style={styles.bodyLogin}>
      <View style={styles.contenLogin}>
        <View style={styles.headerLogin}>
          <Image source={require('../../images/itagramLogin.png')} style={styles.imageHeadLogin} />
        </View>
        <View style={styles.centerLogin}>
          <View style={styles.viewTxtEmail}>
            <TextInput
              style={styles.txtEmail}
              placeholder="Enter your password"
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.viewTxtPass}>
            <TextInput
              style={styles.txtPass}
              placeholder="Enter new password"
              onChangeText={(text) => setNewPassword(text)}
            />
          </View>
        </View>
        <View style={styles.bottomLogin}>
          <TouchableOpacity style={styles.btnLogin} onPress={() => onChangePassword()}>
            <Text style={styles.textBtnLogin}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  bodyLogin: {
    width: '100%',
    height: '100%',
    backgroundColor: defaultColors.wheat,
  },
  contenLogin: {
    width: '100%',
    height: 635,
  },
  headerLogin: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHeadLogin: {
    width: 250,
    height: 250,
  },
  centerLogin: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
  },
  viewTxtEmail: {
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
  },
  viewTxtPass: {
    width: '100%',
  },
  txtEmail: {
    width: '70%',
    height: 50,
    borderBottomWidth: 1,
    borderColor: defaultColors.red,
  },
  txtPass: {
    width: '70%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: defaultColors.red,
    marginTop: 20,
    marginLeft: '15%',
  },
  bottomLogin: {
    height: '20%',
    width: '100%',
  },
  imageEyeLogin: {
    width: 25,
    height: 25,
    position: 'absolute',
    marginTop: 30,
    marginLeft: 275,
  },
  btnLogin: {
    width: '75%',
    height: 40,
    backgroundColor: defaultColors.aqua,
    borderRadius: 20,
    justifyContent: 'center',
    marginLeft: '12.5%',
    marginTop: 20,
  },
  textBtnLogin: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default ChangePassword;
