import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { defaultColors } from '../../themes/Colors';
import { NavigationUtils } from '../../navigation';
import { useDispatch } from 'react-redux';
import SignUpActions from '../../redux/SignUpRedux/actions';

const SignUp = () => {
  const [lastname, setlastname] = useState('');
  const [firstname, setfirstname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [phone, setphone] = useState('');
  const [birthday, setbirthday] = useState('');

  const dispatch = useDispatch();
  const onRegister = () => {
    const data = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      password: password,
      phone: phone,
      birthDay: birthday,
    };
    if (
      data.firstName === '' ||
      data.lastName === '' ||
      data.email === '' ||
      data.password === '' ||
      data.phone === '' ||
      data.birthDay === ''
    ) {
      alert('You must enter all field !');
    } else {
      dispatch(SignUpActions.userSignUp(data));
    }
  };
  return (
    <ScrollView style={styles.bodyRegister}>
      <View style={styles.contentRegister}>
        <View style={styles.headerRegister}>
          <Text style={styles.txtTitle}>SIGN UP</Text>
        </View>
        <View style={styles.centerRegister}>
          <TextInput
            placeholder="Fisrt name "
            style={styles.txtInputResgister}
            onChangeText={(text) => setfirstname(text)}
          />
          <TextInput
            placeholder="Last name "
            style={styles.txtInputResgister}
            onChangeText={(text) => setlastname(text)}
          />
          <TextInput
            placeholder="Email "
            style={styles.txtInputResgister}
            onChangeText={(text) => setemail(text)}
          />
          <TextInput
            placeholder="Password "
            style={styles.txtInputResgister}
            onChangeText={(text) => setpassword(text)}
          />
          <TextInput
            placeholder="Phone number "
            style={styles.txtInputResgister}
            onChangeText={(text) => setphone(text)}
            s
          />
          <TextInput
            placeholder="Birthday "
            style={styles.txtInputResgister}
            onChangeText={(text) => setbirthday(text)}
          />
        </View>
        <View style={styles.bottomRegister}>
          <TouchableOpacity
            style={styles.btnSignUp}
            onPress={() => {
              onRegister();
            }}
          >
            <Text style={styles.txtSignUp}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnLogins}
            onPress={() => {
              NavigationUtils.startLoginContent();
            }}
          >
            <Text style={styles.txtBtnLogins}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  bodyRegister: {
    width: '100%',
    height: '100%',
    backgroundColor: defaultColors.wheat,
  },
  contentRegister: {
    width: '100%',
    height: 637,
  },
  headerRegister: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
  },
  txtTitle: {
    fontSize: 60,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  centerRegister: {
    width: '100%',
    height: '55%',
    alignItems: 'center',
  },
  txtInputResgister: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    marginTop: 15,
    borderColor: defaultColors.black,
    borderRadius: 5,
  },
  bottomRegister: {
    height: '25%',
    width: '100%',
  },
  btnSignUp: {
    width: '70%',
    backgroundColor: defaultColors.aqua,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: '15%',
  },
  txtSignUp: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  btnLogins: {
    marginLeft: '45%',
    marginTop: 30,
  },
});
