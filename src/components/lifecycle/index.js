import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';

const LifeCycleFeed = () => {
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    const newPost = {
      id: posts.length.toString(),
      image: 'https://cdn.antaranews.com/cache/1200x800/2020/08/02/2020-07-06T143322Z_1594045997_CVMDIT1A68E839XA195X45EEX9B7EXF74E7847828C_RTRFIPP_4_COVER-SHOWBIZ.jpg',
      caption: 'ilhamm_mm',
    };
    setPosts([...posts, newPost]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Feed</Text>
      <Button title="Add Post" onPress={addPost} />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.postImage}
              resizeMode="cover"
            />
            <Text style={styles.captionText}>{item.caption}</Text>
            <Text style={styles.satuText}>Surprise Guys</Text>
          </View>
        )}
        contentContainerStyle={styles.feedContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default LifeCycleFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  feedContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  postContainer: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  postImage: {
    width: 150,
    height: 150,
  },
  captionText: {
    fontSize: 14,
    color: '#333',
    paddingHorizontal: 10,
    paddingBottom: 10,
    textAlign: 'center',
  },
  satuText: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
    paddingBottom: 10,
  },
});
