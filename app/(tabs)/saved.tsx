import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Saved = () => {
  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <Text className='text-4xl font-semibold text-gray-900'>Saved</Text>
    </SafeAreaView>
  )
}

export default Saved