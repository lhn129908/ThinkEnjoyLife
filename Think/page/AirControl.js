// AirControl
import React from "react"
import {
    Box,
    Center,
    Flex,
    Button,
    PresenceTransition,
    NativeBaseProvider,
    Icon,
} from "native-base"

import AntDesign from "react-native-vector-icons/AntDesign"

const AirControl = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [moshi, setMoshi] = React.useState("制冷")
    const [fengsu, setFengsu] = React.useState("低")
    const [fengxiang, setXiang] = React.useState("上")
    const [saofeng, setSao] = React.useState("左右")
    const [wendu, setWen] = React.useState(20)
    const [ding, setDing] = React.useState("")
    const [shui, setShui] = React.useState("")
    return <NativeBaseProvider>
        <PresenceTransition visible={isOpen} initial={{
            opacity: 0
        }} animate={{
            opacity: 1,
            transition: {
                duration: 250
            }
        }}>
            <Center bg="primary.100" rounded="md" w="100%" h="310rpx" _text={{
                color: "white"
            }}>
                <Flex mb="50rpx" direction="row">
                    <Box flex="1" h="80rpx" _text={{ color: "#878787", fontSize: "4xl", fontWeight: "bold", textAlign: "right" }}>{wendu}</Box>
                    <Box flex="1">
                        <Flex h="80rpx" ml="5rpx" direction="column">
                            <Box _text={{ color: "#878787", fontSize: "md" }} h="30rpx">℃</Box>
                            <Box _text={{ color: "#878787", fontSize: "md" }} h="30rpx">{moshi}</Box>
                        </Flex>
                    </Box>
                </Flex>
                <Flex direction="row">
                    <Center flex="1" _text={{ color: "#878787", fontSize: "sm" }}>{fengsu}</Center>
                    <Center flex="1" _text={{ color: "#878787", fontSize: "sm" }}>{fengxiang}</Center>
                    <Center flex="1" _text={{ color: "#878787", fontSize: "sm" }}>{saofeng}</Center>
                </Flex>
                <Flex direction="row" mt="20rpx">
                    <Center flex="1" _text={{ color: "#878787", fontSize: "sm" }}>{ding}</Center>
                    <Center flex="1" _text={{ color: "#878787", fontSize: "sm" }}>{shui}</Center>
                </Flex>
            </Center>
        </PresenceTransition>

        <Box>
            <Flex direction="row">
                <Button h="65rpx" borderWidth="1rpx" borderColor="white" flex="1" onPress={() => setIsOpen(!isOpen)}>
                    {isOpen ? "关闭" : "打开"}
                </Button>
                <Button h="65rpx" borderWidth="1rpx" borderColor="white" flex="1"onPress={() => {
                    if (moshi == "制冷") {
                        setMoshi("制热")
                    }
                    else if (moshi == "制热") {
                        setMoshi("自动")
                    } else if (moshi == "自动") {
                        setMoshi("除湿")
                    }else if (moshi == "除湿") {
                        setMoshi("通风")
                    }else if (moshi == "通风") {
                        setMoshi("制冷")
                    }
                }}>模式</Button>
            </Flex>
            <Flex direction="row">
                <Button onPress={() => {
                    if (fengsu == "低") {
                        setFengsu("中")
                    }
                    else if (fengsu == "中") {
                        setFengsu("高")
                    } else if (fengsu == "高") {
                        setFengsu("低")
                    }
                }} h="65rpx" borderWidth="1rpx" borderColor="white" flex="1">风速</Button>
                <Button onPress={() => {
                    if (fengxiang == "上") {
                        setXiang("中")
                    }
                    else if (fengxiang == "中") {
                        setXiang("下")
                    } else if (fengxiang == "下") {
                        setXiang("上")
                    }
                }} h="65rpx" borderWidth="1rpx" borderColor="white" flex="1">风向</Button>
                <Button onPress={() => {
                    if (saofeng == "左右") {
                        setSao("上下")
                    }
                    else if (saofeng == "上下") {
                        setSao("上下-左右")
                    } else if (saofeng == "上下-左右") {
                        setSao("左右")
                    }
                }} h="65rpx" borderWidth="1rpx" borderColor="white" flex="1">扫风</Button>
            </Flex>
            <Flex direction="row">
                <Button h="65rpx" borderWidth="1rpx" borderColor="white" flex="1"
                    onPress={() => {
                        if (wendu <= 0) {
                            setWen(0)
                        } else {
                            setWen(wendu - 1)
                        }
                    }}>
                    <Icon
                        as={AntDesign}
                        name="minus"
                        color="white"
                        size="md"
                    />
                </Button>
                <Center h="65rpx" borderWidth="1rpx" borderColor="white" flex="1" bg="primary.600" _text={{ color: "white" }}>温度</Center>
                <Button h="65rpx" borderWidth="1rpx" borderColor="white" flex="1"
                    onPress={() => {
                        if (wendu >= 30) {
                            setWen(30)
                        } else {
                            setWen(wendu + 1)
                        }
                    }}>
                    <Icon
                        as={AntDesign}
                        name="plus"
                        color="white"
                        size="md"
                    />
                </Button>
            </Flex>
            <Flex direction="row">
                <Button h="65rpx" borderWidth="1rpx" borderColor="white" flex="1"
                onPress={() => {
                    if(ding==""){
                        setDing("0.5h")
                    }
                    else if (ding == "0.5h") {
                        setDing("1h")
                    }
                    else if (ding == "1h") {
                        setDing("1.5h")
                    }
                    else if (ding == "1.5h") {
                        setDing("2h")
                    }
                    else if (ding == "2h") {
                        setDing("0.5h")
                    }
                }}>定时</Button>
                <Button h="65rpx" borderWidth="1rpx" borderColor="white" flex="1"
                    onPress={() =>{
                        if(shui===""){
                            setShui("睡眠模式")
                        }else{
                            setShui("")
                        }
                    }}
                >睡眠</Button>
                <Button h="65rpx" borderWidth="1rpx" borderColor="white" flex="1">灯光</Button>
            </Flex>
        </Box>
    </NativeBaseProvider>
}
export default AirControl