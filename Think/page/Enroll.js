//RN中没有jsx，使用.js作为组件的后缀
import React from 'react'

// 引入第三方组件库
import {
    NativeBaseProvider,
    Heading,
    Center,
    Box,
    VStack,
    FormControl,
    Button,
    Input
} from "native-base"


// 定义函数组件
const Enroll = ({ navigation }) => {
    return <NativeBaseProvider>
        <Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading size="md" color="coolGray.600" _dark={{
                    color: "warmGray.50"
                }} fontWeight="semibold">
                    欢迎来到注册页面
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>用户名</FormControl.Label>
                        <Input placeholder='请输入手机号/邮箱' />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>密码</FormControl.Label>
                        <Input placeholder='请输入密码' type="password" />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>确认密码</FormControl.Label>
                        <Input placeholder='请输入再次密码' type="password" />
                    </FormControl>
                    <Button mt="2" colorScheme="info" onPress={() => {alert("注册成功"); navigation.navigate("Enter")}}>
                        注册
                    </Button>
                </VStack>
            </Box>
        </Center>
    </NativeBaseProvider>
}

export default Enroll;