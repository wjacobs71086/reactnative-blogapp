import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native'

const BlogPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return(
       <View>
        <Text style={styles.label}> Title </Text>
        <TextInput 
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}/>
        <Text style={styles.label}> Content </Text>
        <TextInput 
          style={styles.input}
          value={content} 
          onChangeText={(content) => setContent(content)}/>
        <Button 
          title='Save'
          onPress={() => {
            console.log('haha')
            }} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  }
});

export default BlogPostForm;
