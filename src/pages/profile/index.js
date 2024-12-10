import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Zayn_Wiki_%28cropped%29.jpg/640px-Zayn_Wiki_%28cropped%29.jpg', 
        }}
        style={styles.profileImage}
      />
      <Text style={styles.nameText}>ILHAM</Text>
      <View style={styles.counterContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>2</Text>
          <Text style={styles.labelText}>Posts</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>1K</Text>
          <Text style={styles.labelText}>Followers</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>500</Text>
          <Text style={styles.labelText}>Following</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#007bff',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  counterContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  numberText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#007bff',
  },
  labelText: {
    color: '#666',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
  },
  editButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 25,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
