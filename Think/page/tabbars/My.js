//RN中没有jsx，使用.js作为组件的后缀
import React from 'react'

// 引入第三方组件库
import { NativeBaseProvider, Avatar, Flex, Text, Box, Center, Icon, Button, ScrollView, VStack, Pressable } from "native-base"
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"

const data = {
    userName: "用户1029",
    age: 20,
    sex: "女",
    userCount: String,
    userPassword: String,
    Management: 3,
    Avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
}

// 定义函数组件
const My = ({ navigation }) => {
    return <NativeBaseProvider>
        <ScrollView>
            <Flex direction='row' w="100%" h="150rpx" bgColor="white" shadow={3}>
                <Box mt="5%" h="90%" ml="2%" flex="1">
                    <Avatar bg="green.500" size="xl" source={{
                        uri: data.Avatar
                    }}></Avatar>
                </Box>
                <Flex flex="1" direction="column" mt="5%" h="90%">
                    <Text lineHeight="60rpx" h="60rpx" color="gray.700" fontWeight="black" fontSize="xl">{data.userName}</Text>
                    <Text color="gray.500">{data.Management}个智能设备</Text>
                </Flex>
                <Center flex="1" display="flex" flexDirection="row" mt="5%" h="90%">
                    <Button flex="3" variant="unstyled" size="md" _text={{ textAlign: "center", color: "info.400" }}
                        onPress={() => navigation.navigate("Modify")}
                    >编辑资料</Button>
                    <Icon
                        flex="1"
                        as={Entypo}
                        name="chevron-with-circle-right"
                        color="gray.500"
                        size="md"
                    />
                </Center>
            </Flex>
            <Box w="90%" ml="5%" mt="20rpx" shadow={6} bgColor="white" borderRadius="lg" mb="10rpx">
                <Flex direction='row' h="70rpx" w="90%" ml="5%" mt="5%">
                    <Button variant="outline" flex="1" _text={{ color: "gray.400", fontSize: "xs" }} onPress={() => { }}>
                        <Icon
                            ml="20%"
                            mb="2%"
                            as={Entypo}
                            name="open-book"
                            color="info.500"
                            size="xl"
                        />
                        产品百科</Button>
                    <Button variant="outline" flex="1" _text={{ color: "gray.400", fontSize: "xs" }} onPress={() => { }}>
                        <Icon
                            ml="20%"
                            mb="2%"
                            as={Ionicons}
                            name="md-people-circle-sharp"
                            color="info.500"
                            size="xl"
                        />
                        智享众测</Button>
                    <Button variant="outline" flex="1" _text={{ color: "gray.400", fontSize: "xs" }} onPress={() => { }}>
                        <Icon
                            ml="20%"
                            mb="2%"
                            as={Entypo}
                            name="mobile"
                            color="info.500"
                            size="xl"
                        />
                        全屋智能</Button>
                </Flex>
                <VStack space={1} alignItems="center" mt="30rpx">
                    <Pressable onPress={() => navigation.navigate("Home")}>
                        <Flex direction='row' w="90%" ml="8%" h="50rpx">
                            <Icon
                                flex="3"
                                as={Entypo}
                                name='layers'
                                size="lg"
                                color="info.400"
                            />
                            <Text flex="8" fontSize="sm" color="gray.500">共享</Text>
                            <Icon
                                flex="3"
                                as={Entypo}
                                name='chevron-small-right'
                                size="lg"
                                color="gray.400"
                            />
                        </Flex>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Home")}>
                        <Flex direction='row' w="90%" ml="8%" h="50rpx">
                            <Icon
                                flex="3"
                                as={Entypo}
                                name='laptop'
                                size="lg"
                                color="info.400"
                            />
                            <Text flex="8" fontSize="sm" color="gray.500">设备耗材</Text>
                            <Icon
                                flex="3"
                                as={Entypo}
                                name='chevron-small-right'
                                size="lg"
                                color="gray.400"
                            />
                        </Flex>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Home")}>
                        <Flex direction='row' w="90%" ml="8%" h="50rpx">
                            <Icon
                                flex="3"
                                as={Ionicons}
                                name='ios-bluetooth'
                                size="lg"
                                color="info.400"
                            />
                            <Text flex="8" fontSize="sm" color="gray.500">中枢与网关</Text>
                            <Icon
                                flex="3"
                                as={Entypo}
                                name='chevron-small-right'
                                size="lg"
                                color="gray.400"
                            />
                        </Flex>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Home")}>
                        <Flex direction='row' w="90%" ml="8%" h="50rpx">
                            <Icon
                                flex="3"
                                as={Entypo}
                                name='chat'
                                size="lg"
                                color="info.400"
                            />
                            <Text flex="8" fontSize="sm" color="gray.500">帮助与反馈</Text>
                            <Icon
                                flex="3"
                                as={Entypo}
                                name='chevron-small-right'
                                size="lg"
                                color="gray.400"
                            />
                        </Flex>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate("Setting")}>
                        <Flex direction='row' w="90%" ml="8%" h="50rpx">
                            <Icon
                                flex="3"
                                as={Ionicons}
                                name='ios-build-outline'
                                size="lg"
                                color="info.400"
                            />
                            <Text flex="8" fontSize="sm" color="gray.500">设置</Text>
                            <Icon
                                flex="3"
                                as={Entypo}
                                name='chevron-small-right'
                                size="lg"
                                color="gray.400"
                            />
                        </Flex>
                    </Pressable>
                </VStack>
            </Box>
        </ScrollView>
    </NativeBaseProvider>
}

export default My;