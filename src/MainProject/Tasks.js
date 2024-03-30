import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  _View,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// import CardContent from 'react-native-paper/lib/typescript/components/Card/CardContent';
import {Card} from 'react-native-paper';
import panditji from '../assets/image/Pandit-ji.png';
import Banner from '../assets/image/Bannner_Image.jpg';
import {Image} from 'react-native-animatable';
import HomeImg from '../assets/footer_icons/HomeFooter.png';
import List from '../assets/footer_icons/List.png';
import Plus from '../assets/footer_icons/plus.png';
import Setting from '../assets/footer_icons/setting.png';

const Tasks = ({navigation}) => {
  const [data, setDate] = useState
  ([
    {
      id: 1,
      title: 'Pandit ji',
      Description1 : " Pandit ji : It is a convenient platform designed to streamline the process of booking pandits for various religious ceremonies and rituals, particularly poojas",
      Description2 : " Through this app, customers can easily find and book pandits for specific occasions such as weddings, housewarmings, festivals, and other religious events.",
      Date : "29-03-2024",
      Time: "2:24 PM",
      backgroundColor: '#87CEEB'
    },
    {
        id: 2,
        title: "Astrology :",
        Description1 : " The Astrology App is a comprehensive tool designed to provide users with personalized insights and guidance based on astrological principles.",
        Description2 : " Through this app, users can explore various aspects of astrology, including horoscopes, birth charts, compatibility analysis, and daily predictions.",
        Date : "29-03-2024",
        Time: "2:24 PM",
        backgroundColor: '#FFE4B5'
    },
    {
        id: 3,
        title: "HighFly :",
        Description1 : " It is a dynamic real estate app tailored to streamline the process of buying, selling, or renting properties.",
        Description2 : " This innovative platform offers users a seamless and intuitive experience, empowering them to make informed decisions in the real estate market.",
        Date : "29-03-2024",
        Time: "2:24 PM",
        backgroundColor: '#72A0C1',
    },
    {
        id: 4,
        title: "Mosambi :",
        Description1 : " Mosambi is a dedicated blood donation app designed to facilitate the process of blood donation and connect donors with those in need.",
        Description2 : " With Mosambi, users can easily register as blood donors, search for nearby blood donation camps or centers, and schedule appointments to donate blood.",
        Date : "29-03-2024",
        Time: "2:24 PM",
        backgroundColor: '#eec0c8',
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <View style={{margin: 15}}>
        <Text style={{fontSize: 25, fontWeight: '600', color: 'black'}}>
          Latest Tasks:
        </Text>
      </View>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        contentContianerStyle={Styles.scrollViewContainer}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <View style={Styles.cardContainer}>
          {/* <Card
            style={{
              height: 350,
              width: 315,
              backgroundColor: '#87CEEB',
              marginLeft: 20,
              marginRight: 10,
            }}>
            <View style={{flexDirection: 'row', marginTop: 0, marginLeft: 5}}>
              <Card.Content style={{borderRadius: 10}}>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: 'black',
                      marginTop: 20,
                    }}>
                    Pandit ji :
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: 'black',
                      marginTop: 20,
                    }}>
                    Pandit ji : It is a convenient platform designed to
                    streamline the process of booking pandits for various
                    religious ceremonies and rituals, particularly poojas{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: 'black',
                      marginTop: 20,
                    }}>
                    Through this app, customers can easily find and book pandits
                    for specific occasions such as weddings, housewarmings,
                    festivals, and other religious events.
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: 'black',
                      marginTop: 14,
                      alignSelf: 'flex-end',
                    }}>
                    29-03-2024
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: 'black',
                      alignSelf: 'flex-end',
                    }}>
                    2:24 PM
                  </Text>
                </View>
              </Card.Content>
            </View>
          </Card> */}

          <FlatList
            data={data}
            horizontal ={true}
            renderItem={({item}) => (
              <Card
                style={{
                  height: 350,
                  width: 315,
                  backgroundColor: item.backgroundColor ,
                  marginLeft: 20,
                  marginRight: 10,
                }}>
                <View
                  style={{flexDirection: 'row', marginTop: 0, marginLeft: 5}}>
                  <Card.Content style={{borderRadius: 10}}>
                    <View>
                      <Text
                        style={{
                          fontSize: 25,
                          fontWeight: 'bold',
                          color: 'black',
                          marginTop: 20,
                        }}>
                        {/* Pandit ji : */}
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '400',
                          color: 'black',
                          marginTop: 20,
                        }}>
                        {item.Description1}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '400',
                          color: 'black',
                          marginTop: 20,
                        }}>
                        {item.Description2}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '800',
                          color: 'black',
                          marginTop: 14,
                          alignSelf: 'flex-end',
                        }}>
                        {item.Date}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '800',
                          color: 'black',
                          alignSelf: 'flex-end',
                        }}>
                        {item.Time}
                      </Text>
                    </View>
                  </Card.Content>
                </View>
              </Card>
            )}
          />

          {/* {2- cardScreen} */}
          {/* <Card
            style={{
              height: 320,
              width: 315,
              backgroundColor: '#FFE4B5',
              marginLeft: 20,
              marginRight: 10,
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row', marginTop: 0, marginLeft: 5}}>
              <Card.Content style={{borderRadius: 10}}>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: 'black',
                      marginTop: 20,
                    }}>
                    Astrology :
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: 'black',
                      marginTop: 20,
                    }}>
                    The Astrology App is a comprehensive tool designed to
                    provide users with personalized insights and guidance based
                    on astrological principles.
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: 'black',
                      marginTop: 20,
                    }}>
                    Through this app, users can explore various aspects of
                    astrology, including horoscopes, birth charts, compatibility
                    analysis, and daily predictions.
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: 'black',
                      marginTop: 14,
                      alignSelf: 'flex-end',
                    }}>
                    29-03-2024
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: 'black',
                      alignSelf: 'flex-end',
                    }}>
                    2:24 PM
                  </Text>
                </View>
              </Card.Content>
            </View>
          </Card> */}

          {/* {3-card screen} */}
          {/* <Card
            style={{
              height: 300,
              width: 315,
              backgroundColor: '#72A0C1',
              marginLeft: 20,
              marginRight: 10,
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row', marginTop: 0, marginLeft: 5}}>
              <Card.Content style={{borderRadius: 10}}>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: 'black',
                      marginTop: 20,
                    }}>
                    HighFly :
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: 'black',
                      marginTop: 20,
                    }}>
                    It is a dynamic real estate app tailored to streamline the
                    process of buying, selling, or renting properties.
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: 'black',
                      marginTop: 20,
                    }}>
                    This innovative platform offers users a seamless and
                    intuitive experience, empowering them to make informed
                    decisions in the real estate market.
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: 'black',
                      marginTop: 14,
                      alignSelf: 'flex-end',
                    }}>
                    29-03-2024
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: 'black',
                      alignSelf: 'flex-end',
                    }}>
                    2:48 PM
                  </Text>
                </View>
              </Card.Content>
            </View>
          </Card> */}

          {/* {4-card Screen} */}

          {/* <Card
            style={{
              height: 340,
              width: 315,
              backgroundColor: '#eec0c8',
              marginLeft: 20,
              marginRight: 10,
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row', marginTop: 0, marginLeft: 5}}>
              <Card.Content style={{borderRadius: 10}}>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: 'black',
                      marginTop: 20,
                    }}>
                    Mosambi :
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: 'black',
                      marginTop: 20,
                    }}>
                    Mosambi is a dedicated blood donation app designed to
                    facilitate the process of blood donation and connect donors
                    with those in need.
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '400',
                      color: 'black',
                      marginTop: 20,
                    }}>
                    With Mosambi, users can easily register as blood donors,
                    search for nearby blood donation camps or centers, and
                    schedule appointments to donate blood.
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: 'black',
                      marginTop: 14,

                      alignSelf: 'flex-end',
                    }}>
                    29-03-2024
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '800',
                      color: 'black',

                      alignSelf: 'flex-end',
                    }}>
                    2:48 PM
                  </Text>
                </View>
              </Card.Content>
            </View>
          </Card> */}
        </View>
      </KeyboardAwareScrollView>

      <View style ={{flexDirection: "row",   marginVertical: 5, backgroundColor:"lightyellow", elevation: 5,marginHorizontal:5, paddingVertical: 5, borderRadius:30}}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
       <Image source={HomeImg} style={{height: 50, width:40, marginLeft: 30,  }}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate("Tasks")}>
       <Image  source={List} style={{height: 50, width:50,marginLeft: 30}}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate("CreateTasks")}>
       <Image source={Plus} style={{height: 50, width:50, marginLeft: 30}}/>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
       <Image source={Setting} style={{height: 50, width:50, marginLeft: 30}}/>
       </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  ButtonView: {
    borderColor: 'black',
  },

  cardContainer: {
    marginTop: 10,
    marginBottom: 1000,
    height: 500,
    width: 300,
  },
  ButtonContainer: {
    flexDirection: 'row',
    marginTop: -190,
  },
  ButtonText: {
    backgroundColor: 'blue',
    paddingTop: 10,
    color: '#fff',
    paddingRight: 10,
    textAlign: 'center',
    fontSize: 25,
    width: 100,
    height: 90,
    borderWidth: 1,
    marginLeft: 70,
    marginVertical: 220,
    borderRadius: 20,
  },

  ButtonText1: {
    backgroundColor: 'blue',
    paddingTop: 10,
    color: '#fff',
    paddingRight: 10,
    textAlign: 'center',
    fontSize: 25,
    width: 100,
    height: 90,
    borderWidth: 1,
    marginLeft: 20,
    marginVertical: 220,
    borderRadius: 20,
  },
});

export default Tasks;
