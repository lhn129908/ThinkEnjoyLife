//RN中没有jsx，使用.js作为组件的后缀
import React from 'react'

// 引入第三方组件库
import {
    NativeBaseProvider,
    Center,
    Heading,
    Box,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    HStack,
    Text,
} from "native-base"


// 定义函数组件
const Enter = ({navigation}) => {
    return <NativeBaseProvider>
        <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="md" fontWeight="600" color="coolGray.600" _dark={{
                    color: "warmGray.50"
                }}>
                    欢迎来到登录页面
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>用户名</FormControl.Label>
                        <Input placeholder='请输入手机号/邮箱' />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>密码</FormControl.Label>
                        <Input placeholder='请输入密码' type="password" />
                        <Link _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: "info.300"
                        }} alignSelf="flex-end" mt="1">
                            忘记密码?
                        </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="info" onPress={() => navigation.replace("TabBar")}>
                        登录
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Button colorScheme="info" variant="ghost" _text={{
                            color: "info.300",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }} 
                        onPress={() => navigation.navigate("Enroll")}>
                            去注册
                        </Button>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    </NativeBaseProvider>
}

export default Enter;