import React, { useEffect, useState } from 'react';
import { Button, Platform } from 'react-native';
import * as Device from 'expo-device';

import {
    AdMobRewarded,
    setTestDeviceIDAsync,
  } from 'expo-ads-admob';

  const testID = Platform.select({
    // https://developers.google.com/admob/ios/test-ads
    ios: 'ca-app-pub-3940256099942544/1712485313',
    // https://developers.google.com/admob/android/test-ads
    android: 'ca-app-pub-3940256099942544/5224354917',
  });

  const productionID = Platform.select({
    // https://developers.google.com/admob/ios/test-ads
    ios: 'ca-app-pub-8042132670790474/5004534539',
    // https://developers.google.com/admob/android/test-ads
    //android: 'ca-app-pub-8042132670790474/6243811623',
    android: 'ca-app-pub-8042132670790474/9512053895'
  });
    // Is a real device and running in production.
    const adUnitID = Device.isDevice && !__DEV__ ? productionID : testID;


const PreStoryAd = async () => {

  //const [complete, setComplete] = useState(false);

    AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad', () => {
      console.log('FailedToLoad');
      //setComplete(true);
    }
    );
    
    AdMobRewarded.addEventListener('rewardedVideoDidFailToPresent', () => {
      console.log('FailedToLoad');
      //setComplete(true);
    }
    );
    
    AdMobRewarded.addEventListener('rewardedVideoDidDismiss', () => {
      console.log('Closed');
      //setComplete(true);
      });

// Display a rewarded ad
await AdMobRewarded.setAdUnitID(adUnitID); // Test ID, Replace with your-admob-unit-id
await AdMobRewarded.requestAdAsync();
await AdMobRewarded.showAdAsync();


}

export default PreStoryAd;