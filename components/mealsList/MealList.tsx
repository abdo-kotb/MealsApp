import { FC } from 'react'
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native'
import Meal from '../../models/meal'

import MealItem from './Meal.item'

const MealList: FC<{ items: Meal[] }> = ({ items }) => {
  const renderMealItem: ListRenderItem<Meal> = ({ item }) => {
    return <MealItem meal={item} imageUrl={item.imageUrl} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item: Meal) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

export default MealList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})
