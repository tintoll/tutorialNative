import React from 'react';
import { View } from 'react-native';

export default class JustifyContentBasics extends React.Component{
  render(){
    return(
      /*
       justifyContent를 추가하면, 주축(primary axis)에 따른 자식의 배포(distribution)가 결정됩니다. 
       자식들이 시작(start), 중앙(the center), 끝(the end) 또는 균등한(spaced) 간격으로 배포되어야 합니까? 
       사용 가능한 옵션은 flex-start, center, flex-end, space-around, space-between 입니다.

       alignItems를 추가하면 보조축(secondary axis)을 따라 자식 정렬을 결정합니다
       (기본 축이 row면 보조 요소가 column, 혹은 그 반대). 
       자식들은 시작, 중심, 끝, 또는 가득차게 늘이기(stretched to fill) 위해 정렬되어야 합니까? 
       사용 가능한 옵션은 flex-start, center, flex-end 및 stretch입니다.
      */ 
      
      <View style={{flex : 1,
                  flexDirection : 'column',
                  justifyContent : 'center',
                  alignItems : 'stretch'
                }}>
         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
         <View style={{height: 50, backgroundColor: 'skyblue'}} />
         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />       
      </View>
    );
  }
}