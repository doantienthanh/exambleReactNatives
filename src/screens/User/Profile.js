import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.getProfile.getUserResponse);
  return (
    <View style={styles.bodyProfile}>
      <Text> {user.lastName} </Text>
      <Text>{user.email}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default Profile;
