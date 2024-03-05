//RN中没有jsx，使用.js作为组件的后缀
import React from 'react'

// 引入第三方组件库
import {
    NativeBaseProvider,
    Button,
    FlatList,
    HStack,
    VStack,
    Text,
    Spacer,
    Box,
    Flex,
    Switch,
    Slider,
    Heading,
    ScrollView,
} from "native-base"
import Swiper from 'react-native-swiper'
import { Image } from 'react-native-svg';

const data = [
    {
        id: "01",
        fullName: "室内温度",
        timeStamp: "10℃",
        recentText: "正常",
    },
    {
        id: "02",
        fullName: "湿度",
        timeStamp: "80%",
        recentText: "湿度较高",
    },
    {
        id: "03",
        fullName: "二氧化碳",
        timeStamp: "10.2%",
        recentText: "正常",
    },
    {
        id: "04",
        fullName: "PM2.5",
        timeStamp: "19",
        recentText: "正常",
    },
    {
        id: "05",
        fullName: "气压",
        timeStamp: "1023hPa",
        recentText: "正常",
    },
];

// 定义函数组件
const Home = ({ navigation }) => {
    return <NativeBaseProvider>
        <ScrollView>
            <Swiper height={150} loop={true} autoplay={true} autoplayTimeout={3} showsButtons={false}>
                <Image width="100%" source={{
                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                }} alt="1"/>
                <Image width="100%" source={{
                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                }} alt="2"/>
                <Image width="100%" source={{
                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                }} alt="3"/>
                <Image width="100%" source={{
                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                }} alt="4"/>
            </Swiper>
            <Heading mt="20rpx" ml="10rpx" fontSize="md" color="gray.600" fontWeight="400">遥控器</Heading>
            <Flex direction='row'>
                <Button variant="outline" flex="1" h="50rpx" colorScheme="info" marginTop="10rpx" onPress={() => navigation.navigate("TvControl")}>电视遥控器</Button>
                <Button variant="outline" flex="1" h="50rpx" colorScheme="info" marginTop="10rpx" onPress={() => navigation.navigate("AirControl")}>空调遥控器</Button>
            </Flex>
            <Heading mt="20rpx" ml="10rpx" fontSize="md" color="gray.600" fontWeight="400">室内环境数据</Heading>
            <Box mt="20rpx">
                <FlatList data={data} renderItem={({
                    item
                }) => <Box borderBottomWidth="1" _dark={{
                    borderColor: "gray.600"
                }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                        <HStack space={3} justifyContent="space-between">
                            <VStack>
                                <Text _dark={{
                                    color: "warmGray.50"
                                }} color="info.300" bold>
                                    {item.fullName}
                                </Text>
                                <Text color="coolGray.500" _dark={{
                                    color: "warmGray.200"
                                }}>
                                    {item.recentText}
                                </Text>
                            </VStack>
                            <Spacer />
                            <Text fontSize="sm" _dark={{
                                color: "warmGray.50"
                            }} color="success.500" alignSelf="flex-start">
                                {item.timeStamp}
                            </Text>
                        </HStack>
                    </Box>} keyExtractor={item => item.id} />
            </Box>
            <Heading mt="20rpx" ml="10rpx" fontSize="md" color="gray.600" fontWeight="400">客厅主照明</Heading>
            <Flex w="90%" ml="2%" mr="2%" direction='row'>
                <Switch flex="2"></Switch>
                <Slider flex="8" defaultValue={70}>
                    <Slider.Track>
                        <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                </Slider>
            </Flex>
            <Heading mt="20rpx" ml="10rpx" fontSize="md" color="gray.600" fontWeight="400">客厅氛围灯</Heading>
            <Flex w="90%" ml="2%" mr="2%" direction='row'>
                <Switch flex="2"></Switch>
                <Slider flex="8" defaultValue={70}>
                    <Slider.Track>
                        <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                </Slider>
            </Flex>
            <Heading mt="20rpx" ml="10rpx" fontSize="md" color="gray.600" fontWeight="400">客厅吊灯</Heading>
            <Flex w="90%" ml="2%" mr="2%" direction='row'>
                <Switch flex="2"></Switch>
                <Slider flex="8" defaultValue={70}>
                    <Slider.Track>
                        <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                </Slider>
            </Flex>
            <Heading mt="20rpx" ml="10rpx" fontSize="md" color="gray.600" fontWeight="400">卫生间</Heading>
            <Flex w="90%" ml="2%" mr="2%" direction='row'>
                <Switch flex="2"></Switch>
                <Slider flex="8" defaultValue={70}>
                    <Slider.Track>
                        <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                </Slider>
            </Flex>
            <Heading mt="20rpx" ml="10rpx" fontSize="md" color="gray.600" fontWeight="400">厨房</Heading>
            <Flex w="90%" ml="2%" mr="2%" direction='row'>
                <Switch flex="2"></Switch>
                <Slider flex="8" defaultValue={70}>
                    <Slider.Track>
                        <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                </Slider>
            </Flex>
            <Heading mt="20rpx" ml="10rpx" fontSize="md" color="gray.600" fontWeight="400">主卧</Heading>
            <Flex w="90%" ml="2%" mr="2%" direction='row' mb="50rpx">
                <Switch flex="2"></Switch>
                <Slider flex="8" defaultValue={70}>
                    <Slider.Track>
                        <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                </Slider>
            </Flex>
        </ScrollView>
    </NativeBaseProvider>
}

export default Home;