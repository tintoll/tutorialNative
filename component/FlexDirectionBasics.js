import React from 'react';
import {View } from 'react-native';


export default class FlexDirectionBasics extends React.Component {
  /*
  Flexbox는 웹상의 CSS와 마찬가지로 React Native에서 동일한 방식으로 작동하지만 몇 가지 예외가 있습니다. 
  기본값은 서로 다르며 flexDirection은 행(row) 대신 열(column)이 기본값으로 설정되고 
  flex 매개 변수는 단일 숫자만 지원합니다.
  */
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  };
}
