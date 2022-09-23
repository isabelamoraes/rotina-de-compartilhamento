import dynamicLinks, {
  FirebaseDynamicLinksTypes,
} from '@react-native-firebase/dynamic-links';
import React, { useEffect } from 'react';
import { Linking } from 'react-native';

export const DynamicLinksContext = React.createContext({});

export const DynamicLinksProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const handleDynamicLink = async (
    link: FirebaseDynamicLinksTypes.DynamicLink | null,
  ) => {
    const URL = link?.url.split('/__/')[1];

    if (URL) {
      Linking.openURL(`rotinacompartilhamento://rotinacompartilhamento/${URL}`);
    }
  };

  useEffect(() => dynamicLinks().onLink(handleDynamicLink), []);
  useEffect(() => {
    dynamicLinks().getInitialLink().then(handleDynamicLink);
  }, []);

  return (
    <DynamicLinksContext.Provider value={{}}>
      {children}
    </DynamicLinksContext.Provider>
  );
};
