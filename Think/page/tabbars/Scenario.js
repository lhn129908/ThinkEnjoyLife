//RN中没有jsx，使用.js作为组件的后缀
import React from 'react'

import { View, useWindowDimensions } from 'react-native';
// 引入第三方组件库
import { NativeBaseProvider, VStack, Center, Icon, Heading, Fab, Box, Pressable } from "native-base"
import { TabView, SceneMap } from 'react-native-tab-view';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import AntDesign from "react-native-vector-icons/AntDesign"
const FirstRoute = () => (
    <View style={{ flex: 1 }}>
        <VStack mt="20px" space={3} alignItems="center">
            <Pressable h="80rpx" bg="info.200" rounded="md" shadow={3} onPress={
                ()=>alert("回家场景已开启")
            }>
                <Center display="flex" flexDirection="row" w="98%" h="100%">
                    <Icon
                        flex="2"
                        as={Ionicons}
                        name="home-outline"
                        color="white"
                        size="xl"
                        textAlign="center"
                    />
                    <Heading flex="3" color="white">我回家了</Heading>
                </Center>
            </Pressable>
            <Pressable h="80rpx" bg="info.300" rounded="md" shadow={3} onPress={
                ()=>alert("睡眠场景已开启")
            }>
                <Center display="flex" flexDirection="row" w="98%" h="100%">
                    <Icon
                        flex="2"
                        as={MaterialCommunityIcons}
                        name="power-sleep"
                        color="white"
                        size="xl"
                        textAlign="center"
                    />
                    <Heading flex="3" color="white">我要睡觉了</Heading>
                </Center>
            </Pressable>
            <Pressable h="80rpx" bg="info.400" rounded="md" shadow={3} onPress={
                ()=>alert("离家场景已开启")
            }>
                <Center display="flex" flexDirection="row" w="98%" h="100%">
                    <Icon
                        flex="2"
                        as={FontAwesome5}
                        name="door-open"
                        color="white"
                        size="xl"
                        textAlign="center"
                    />
                    <Heading flex="3" color="white">我出门了</Heading>
                </Center>
            </Pressable>
        </VStack>
    </View>
);

const SecondRoute = () => (
    <View style={{ flex: 1 }} >
        <Center>
            <Box mt="20px" height="200" w="90%" shadow="8" rounded="lg" _dark={{
                bg: "info.400"
            }} _light={{
                bg: "info.400"
            }}>
                <Center mt="50rpx" _text={{ fontSize: "xl", color: "white" }}>#添加我的自定义场景</Center>
                <Fab renderInPortal={false} bgColor="info.600" shadow={3} size="md" icon={<Icon color="white" as={AntDesign} name="plus" size="md" />} />
            </Box>
        </Center>
    </View>
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});
// 定义函数组件
const Scenario = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: '推荐' },
        { key: 'second', title: '自定义' },
    ]);
    return <NativeBaseProvider>
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    </NativeBaseProvider>
}

export default Scenario;