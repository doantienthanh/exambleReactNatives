
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { defaultColors } from '../../themes/Colors';
import { useDispatch } from 'react-redux';
import UserTypes from '../../redux/UserRedux/actions';
const Home = () => {
  const dispatch = useDispatch();
  const onGetProfile = () => {
    dispatch(UserTypes.getUserProfile());
  };
  return (
    <View style={styles.bodyHome}>
      <Text style={styles.txtHome}>Welcome to Home</Text>
      <TouchableOpacity style={styles.btnLogout}>
        <Text style={styles.txtBtnLogout}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnLogout} onPress={() => onGetProfile()}>
        <Text style={styles.txtBtnLogout}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bodyHome: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLogout: {
    marginTop: 10,
    width: 120,
    height: 40,
    backgroundColor: defaultColors.aqua,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  txtHome: {
    fontSize: 20,
  },
  txtBtnLogout: {
    fontSize: 16,
  },
});
