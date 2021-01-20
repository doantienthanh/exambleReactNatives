import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { defaultColors } from '../../themes/Colors';

import { useSelector } from 'react-redux';

const UpdateUsers = () => {
  const users = useSelector((state) => state.login.loginResponse);
  const [firstName, setFirstName] = useState(users.firstName);
  const [lastName, setLastName] = useState(users.lastName);
  const [avatar, setvatar] = useState('');
  const [gender, setGender] = useState('');
  const [birthDay, setBirthDay] = useState('');
  return (
    <ScrollView style={styles.body}>
      <View style={styles.bodyUpdateUsers}>
        <View style={styles.headerUpdate}>
          <Text style={styles.txtTitle}>Update Users</Text>
        </View>
        <View style={styles.centerUpdate}>
          <TextInput style={styles.txtInput} placeholder="First name" value={firstName} />
          <TextInput style={styles.txtInput} placeholder="Last name" value={lastName} />
          <TextInput style={styles.txtInput} placeholder="Avatar" />
          <TextInput style={styles.txtInput} placeholder="Phone number" />
          <TextInput style={styles.txtInput} placeholder="Gender" />
          <TextInput style={styles.txtInput} placeholder="Birthday" />
        </View>
        <View style={styles.bottomUpdate}>
          <TouchableOpacity style={styles.btnUpdate}>
            <Text style={styles.txtUpdate}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: defaultColors.wheat,
  },
  bodyUpdateUsers: {
    width: '100%',
    height: 640,
  },
  headerUpdate: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  centerUpdate: {
    height: '55%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInput: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    borderColor: defaultColors.gray,
    marginTop: 20,
    borderRadius: 10,
  },
  bottomUpdate: {
    height: '20%',
    width: '100%',
    justifyContent: 'center',
  },
  btnUpdate: {
    marginLeft: '20%',
    width: '60%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: defaultColors.aqua,
    borderRadius: 25,
  },
  txtUpdate: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export default UpdateUsers;
