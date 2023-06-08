import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function index() {
  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    // make an API call to fetch data for the current page
    axios(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`).then(
      res => {
        console.log('DATA:', res.data);
        setData([...data, ...res.data]);
      },
    );

    // increment the page number for the next API call
    setPage(page + 1);

    __DEV__ && console.log('DATA STATE:', data);
  }

  const renderItem = ({item}: any) => {
    return (
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            padding: 10,
            borderRadius: 10,
            width: SCREEN_WIDTH - 20,

            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 4,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                fontWeight: 'bold',
                color: item.color,
                marginRight: 20,
              }}
              numberOfLines={1}>
              {item.name}
            </Text>
            <Text numberOfLines={1}>First Brewed: {item.first_brewed}</Text>
          </View>
          <Image
            resizeMode='contain'
            style={{
              width: SCREEN_WIDTH - 20,
              height: 300,
              borderRadius: 5,
              marginTop: 10,
            }}
            source={{uri: item.image_url}}
          />
        </View>
      </View>
    );
  };

  const PrimSeper = () => {
    return <View style={{paddingVertical: 5}} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={{paddingVertical: 5}}
        // keyExtractor={({item, index}: any) => index.toString()}
        onEndReached={fetchData}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={() => <PrimSeper />}
      />
    </SafeAreaView>
  );
}
