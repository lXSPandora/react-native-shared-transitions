// @flow
import * as React from 'react';
import { StatusBar, Dimensions, TouchableWithoutFeedback, View, Image, Text, StyleSheet } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions'
import { Images } from '../../assets/index'

const { width, height } = Dimensions.get('window');

const paperHeight: number = height / 1.8;

const boxSize: number = (width / 2) - 40;

type Props = {}
type State = {}

class VaporMaxDetails extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Image source={Images.logo} style={styles.nikeLogo} />
        <TouchableWithoutFeedback onPress={() => this.props.navigation.pop()}>
          <View style={styles.shoeWrapper}>
            <Transition shared="shoe">
              <Image source={Images.vapor} style={{
                width: 500 / 1.75,
                height: 300 / 1.75,
              }} />
            </Transition>
          </View>
        </TouchableWithoutFeedback>
        <Transition shared="circle">
          <View style={styles.paper}>
            <Transition appear="horizontal">
              <View style={styles.textContainer}>
                <Text style={styles.bigText}>THE TEN</Text>
                <Text style={styles.smallText}>VAPORMAX</Text>
              </View>
            </Transition>
              <View style={styles.galleryStack} horizontal={true} pagingEnabled={true}>
                <Transition appear="bottom" delay={true}>
                  <View style={styles.galleryItem}>
                    <Image source={Images.vaporMax1} style={{
                      width: 125,
                      height: 75,
                    }} />
                  </View>
                </Transition>
                <Transition appear="bottom" delay={true}>
                  <View style={styles.galleryItem}>
                    <Image source={Images.vaporMAx2} style={{
                      width: 125,
                      height: 75,
                    }} />
                  </View>
                </Transition>
              </View>
          </View>
        </Transition>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  galleryItem: {
    width: boxSize,
    height: boxSize,
    backgroundColor: '#ededed',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  galleryStack: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  textContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(72,73,77)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigText: {
    fontSize: 45,
    color: 'black',
    fontWeight: '800',
  },
  smallText: {
    fontSize: 18,
    color: 'grey',
    fontWeight: '800',
  },
  nikeLogo: {
    width: 50,
    height: 20,
    tintColor: 'white',
    position: 'absolute',
    left: 30,
    top: 50,
    zIndex: 100,
  },
  paper: {
    height: paperHeight,
    backgroundColor: 'rgb(214,214,214)',
    width: width,
  },
  shoeWrapper: {
    padding: 10,
    width: width,
    height: height - paperHeight,
    backgroundColor: 'rgb(72,73,77)',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default VaporMaxDetails;