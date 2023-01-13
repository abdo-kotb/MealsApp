import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native'
import React, { FC } from 'react'
import Meal from '../models/meal'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import MealDetails from './MealDetails'

interface Props {
  meal: Meal
  imageUrl: Meal['imageUrl']
}

type NavigationProps = NativeStackNavigationProp<ParamListBase>

const MealItem: FC<Props> = ({ meal, imageUrl }) => {
  const navigation = useNavigation<NavigationProps>()

  const selectMealItemHandler = () => {
    navigation.navigate('MealDetail', {
      mealId: meal.id,
    })
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={selectMealItemHandler}
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          pressed && Platform.OS === 'ios' && styles.buttonPressed,
        ]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{meal.title}</Text>
          </View>
          <MealDetails
            duration={meal.duration}
            complexity={meal.complexity}
            affordability={meal.affordability}
          />
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
})
