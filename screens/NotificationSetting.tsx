import React, {useContext, useEffect, useState} from 'react';
import { View, StyleSheet, Text, Dimensions, Switch, ScrollView, TouchableWithoutFeedback } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import { Switch } from 'react-native-paper';
//import ToggleSwitch from 'toggle-switch-react-native'

import {AppContext} from '../AppContext';

const Settings = ({navigation} : any) => {

    const { setNSFWOn } = useContext(AppContext);
    const { nsfwOn } = useContext(AppContext);

    const { setADon } = useContext(AppContext);
    const { ADon } = useContext(AppContext);

    const { setPremium } = useContext(AppContext);
    const { premium } = useContext(AppContext);


//explicit content switch
    const [isSwitchOn, setIsSwitchOn] = useState(nsfwOn);

    const onToggleSwitch = () => {
        if (premium === true) {
            setIsSwitchOn(!isSwitchOn); setNSFWOn(!nsfwOn);
        } else if (premium === false) {
            return;
        }
    }

//autoplay switch
    const [isAfterDarkOn, setIsAfterDarkOn] = React.useState(ADon);

    const onAfterDarkSwitch = () => {
        if (premium === true) {
            setIsAfterDarkOn(!isAfterDarkOn); setADon(!ADon);
        } else if (premium === false) {
            return;
        }
        
    }

    //subscription notifications on/off switch
    const [isSubsOn, setIsSubsOn] = React.useState(false);

    const onSubsSwitch = () => setIsSubsOn(!isSubsOn);   
    
//subscription notifications on/off switch
    const [isRecsOn, setIsRecsOn] = React.useState(false);

    const onRecsSwitch = () => setIsRecsOn(!isRecsOn);

//all notifications on/off switch
    const [isNotesOn, setIsNotesOn] = React.useState(false);

    const onNotesSwitch = () => {setIsNotesOn(!isNotesOn); setIsSubsOn(!isSubsOn); setIsRecsOn(!isRecsOn);}

    const [switchColor, setSwitchColor] = useState('gray')
    const [trackColor, setTrackColor] = useState('#363636')

    useEffect(() => {
        if (premium === true) {
            setSwitchColor('#00ffff');
            setTrackColor('#219a9ca5')
        }
    }, [premium])

    return (
        <View style={styles.container}>
        <ScrollView>
            <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 20, alignItems: 'center'}}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={{padding: 30, margin:-30}}>
                        <FontAwesome5 
                            name='chevron-left'
                            color='#fff'
                            size={20}
                        />
                    </View>
                    </TouchableWithoutFeedback>
                <Text style={styles.headertop}>
                    Settings
                </Text>
            </View>

            <View style={{ marginHorizontal: 20, marginVertical: 20}}>
                <Text style={styles.header}>
                    Playback
                </Text>
            </View>

            <View style={styles.optionslist}>

                <View style={styles.optionsitem}>
                    <View style={styles.subblock}>
                        <Text style={{fontSize: 16, color: premium === true ? '#ffffff' : 'gray'}}>
                            Block Explicit Content
                        </Text>
                        <Text style={styles.subparagraph}>
                            {premium === true ? "Turn on to block adult or explicit content" : 'You must have a premium account to use this feature.'}
                        </Text>
                    </View>
                    
                    <Switch
                        trackColor={{ false: trackColor, true: trackColor }}
                        thumbColor={isSwitchOn ? switchColor : "gray"}
                        ios_backgroundColor="cyan"
                        onValueChange={onToggleSwitch}
                        value={isSwitchOn}
                    />
                </View>

                

                <View style={styles.optionsitem}>
                    <View style={styles.subblock}>
                        <Text style={{fontSize: 16, color: premium === true ? '#ffffff' : 'gray'}}>
                            Block Erotic Content
                        </Text>
                        <Text style={styles.subparagraph}>
                            {premium === true ? 'Turn on to lock content from the After Dark genre' : 'You must have a premium account to use this feature.'}
                        </Text>
                    </View>
                    
                    <Switch
                        trackColor={{ false: trackColor, true: trackColor }}
                        thumbColor={isAfterDarkOn ? switchColor : "gray"}
                        ios_backgroundColor="cyan"
                        onValueChange={onAfterDarkSwitch}
                        value={isAfterDarkOn}
                    />
                </View>

            </View>

            {/* <View style={{ marginHorizontal: 20, marginVertical: 20}}>
                <Text style={styles.header}>
                    Notifications
                </Text>
            </View> */}

            <View style={styles.optionslist}>
                {/* <View style={styles.optionsitem}>
                    <View style={styles.subblock}>
                        <Text style={styles.paragraph}>
                            Turn Off All
                        </Text>
                        <Text style={styles.subparagraph}>
                            Select this to turn off all notifications
                        </Text>
                    </View>
                    
                    <Switch
                        trackColor={{ false: "#219a9ca5", true: "#219a9ca5" }}
                        thumbColor={isNotesOn ? "cyan" : "gray"}
                        ios_backgroundColor="cyan"
                        onValueChange={onNotesSwitch}
                        value={isNotesOn}
                    />
                </View> */}

                {/* <View style={styles.optionsitem}>
                    <View style={styles.subblock}>
                        <Text style={styles.paragraph}>
                            Subscriptions
                        </Text>
                        <Text style={styles.subparagraph}>
                            Get notified when authors you follow create a new story
                        </Text>
                    </View>
                    
                    <Switch
                        trackColor={{ false: "#219a9ca5", true: "#219a9ca5" }}
                        thumbColor={isSubsOn ? "cyan" : "gray"}
                        ios_backgroundColor="cyan"
                        onValueChange={onSubsSwitch}
                        value={isSubsOn}
                    />
                </View> */}

                {/* <View style={styles.optionsitem}>
                    <View style={styles.subblock}>
                        <Text style={styles.paragraph}>
                            Reccomendations
                        </Text>
                        <Text style={styles.subparagraph}>
                            Receive notifications about stories we think you'll like
                        </Text>
                    </View>
                    
                    <Switch
                        trackColor={{ false: "#219a9ca5", true: "#219a9ca5" }}
                        thumbColor={isRecsOn ? "cyan" : "gray"}
                        ios_backgroundColor="cyan"
                        onValueChange={onRecsSwitch}
                        value={isRecsOn}
                    />
                </View> */}
            </View>

            {/* <View style={{ marginHorizontal: 20, marginVertical: 20}}>
                <Text style={styles.header}>
                    Storage
                </Text>
            </View> */}

            {/* <View style={styles.optionslist}>
                <View style={styles.optionsitem}>
                    <View style={styles.subblock}>
                        <Text style={styles.paragraph}>
                            Clear cache
                        </Text>
                        <Text style={styles.subparagraph}>
                            This will clear the app cache. Your downloads will not be affected.
                        </Text>
                    </View>
                </View>
            </View> */}
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      backgroundColor: '#363636a5'
    },
    headertop: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginHorizontal: 40,
        marginVertical: 20,
    },
    header: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subblock: {
        width: '75%',
    },
    optionslist: {

    },
    optionsitem: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginLeft: 40,
        marginRight: 20,
        marginBottom: 30,
    },
    paragraph: {
        fontSize: 16,
        color: '#ffffff'
    },
    subparagraph: {
        fontSize: 12,
        color: '#ffffffa5'
    },
});

export default Settings;
