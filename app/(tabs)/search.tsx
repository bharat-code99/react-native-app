import MovieCard from '@/components/MovieCard';
import { images } from '@/constants/images';
import useFetch from '@/hooks/useFetch';
import { fetchMovies } from '@/services/api';
import { useRouter } from 'expo-router';
import { FlatList, Image, View } from 'react-native';

const Search = () => {

  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError
  } = useFetch(() => fetchMovies({ query: "" }), true)

  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode='cover' />
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className='px-5'
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'center',
          gap: 15
        }}
      />
    </View>
  )
}

export default Search