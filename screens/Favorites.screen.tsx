import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import MealList from '../components/mealsList/MealList'
// import { FavoritesContext } from '../store/context/FavouritesContext'
import { MEALS } from '../data/data'
import { RootState } from '../store/redux/store'

const FavoritesScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext)
  const favoriteMealsIds = useSelector(
    (state: RootState) => state.favoriteMeals.ids
  )

  const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id))

  if (!favoriteMeals.length)
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You did not bookmark any meals yet!</Text>
      </View>
    )

  return <MealList items={favoriteMeals} />
}

export default FavoritesScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
})
