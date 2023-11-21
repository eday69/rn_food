import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);

// Yelp API credentials
// Client ID
// t0iDiQAB-f_emr9q9ZLIOQ
//
// API Key
// -kCMu8L27oFB1uqLmyoLK6FmXQ2PkABxsQspF0Z96tJu7_IgOfboG18yh-pr-yq7htcPcCI2ufl-Cb34mXPGrBmDp0caG37ItlWdaiw_lwZGXYOkb7DBV1JSAcJbZXYx

