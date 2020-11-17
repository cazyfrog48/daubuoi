import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { InputAutoSuggest } from 'react-native-autocomplete-search';

class Search extends React.Component {

    goToHomePage = () => {
        Actions.HomePage()
    }

    render() {
        return (
            <View style={styles.searchPage}>
                <View>
                    <TouchableOpacity onPress={this.goToHomePage}>
                        <Icon name="angle-left" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.textSearchPage}>
                    <InputAutoSuggest
                        style={{ flex: 1 }}
                        staticData={[
                            { someAttribute: 'val1', details: { id: '1', name: 'Paris', country: 'FR', continent: 'Europe' } },
                            { someAttribute: 'val2', details: { id: '2', name: 'Pattanduru', country: 'PA', continent: 'South America' } },
                            { someAttribute: 'val3', details: { id: '3', name: 'Para', country: 'PA', continent: 'South America' } },
                            { someAttribute: 'val4', details: { id: '4', name: 'London', country: 'UK', continent: 'Europe' } },
                            { someAttribute: 'val5', details: { id: '5', name: 'New York', country: 'US', continent: 'North America' } },
                            { someAttribute: 'val6', details: { id: '6', name: 'Berlin', country: 'DE', continent: 'Europe' } },
                        ]}
                        itemFormat={{ id: 'details.id', name: 'details.name', tags: ['details.continent', 'details.country'] }}
                    />
                    <Icon name="microphone" size={20} color="#EEE" />
                </View>
                <View>
                    <Icon name="search" size={30} color="white" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchPage: {
        flexDirection: "row",
        backgroundColor: "#33adff",
        justifyContent: "space-between",
        padding: 5
    },
    textSearchPage: {
        flexDirection: "row",
        backgroundColor: "white",
        minWidth: 300
    }
})

export default Search;