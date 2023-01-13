import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Meal from '../../models/meal'

interface Props {
  data: Meal['steps'] | Meal['ingredients']
}

const List: FC<Props> = ({ data }) => {
  return (
    <>
      {data.map(point => (
        <View key={point} style={styles.listItem}>
          <Text style={styles.itemText}>{point}</Text>
        </View>
      ))}
    </>
  )
}

export default List

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    padddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
})
