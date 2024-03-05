//RN中没有jsx，使用.js作为组件的后缀
import React from 'react'

// 引入第三方组件库
import { NativeBaseProvider, Input, Stack, FormControl, Radio, Heading, Button, Avatar, Center } from "native-base"

var data = {
    userName: "用户1029",
    age: "20",
    sex: "女",
    userCount: String,
    userPassword: String,
    Management: 3,
    Avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
}

// 定义函数组件
const Modify = () => {
    const [value, setValue] = React.useState("女");
    return <NativeBaseProvider>
        <Heading fontSize="xl" color="gray.500" mt="20rpx" ml="10rpx">信息修改</Heading>
        <Center>
            <Avatar bg="green.500" size="xl" source={{
                uri: data.Avatar
            }}></Avatar>
        </Center>
        <FormControl w="80%" ml="10%" mt="10rpx">
            <Stack space={5}>
                <Stack>
                    <FormControl.Label>昵称</FormControl.Label>
                    <Input variant="underlined" p={2} placeholder={data.userName} />
                </Stack>
                <Stack>
                    <FormControl.Label>年龄</FormControl.Label>
                    <Input variant="underlined" p={2} placeholder={data.age} />
                </Stack>
                <Stack>
                    <FormControl.Label>性别</FormControl.Label>
                    <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => {
                        setValue(nextValue);
                    }}>
                        <Radio value="男" my={1}>
                            男
                        </Radio>
                        <Radio value="女" my={1}>
                            女
                        </Radio>
                    </Radio.Group>
                </Stack>
                <Button>提交</Button>
            </Stack>
        </FormControl>
    </NativeBaseProvider>
}

export default Modify;