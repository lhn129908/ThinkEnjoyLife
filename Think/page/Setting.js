//RN中没有jsx，使用.js作为组件的后缀
import React from 'react'

// 引入第三方组件库
import { NativeBaseProvider, VStack, Pressable, Text, Button, AlertDialog, Box } from "native-base"
import { useColorMode } from "native-base"

// 定义函数组件
const Setting = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [display, setDisplay] = React.useState();
    const onClose = () => setIsOpen(false);
    const onClose1 = () => {
        setIsOpen(false);
        setDisplay("none")
    };
    const cancelRef = React.useRef(null);
    const {
        colorMode,
        toggleColorMode
    } = useColorMode()
    return <NativeBaseProvider>
        <Box bg={colorMode === "dark" ? "coolGray.700" : "gray.50"} h="667">
            <VStack space={1} alignItems="center">
                <Pressable w="100%" h="50rpx" borderBottomWidth="1rpx" borderBottomColor="gray.500"><Text mt="3%" ml="5%" color="gray.500" fontSize="md">安全设置</Text></Pressable>
                <Pressable w="100%" h="50rpx" borderBottomWidth="1rpx" borderBottomColor="gray.500"><Text mt="3%" ml="5%" color="gray.500" fontSize="md">通用设置</Text></Pressable>
                <Pressable w="100%" h="50rpx" borderBottomWidth="1rpx" borderBottomColor="gray.500"  onPress={toggleColorMode}>
                    <Text mt="3%" ml="5%" color="gray.500" fontSize="md">
                        夜间模式切换
                    </Text>
                </Pressable>
                <Pressable w="100%" h="50rpx" borderBottomWidth="1rpx" borderBottomColor="gray.500"><Text mt="3%" ml="5%" color="gray.500" fontSize="md">消息通知</Text></Pressable>
                <Pressable w="100%" h="50rpx" borderBottomWidth="1rpx" borderBottomColor="gray.500"><Text mt="3%" ml="5%" color="gray.500" fontSize="md">更新日志</Text></Pressable>
                <Pressable w="100%" h="50rpx" borderBottomWidth="1rpx" borderBottomColor="gray.500"><Text mt="3%" ml="5%" color="gray.500" fontSize="md">关于智享生活</Text></Pressable>
                <Button display={display} mt="50rpx" w="80%" h="50rpx" _text={{ fontSize: "lg" }} variant="outline" colorScheme="error" onPress={() => setIsOpen(!isOpen)}>退出登录</Button>
            </VStack>
            <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                <AlertDialog.Content>
                    <AlertDialog.CloseButton />
                    <AlertDialog.Header>退出提示</AlertDialog.Header>
                    <AlertDialog.Body>
                        是否要退出当前帐号？
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                        <Button.Group space={2}>
                            <Button variant='unstyled' colorScheme='coolGray' onPress={onClose} ref={cancelRef}>
                                取消
                            </Button>
                            <Button colorScheme='danger' onPress={onClose1}>
                                确认
                            </Button>
                        </Button.Group>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
        </Box>
    </NativeBaseProvider>
}

export default Setting;