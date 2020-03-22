import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';


const ShowScreen = ({navigation}) => {
  const { state } = useContext(Context);
  console.log(' in the showScreen', navigation.getParam('id') );
  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () =>{ 
     return (
        <TouchableOpacity 
          onPress={() => {
            return navigation.navigate('Edit', { id: navigation.getParam('id')})}}
          >
          <Feather name='edit' size={30}/>
        </TouchableOpacity>
     )}
  }
}

const styles = StyleSheet.create({
  
});

export default ShowScreen;
