import { FC, useLayoutEffect } from 'react'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { CATEGORIES, MEALS } from '../data/data'

import MealList from '../components/mealsList/MealList'

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

  return <MealList items={displayedMeals} />
}

export default MealsOverviewScreen
