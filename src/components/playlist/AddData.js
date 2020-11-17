import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Alert,
} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import lists from './PlaylistData';

const ListItem = ({name, phone, dob, sex, avatar, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={() => {
        navigation.navigate('Contact Details', {
          name: {name},
          phone: {phone},
          dob: {dob},
          sex: {sex},
          avatar: {avatar},
        });
      }}>
      <View style={styles.item}>
        <View style={styles.Item_avatar}>
          <Image
            source={avatar}
            style={{height: 80, width: 80, flex: 1, borderRadius: 50}}
          />
        </View>
        <View style={{height: '100%', width: 80, flex: 1}}>
          <View style={{flex: 2}}>
            <Text style={{textAlign: 'left', fontSize: 23, fontWeight: 'bold'}}>
              {name}
            </Text>
          </View>
          <View style={{flexDirection: 'row', flex: 1}}>
            <Text style={{flex: 5, justifyContent: 'center'}}>{phone}</Text>
            <Text
              style={{
                flex: 1,
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              {sex}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
function addContact(fName, fPhone, fDob, fSex, fAvatar) {
  let newContact = {
    id: database[database.length - 1].id + 1,
    name: fName,
    phone: fPhone,
    dob: fDob,
    sex: fSex,
    avatar: fAvatar,
  };
  database.push(newContact);
}

function ContactScreen({navigation}) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList
            data={database}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <ListItem
                navigation={navigation}
                name={item.name}
                phone={item.phone}
                dob={item.dob}
                sex={item.sex}
                avatar={item.avatar}
              />
            )}
          />
        </View>
        <TouchableHighlight
          underlayColor={'#7c7fc2'}
          onPress={() => {
            navigation.navigate('New Contact');
          }}
          style={styles.fab}>
          <Text style={styles.fabText}>+</Text>
        </TouchableHighlight>
      </SafeAreaView>
    </>
  );
}

function DetailScreen({route, navigation}) {
  const {name} = route.params.name;
  const {phone} = route.params.phone;
  const {dob} = route.params.dob;
  const {sex} = route.params.sex;
  const {avatar} = route.params.avatar;

  return (
    <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
      <View style={{width: '75%', height: '75%'}}>
        <View style={{flex: 1}}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={avatar}
              style={{width: 150, height: 150, borderRadius: 150 / 2}}
            />
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.centeredText}>Họ tên: {name}</Text>
          <Text style={styles.centeredText}>Số điện thoại: {phone}</Text>
          <Text style={styles.centeredText}>Ngày sinh: {dob}</Text>
          <Text style={styles.centeredText}>Giới tính: {sex}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginTop: 20,
              width: '100%',
            }}>
            <View style={{width: '30%'}}>
              <Button
                title="Nhắn tin"
                onPress={() => Alert.alert('Nhắn tin')}
              />
            </View>
            <View style={{width: '30%'}}>
              <Button title="Gọi" onPress={() => Alert.alert('Gọi')} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function NewContactScreen({navigation}) {
  const [name, setName] = useState('Nguyễn Trường Minh');
  const [phone, setPhone] = useState('0338 658 656');
  const [dob, setDob] = useState('25-10-2000');
  const [sex, setSex] = useState('Nam');
  const [avatar, setAvatar] = useState(require('./img/hung.png'));
  // const navigation = {navigation};
  return (
    <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.formView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <View style={{position: 'absolute', zIndex: 2, left: 20}}>
            <Text>Name</Text>
          </View>
          <View style={{width: '100%'}}>
            <TextInput
              style={styles.textInput}
              onChangeText={(val) => setName(val)}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <View style={{position: 'absolute', zIndex: 2, left: 20}}>
            <Text>Phone</Text>
          </View>
          <View style={{width: '100%'}}>
            <TextInput
              keyboardType="numeric"
              style={styles.textInput}
              onChangeText={(val) => setPhone(val)}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <View style={{position: 'absolute', zIndex: 2, left: 20}}>
            <Text>Birthday</Text>
          </View>
          <View style={{width: '100%'}}>
            <TextInput
              style={styles.textInput}
              onChangeText={(val) => setDob(val)}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <View style={{position: 'absolute', zIndex: 2, left: 20}}>
            <Text>Sex</Text>
          </View>
          <View style={{width: '100%'}}>
            <TextInput
              style={styles.textInput}
              onChangeText={(val) => setSex(val)}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <View style={{position: 'absolute', zIndex: 2, left: 20}}>
            <Text>Avatar</Text>
          </View>
          <View style={{width: '100%'}}>
            <TextInput
              style={styles.textInput}
              onChangeText={(val) => setAvatar(val)}
            />
          </View>
        </View>
      </View>
      <View>
        <Button
          title="Confirm"
          onPress={() => {
            addContact(name, phone, dob, sex, avatar);
            navigation.goBack();
            // Xem id của từng thằng để xem id đã khác nhau chưa
            // Alert.alert(database[database.length - 1].id.toString());
          }}
        />

        <Text style={{color: 'red', textAlign: 'center'}}>
          Input ảnh hiện tại chưa sử dụng được
        </Text>
      </View>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contact" component={ContactScreen} />

        <Stack.Screen name="Contact Details" component={DetailScreen} />

        <Stack.Screen name="New Contact" component={NewContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    minHeight: 100,
    padding: 15,
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  Item_avatar: {
    marginRight: 5,
    paddingHorizontal: 5,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
  centeredText: {
    textAlign: 'center',
  },
  fab: {
    backgroundColor: '#686cc3',
    borderRadius: 55 / 2,
    position: 'absolute',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    elevation: 10,
  },
  fabText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    lineHeight: 30,
  },
  textInput: {
    borderColor: 'gray',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 20,
    textAlign: 'right',
    paddingLeft: 80,
  },
  formView: {
    width: '90%',
  },
});

