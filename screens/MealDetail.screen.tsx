import { FC, useContext, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import { MEALS } from '../data/data'
import MealDetails from '../components/MealDetails'
import SubTitle from '../components/mealDetails/SubTitle'
import List from '../components/mealDetails/List'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import IconButton from '../components/Icon.Button'
import { FavoritesContext } from '../store/context/FavouritesContext'

interface Props {
  route: RouteProp<ParamListBase>
  navigation: NativeStackNavigationProp<ParamListBase>
}

const MealDetailScreen: FC<Props> = ({ route, navigation }) => {
  const favoriteMealsCtx = useContext(FavoritesContext)

  const mealId = (route.params as { mealId: string }).mealId

  const selectedMeal = MEALS.find(meal => meal.id === mealId)

  const isMealFavorite = favoriteMealsCtx.ids.includes(mealId)

  const toggleFavoriteStatusHandler = () => {
    if (isMealFavorite) favoriteMealsCtx.removeFavorite(mealId)
    else favoriteMealsCtx.addFavorite(mealId)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={isMealFavorite ? 'star' : 'star-outline'}
          color="#ffffff"
          onPress={toggleFavoriteStatusHandler}
        />
      ),
    })
  }, [isMealFavorite])

  if (!selectedMeal) return null

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.outerListContainer}>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={selectedMeal.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 8,
    textAlign: 'center',
    color: '#ffffff',
  },
  detailText: {
    color: '#ffffff',
  },
  outerListContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
})
