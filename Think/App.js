//RN中没有jsx，使用.js作为组件的后缀
import React from 'react'

// 引入第三方组件库
import { NativeBaseProvider, Text } from 'native-base'

//引入导航控制器的相关文件
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 引入tabbar
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//引入导航文件
import Home from "./page/tabbars/Home"
import My from "./page/tabbars/My"
import Scenario from "./page/tabbars/Scenario"
import Management from "./page/tabbars/Management"
import TvControl from './page/TvControl';
import AirControl from "./page/AirControl"
import Enter from "./page/Enter"
import Enroll from "./page/Enroll"
import Modify from "./page/Modify"
import Setting from "./page/Setting"


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabBar = () => {
    return <Tab.Navigator
        screenOptions={({ route }) => ({
            // 配置图标
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused
                        ? 'home'
                        : 'home-outline';
                } else if (route.name === 'Management') {
                    iconName = focused ? 'card-search' : 'card-search-outline';
                } else if (route.name === 'Scenario') {
                    iconName = focused ? 'curtains-closed' : 'curtains';

                } else {
                    iconName = focused ? 'account' : 'account-outline';
                }
                return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#22d3ee',
            tabBarInactiveTintColor: '#a3a3a3',
            //隐藏TabNavigator自带的导航条
            headerShown: false
        })}>
        <Tab.Screen name="Home" component={Home} options={{ title: "首页" }} />
        <Tab.Screen name="Management" component={Management} options={{ title: "设备添加" }} />
        <Tab.Screen name="Scenario" component={Scenario} options={{ title: "场景" }} />
        <Tab.Screen name="My" component={My} options={{ title: "我的" }} />
    </Tab.Navigator >
}

// 定义函数组件
const App = () => {
    return <NativeBaseProvider>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Enter'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#22d3ee',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: "600",
                        fontSize: 16
                    },
                    headerTitleAlign: 'center'
                }}>
                <Stack.Screen name='TabBar' component={TabBar}
                    options={({ route }) => ({
                        headerTitle: () => {
                            const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
                            switch (routeName) {
                                case 'Home':
                                    return <Text color="white" fontWeight="600" fontSize="md">智享生活-首页</Text>;
                                case 'Management':
                                    return <Text color="white" fontWeight="600" fontSize="md">智享生活-设备添加</Text>;
                                case 'Scenario':
                                    return <Text color="white" fontWeight="600" fontSize="md">智享生活-场景中心</Text>;
                                case 'My':
                                    return <Text color="white" fontWeight="600" fontSize="md">智享生活-用户中心</Text>;
                            }
                        },
                    })}>
                </Stack.Screen>
                <Stack.Screen name='TvControl' component={TvControl} options={{ title: "智享生活—电视遥控" }}></Stack.Screen>
                <Stack.Screen name='AirControl' component={AirControl} options={{ title: "智享生活—空调遥控" }}></Stack.Screen>
                <Stack.Screen name='Enroll' component={Enroll} options={{ title: "智享生活—注册" }}></Stack.Screen>
                <Stack.Screen name='Enter' component={Enter} options={{ title: "智享生活—登录" }}></Stack.Screen>
                <Stack.Screen name='Modify' component={Modify} options={{ title: "智享生活—信息修改" }}></Stack.Screen>
                <Stack.Screen name='Setting' component={Setting} options={{ title: "智享生活—设置" }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
}

export default App;