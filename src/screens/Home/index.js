import { fromPairs } from 'lodash';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { defaultColors } from '../../themes/Colors';
import { useDispatch } from 'react-redux';
import {} from '../../redux/LoginRedux/actions';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.bodyHome}>
      <Text style={styles.txtHome}>Welcome to Home</Text>
      <TouchableOpacity style={styles.btnLogout}>
        <Text style={styles.txtBtnLogout}>Logout</Text>
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
