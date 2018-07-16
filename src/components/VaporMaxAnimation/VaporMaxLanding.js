// @flow
import * as React from 'react';
import { StatusBar, TouchableWithoutFeedback, View, Text, Image, StyleSheet } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions'
import { ROUTENAMES } from '../../routerConfig/Router'
import { Images } from '../../assets';

type Props = {}
type State = {}

class VaporMaxLanding extends React.Component<Props, State> {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate(ROUTENAMES.VAPOR_MAX_DETAILS)}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
              <View style={styles.headerView}>
                <Transition appear="horizontal">
                  <Text style={styles.bigText}>THE TEN</Text>
                </Transition>
                <Transition appear="horizontal">
                  <Text style={styles.smallText}>AIR VAPORMAX</Text>
                </Transition>
              </View>
            <View style={styles.centeredContent}>
              <Transition shared="circle">
                <View style={styles.circleView} />
              </Transition>
            </View>
            <Image source={Images.logo} style={styles.nikeLogo} />
            <Transition shared="shoe">
              <Image source={Images.vapor} style={styles.vaporMax} />
            </Transition>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(72,73,77)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nikeLogo: {
    width: 50,
    height: 20,
    tintColor: 'white',
    position: 'absolute',
    left: 30,
    top: 50,
  },
  vaporMax: {
    width: 500,
    height: 300,
    position: 'absolute',
    right: -140,
    transform: [{ rotate: '35deg' }],
  },
  bigText: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },
  smallText: {
    color: 'rgb(182,182,182)',
    fontWeight: 'bold',
    fontSize: 28,
  },
  headerView: {
    position: 'absolute',
    left: 50,
    right: 50,
    top: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredContent: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleView: {
    width: 230,
    height: 230,
    borderRadius: 230/2,
    backgroundColor: 'rgb(214,214,214)',
  },
})

export default VaporMaxLanding;