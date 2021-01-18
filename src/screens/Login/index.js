import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LoginActions from '../../redux/LoginRedux/actions';
import { defaultColors } from '../../themes/Colors';
import { NavigationUtils } from '../../navigation';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // Check loading
  const checkLoading = useSelector((state) => state.login.loadingLogin);
  // Login
  const onLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    if (data.email === '' || data.password === '') {
      alert('You must enter email and password !');
    } else {
      dispatch(LoginActions.userLogin(data));
    }
  };
  // Register screen
  const onSignUp = () => {
    NavigationUtils.push({
      screen: 'SignUp',
      passProps: { fromLogin: false },
    });
  };
  // Check error
  const checkError = useSelector((state) => state.login.errorLogin);
  if (checkError !== null) {
    // eslint-disable-next-line no-alert
    alert('Login failure !');
  }
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
              placeholder="Enter your email"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.viewTxtPass}>
            <TextInput
              style={styles.txtPass}
              placeholder="Enter your password"
              onChangeText={(texts) => setPassword(texts)}
            />
            <Image
              source={require('../../images/iconEyesCLose.png')}
              style={styles.imageEyeLogin}
            />
          </View>
        </View>
        <View style={styles.bottomLogin}>
          {checkLoading && <ActivityIndicator size="small" color="#0000ff" />}
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => {
              onLogin();
            }}
          >
            <Text style={styles.textBtnLogin}>Login</Text>
          </TouchableOpacity>
          <View style={styles.btnBottom}>
            <TouchableOpacity
              style={styles.btnSignup}
              onPress={() => {
                onSignUp();
              }}
            >
              <Text style={styles.txtBottom}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnForgotPass}>
              <Text style={styles.txtBottom}>Forgot password</Text>
            </TouchableOpacity>
          </View>
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
    height: 692,
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
  btnBottom: {
    flexDirection: 'row',
    marginTop: 70,
  },
  btnSignup: {
    marginLeft: 20,
  },
  btnForgotPass: {
    marginLeft: '45%',
  },
  txtBottom: {
    fontSize: 15,
  },
});

export default Login;
