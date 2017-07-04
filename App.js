import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import SectionListBasics from './component/SectionListBasics';

export default class App extends React.Component {
  render() {
    
    /* 
    let pic = {
      uri : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

      고정 치수() width : 50, height: 50, backgroundColor : 'powderblue') 와같이 설정하는 것은
      화면 크기에 관계없이 항상 정확히 동일한 크기로 렌더링해야 하는 컴포넌트에 일반적입니다. 

      유연한 치수
      컴포넌트의 스타일에서 flex를 사용하여 사용 가능한 공간에 따라 컴포넌트를 동적으로 확장 및 축소시킬 수 있습니다. 
      일반적으로 ‘flex: 1’을 사용하면 컴포넌트에 사용 가능한 공간을 모두 채우고 
      같은 부모를 가진 각 컴포넌트에 균등하게 공유할 수 있습니다. 주어진 flex 값이 클수록 
      다른 컴포넌트에 비해 해당 컴포넌트가 차지하는 공간의 비율이 높아집니다.
    */

    /*
          <Image source={pic} style={{width: 193, height: 110}} />
          <Text>props 사용</Text>
          <Greeting name="Rexxar" />
          <Greeting name="Jaina" />
          <Greeting name="valeera" />

          <Text>state 사용</Text>
          <Blink text="I love to blink" />
          <Blink text="Yes blinking is so great" />
          <Blink text="Why did they ever take this out of HTML" />

          <Text>고정 치수</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width : 50, height: 50, backgroundColor : 'powderblue'}} />
            <View style={{width : 100, height: 100, backgroundColor : 'skyblue'}} />
            <View style={{width : 150, height: 150, backgroundColor : 'steelblue'}} />
          </View>
          // 유연한 치수
          <View style={{flex:1}}>
            <View style={{flex:1, backgroundColor : 'powderblue'}} />
            <View style={{flex:2, backgroundColor : 'skyblue'}} />
            <View style={{flex:3, backgroundColor : 'steelblue'}} />
          </View> 
    */

    return (                  
      <SectionListBasics />      
    );
  }
}


class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showText : true};
    /*
    setInterval(()=>{
      this.setState( previousState => {
        return {showText : !previousState.showText };
      });
    }, 1000 );
    */

  }
  
  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={styles.bigBlue}>{display}</Text>
    );
  }
}

class Greeting extends React.Component {
  render() {
    return (
      <Text style={styles.red}>Hello {this.props.name} </Text>
    );
  }
}


// 스타일 생성 일반적인 CSS에서와 다르게 camelCase형태로 사용해야한다.
// React Native의 모든 치수는 단위가 없으며 밀도와 무관한 픽셀을 나타냅니다.
const styles = StyleSheet.create({
  bigBlue : {
    color : 'blue',
    fontWeight : 'bold',
    fontSize : 30
  },
  red : {
    color : 'red'
  }
});
