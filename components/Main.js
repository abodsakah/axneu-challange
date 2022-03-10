import React, {Component} from 'react'
import { Image } from 'react-native';
import {
    ScrollView,
    Text,
  View,
    Button
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';


const Main = ({navigation}) => {

  const Spacer = () => {
    return <View style={{height: 100}} />;
  };
    
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ScrollView>
      <Image source={require('./static/images/img1.jpg')} style={styles.headerImage} />
      <View style={styles.postInfo}>
          <Text style={styles.lightText}>
              Date: 2022/03/03
          </Text>
          <Text style={styles.lightText}>
            By: Abdulrahman Sakah
          </Text>
      </View>
      <Text style={styles.title}>
        What a wonderful world!
      </Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id urna metus. Sed ultrices aliquam enim, eu gravida nulla gravida quis. Praesent accumsan lacus quam, sed convallis eros ullamcorper vel. Ut velit erat, scelerisque sit amet venenatis ut, blandit sed orci. Maecenas ac risus in lectus euismod elementum eget ut est. Curabitur malesuada nunc dolor, non semper metus tempus vel. Nunc venenatis augue sed eros tempor, non gravida metus mollis. Aliquam accumsan semper mi, vitae efficitur felis commodo vel. Donec fermentum, mi eget luctus volutpat, ligula leo mattis urna, et maximus metus velit vitae eros. Ut laoreet consectetur commodo. Vestibulum eu gravida nisi, vel blandit ante. Cras placerat turpis magna, at congue purus laoreet ultrices. Curabitur ipsum massa, tincidunt sollicitudin risus sit amet, bibendum tempor nunc. Morbi nunc ligula, laoreet sit amet scelerisque at, pharetra quis nunc. Donec blandit nulla in diam viverra aliquet. Nam nec elit eu diam finibus faucibus ac sit amet dui.
        {'\n'}
        {'\n'}
        Quisque ut mauris eros. Mauris non purus ac dui finibus tincidunt a sed sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer molestie odio id tortor ornare efficitur. Maecenas vehicula molestie lacus a tincidunt. Nulla ultrices nisi non orci commodo, at tincidunt lacus vestibulum. Donec eleifend, dolor sit amet egestas mollis, sem orci congue lorem, in rutrum nunc tortor at magna. Proin at gravida ligula. Nullam at congue nisi. Aliquam lorem neque, bibendum auctor mi at, congue interdum enim. Maecenas et tortor sem. Donec rhoncus odio id nisl ultricies facilisis. Morbi sapien ex, sagittis sit amet arcu nec, semper dictum diam. Integer lorem ipsum, tempor non orci suscipit, bibendum ornare magna.
        {'\n'}
      </Text>

      <Image source={require('./static/images/img2.jpg')} style={styles.headerImage} />
      

      <Text style={styles.text}>
      {'\n'}

        Praesent lacinia risus sit amet mi maximus iaculis. Nullam tincidunt convallis volutpat. Donec porttitor in nunc a luctus. Ut ac volutpat sem. Vestibulum porttitor ex eget molestie feugiat. Nullam dapibus, purus facilisis viverra mattis, tortor nibh mattis lacus, in mattis ipsum odio eu augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque rutrum ante quis magna aliquam gravida. Curabitur non hendrerit lectus. Nullam non ante velit. In ac congue elit, ac hendrerit orci.
        {'\n'}
        {'\n'}

        Sed facilisis eros purus, sed pulvinar odio feugiat non. Aliquam erat volutpat. Integer tempus dui ac suscipit faucibus. Morbi placerat consequat risus vel eleifend. Cras at accumsan turpis. Quisque eu bibendum nibh. Praesent vitae ipsum tincidunt, ornare mauris ut, laoreet nisl. Vivamus sit amet elit eget mauris eleifend aliquam convallis a nisl. Proin vel orci mollis lectus facilisis molestie id sed libero.
        {'\n'}
        {'\n'}

        Suspendisse vitae tellus at massa auctor maximus. Maecenas placerat mi ut lacus pharetra tincidunt. Sed quis dolor mattis, luctus dui et, molestie nibh. Nunc faucibus metus non dui ornare, vel efficitur nunc sodales. Phasellus vulputate pharetra consectetur. Sed luctus finibus est. Integer elementum ornare velit, tempor porta lorem. Integer quis est enim. Donec tempor hendrerit accumsan. Sed et eros vel felis commodo ullamcorper. Nullam justo leo, convallis semper blandit vel, pulvinar ut enim. Suspendisse scelerisque accumsan dui, et laoreet est dictum vitae.
      </Text>

       <Spacer />
      </ScrollView>
      </SafeAreaView>
  )
}

export default Main