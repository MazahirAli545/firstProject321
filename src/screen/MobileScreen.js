/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  Pressable,
  Keyboard,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Images
import img_mobile from '../assets/image/mobile.png';
import ic_shape from '../assets/image/shape.png';
import ic_arrow from '../assets/image/ic_targetArrow.png';
import ic_rightArrow from '../assets/image/ic_rightArrow.png';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale, verticalScale} from '../components/Scaling';
// import {SafeAreaView} from 'react-native-safe-area-context';

const {width, height} = Dimensions.get('window');

const MobileScreen = ({navigation}) => {
  const [loader, setLoader] = useState(true);
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const inset = useSafeAreaInsets();


  return (
    <Pressable
      style={[styles.container, {paddingTop: inset.top}]}
      onPress={() => Keyboard.dismiss()}>
      {/* {loader && (
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            width: wp(100),
            height: hp(100),
            backgroundColor: 'rgba(255,255,255, .5)',
          }}>
          <ActivityIndicator color="#000080" size="large" />
        </View>
      )} */}
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        // extraHeight={50}
        bounces={false}
        contentContainerStyle={styles.scrollviewContainer}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Image source={img_mobile} style={styles.mobile} resizeMode="contain" />

      

        <View style={styles.homeContainer}>
          <ImageBackground
            source={ic_shape}
            resizeMode="cover"
            style={[
              styles.shapeStyle,
              // {left: 10},
              // os === 'ios' && {top: verticalScale(-35)},
            ]}>
            <View style={styles.ImageBackgroundHomeContainer}>
              <View style={styles.detailContainer}>
                <Text style={styles.detailText}>We want to know you!</Text>
                <Text style={styles.detailText2}>
                  Enter Your{`\n`}Mobile Number Here!
                </Text>
                <Image source={ic_arrow} style={styles.arrowStyle} />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  testID="mobileInput"
                  placeholder="Enter Mobile No."
                  placeholderTextColor="#888"
                  style={styles.mobileInput}
                  // maxLength={10}
                  keyboardType="phone-pad"
                  // onChangeText={handleMobileNo}
                  value={mobile}
                  // onFocus={getNumber}
                  textContentType="telephoneNumber"
                  autoComplete="tel"
                />
                {error === 'empty' && (
                  <Text style={styles.errorText}>
                    Please enter mobile number
                  </Text>
                )}
                {error === 'invalid' && (
                  <Text style={styles.errorText}>
                    Please enter valid mobile number
                  </Text>
                )}
              </View>

              <TouchableOpacity
                testID="nextButton"
                onPress={()=> console.warn('hii')}
                style={styles.nextButton}>
                <Text style={styles.nextText}>Next</Text>
                <Image source={ic_rightArrow} style={styles.nextIcon} />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAwareScrollView>
    </Pressable>
  );
};

export default MobileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    backgroundColor: '#fff',
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  scrollviewContainer: {
    flex: 1,
  },
  mobile: {
    height: verticalScale(7 * 45.1),
    aspectRatio: 1 / 1,
    alignSelf: 'center',
  },
  detailContainer: {
    right: scale(3.6 * -12),
    // bottom: verticalScal7(7*-8),
    top: verticalScale(7 * 4),
  },
  detailText: {
    fontSize: verticalScale(7 * 3.2),
    color: '#777',
    fontFamily: 'Roboto-Regular',
  },
  shapeStyle: {
    height: verticalScale(7 * 47),
    width: width,
  },
  ImageBackgroundHomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    borderColor: 'red',
    paddingRight: scale(20),
    top: -20,
  },
  detailText2: {
    fontSize: scale(3.6 * 6),
    marginTop: verticalScale(7 * 3.2),
    fontFamily: 'Roboto-Bold',
  },
  arrowStyle: {
    width: scale(3.6 * 35),
    height: verticalScale(7 * 13),
    right: scale(3.6 * -35),
    transform: [{rotate: '-30deg'}],
  },
  inputContainer: {
    backgroundColor: '#fff',
    height: verticalScale(7 * 5),
    width: scale(3.6 * 60),
    borderRadius: verticalScale(7 * 0.8),
    paddingLeft: scale(3.6 * 2),
    borderWidth: 1,
    marginTop: verticalScale(7 * 6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  mobileInput: {
    flex: 1,
    fontSize: scale(3.6 * 4),
    height: verticalScale(7 * 5.8),
    color: '#000',
    fontFamily: 'Roboto-Regular',
    paddingVertical: 0,
  },
  errorText: {
    color: 'red',
    fontSize: scale(3.6 * 2.8),
    fontFamily: 'Roboto-Bold',
    position: 'absolute',
    bottom: scale(3.6 * -4),
  },
  nextButton: {
    backgroundColor: '#F6CE4B',
    width: scale(3.6 * 30),
    height: verticalScale(7 * 4.8),
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: verticalScale(7 * 4),
    marginBottom: verticalScale(7 * 7),
  },
  nextText: {
    fontSize: scale(3.6 * 4.5),
    fontFamily: 'Roboto-Bold',
  },
  nextIcon: {
    width: scale(3.6 * 7),
    aspectRatio: 1 / 1,
  },
});
