//RN中没有jsx，使用.js作为组件的后缀
import React from 'react'

// 引入第三方组件库
import {
    NativeBaseProvider,
    Center,
    Button,
    Input,
    Flex,
    Icon,
    FlatList,
    HStack,
    Avatar,
    VStack,
    Spacer,
    Text,
    Box,
    ScrollView,
    Heading,
    IconButton
} from "native-base"
import AntDesign from "react-native-vector-icons/AntDesign"

var content = ""
const data = [
    {
        id: "01",
        brand: "美的",
        model: "BCD-646WGPZ",
        type: "冰箱",
        avatarUrl: "https://pic3.znj.com/Uploads/Picture/2019-04-16/287452fcf4d2b14a358cf9f09808ceba.png"
    },
    {
        id: "02",
        brand: "美的",
        model: "KFR-51LW/DY-YA400(D3)",
        type: "空调",
        avatarUrl: "https://pic3.znj.com/Uploads/Picture/2017-11-02/59fac6de3621b.jpg"
    },
    {
        id: "03",
        brand: "海尔",
        model: "TCL XQG85-F14303HBDP",
        type: "洗衣机",
        avatarUrl: "https://pic2.znj.com/Uploads/Picture/2019-10-21/5dad2115188d1.jpg"
    },
    {
        id: "04",
        brand: "海尔",
        model: "KFR-72LW/09UCP22AU1",
        type: "空调",
        avatarUrl: "https://pic1.znj.com/Uploads/Picture/2017-11-02/59fad99e8d4b5.jpg"
    },
];

var result = [
    {
        id: String,
        brand: String,
        model: String,
        type: String,
        avatarUrl: String
    }
]
const select = (d) => {
    result = d.filter(item => item.brand == content)
}

// 定义函数组件
const Management = () => {
    const [display, setDisplay] = React.useState("none")
    return <NativeBaseProvider>
        <ScrollView>
            <Center w="80%" mt="20rpx" ml="10%" h="30rpx">
                <Flex direction="row">
                    <Input flex="6" variant="rounded" placeholder="请输入品牌名"
                        onChangeText={(text) => {
                            content = text
                        }}></Input>
                    <Button flex="1" borderRadius="3xl" marginLeft="-25%" colorScheme="info"
                        onPress={() => {
                            setDisplay()
                            select(data)
                        }}>
                        <Icon
                            textAlign="center"
                            as={AntDesign}
                            name="search1"
                            color="white"
                            size="xl"
                        />
                    </Button>
                </Flex>
            </Center>
            <Box display={display} mt="20rpx">
                <Button W="5%" ml="90%" variant="ghost"
                    onPress={() => {
                        setDisplay("none")
                    }}>
                    <Icon
                        as={AntDesign}
                        name="close"
                        color="error.400"
                        size="md"
                    />
                </Button>
                <FlatList bg="white" data={result} renderItem={({
                    item
                }) => <Box borderBottomWidth="2" _dark={{
                    borderColor: "gray.600"
                }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                        <HStack space={3} justifyContent="space-between">
                            <Avatar size="48px" source={{
                                uri: item.avatarUrl
                            }} />
                            <VStack>
                                <Text _dark={{
                                    color: "warmGray.50"
                                }} color="info.600" bold>
                                    {item.brand}
                                </Text>
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }}>
                                    {item.model}
                                </Text>
                            </VStack>
                            <Spacer />
                            <Text fontSize="xs" _dark={{
                                color: "warmGray.50"
                            }} color="info.500" alignSelf="flex-start">
                                {item.type}
                            </Text>
                        </HStack>
                        <IconButton icon={<Icon as={AntDesign} name="pluscircleo" />} borderRadius="full"
                                onPress={() => {
                                    alert("设备添加成功")
                                }}
                                _icon={{
                                    color: "info.400",
                                    size: "md"
                                }} _hover={{
                                    bg: "coolGray.800:alpha.20"
                                }} _pressed={{
                                    bg: "coolGray.800:alpha.20",
                                    _icon: {
                                        name: "emoji-flirt"
                                    },
                                    _ios: {
                                        _icon: {
                                            size: "2xl"
                                        }
                                    }
                                }} _ios={{
                                    _icon: {
                                        size: "2xl"
                                    }
                                }} />
                    </Box>} keyExtractor={item => item.id} />
            </Box>
            <Heading fontSize="lg" color="info.500" mt="20rpx" ml="10rpx">设备选择</Heading>
            <Box mt="10rpx">
                <FlatList data={data} renderItem={({
                    item
                }) => <Box borderBottomWidth="2" _dark={{
                    borderColor: "gray.600"
                }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                        <HStack space={3} justifyContent="space-between">
                            <Avatar size="48px" source={{
                                uri: item.avatarUrl
                            }} />
                            <VStack>
                                <Text _dark={{
                                    color: "warmGray.50"
                                }} color="info.600" bold>
                                    {item.brand}
                                </Text>
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }}>
                                    {item.model}
                                </Text>
                            </VStack>
                            <Spacer />
                            <Text fontSize="xs" _dark={{
                                color: "warmGray.50"
                            }} color="info.500" alignSelf="flex-start">
                                {item.type}
                            </Text>
                        </HStack>
                        <IconButton icon={<Icon as={AntDesign} name="pluscircleo" />} borderRadius="full"
                            onPress={() => {
                                alert("设备添加成功")
                            }}
                            _icon={{
                                color: "info.400",
                                size: "md"
                            }} _hover={{
                                bg: "coolGray.800:alpha.20"
                            }} _pressed={{
                                bg: "coolGray.800:alpha.20",
                                _icon: {
                                    name: "emoji-flirt"
                                },
                                _ios: {
                                    _icon: {
                                        size: "2xl"
                                    }
                                }
                            }} _ios={{
                                _icon: {
                                    size: "2xl"
                                }
                            }} />
                    </Box>} keyExtractor={item => item.id} />
            </Box>
        </ScrollView>
    </NativeBaseProvider>
}

export default Management;