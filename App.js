import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SectionScreen from './screens/SectionScreen';
import SectionMenu from './screens/SectionMenu';
import SectionEdit from './screens/SectionEdit';
import SectionDelete from './screens/SectionDelete';
import AddStudent from './screens/AddStudent';
import Login from './screens/Login';
import OverallAnalysis from './screens/OverallAnalysis';
import Profile from './screens/Profile';
import Report from './screens/Report';
import TodayAnalysis from './screens/TodayAnalysis';
import TodayAttendance from './screens/TodayAttendance';
import YearDelete from './screens/YearDelete';
import YearEdit from './screens/YearEdit';
import YesterdayAnalysis from './screens/YesterdayAnalysis';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="sectionmenu">
        <Stack.Screen name="Attendance-app" component={HomeScreen} />
        <Stack.Screen name="section" component={SectionScreen} />
        <Stack.Screen name="sectionmenu" component={SectionMenu} />
        <Stack.Screen name="sectionedit" component={SectionEdit} />
        <Stack.Screen name="sectiondelete" component={SectionDelete} />
        <Stack.Screen name="addstudent" component={AddStudent} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="overallanalysis" component={OverallAnalysis} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="report" component={Report} />
        <Stack.Screen name="todayanalysis" component={TodayAnalysis} />
        <Stack.Screen name="todayattendance" component={TodayAttendance} />
        <Stack.Screen name="yeardelete" component={YearDelete} />
        <Stack.Screen name="yearedit" component={YearEdit} />
        <Stack.Screen name="yesterdayanalysis" component={YesterdayAnalysis} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent('App', () => App);
export default App;