import { icons } from '@/constants/icons'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className='w-[30%] flex flex-col justify-between'>
        <View>
          <Image
            source={{
              uri: poster_path ?
                `https://image.tmdb.org/t/p/w500${poster_path}` :
                `https://picsum.photos/200/300/`
            }}
            className='w-full h-52 rounded-lg'
            resizeMode='cover'
          />
          <Text className='text-sm font-bold text-white mt-2' numberOfLines={1}>{title}</Text>
        </View>
        <View>
          <View className='flex-row items-center justify-start gap-x-1'>
            <Image source={icons.star} className='size-4' />
            <Text className='text-xs text-white font-bold'>{Math.round(vote_average)}</Text>
          </View>
          <View className='flex-row items-center justify-between mt-1'>
            <Text className='text-light-300 text-xs font-semibold'>{release_date.split('-')[0]}</Text>
            {/* <Text className='text-light-300 text-xs font-semibold'>Movie</Text> */}
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

export default MovieCard