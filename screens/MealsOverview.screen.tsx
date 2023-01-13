import { ParamListBase, RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { FC, useLayoutEffect } from 'react'
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native'
import MealItem from '../components/Meal.item'
import { CATEGORIES, MEALS } from '../data/data'
import Meal from '../models/meal'

interface Props {
  route: RouteProp<ParamListBase>
  navigation: NativeStackNavigationProp<ParamListBase>
}

const MealsOverviewScreen: FC<Props> = ({ route, navigation }) => {
  const catId = (route.params as { categoryId: string }).categoryId

  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0
  })

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find(cat => cat.id === catId)!.title

    navigation.setOptions({
      title: catTitle,
    })
  }, [catId])

  const renderMealItem: ListRenderItem<Meal> = ({ item }) => {
    return <MealItem meal={item} imageUrl={item.imageUrl} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item: Meal) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
