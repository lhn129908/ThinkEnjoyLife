import React from "react"
import {
    Circle,
    Icon,
    Flex,
    NativeBaseProvider,
    Box,
    Button,
    Center
} from "native-base"
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

const TvControl = () => {
    return <NativeBaseProvider>
        <Flex direction="row" w="100%" marginTop="15%" marginBottom="10%">
            <Button width="25%" height="70" variant="ghost" borderRadius="full">
                <Icon
                    textAlign="center"
                    as={AntDesign}
                    name="logout"
                    color="emerald.600"
                    size="3xl"
                />
            </Button>

            <Button width="25%" height="70" variant="ghost" borderRadius="full">
                <Icon
                    textAlign="center"
                    as={Entypo}
                    name="menu"
                    color="info.400"
                    size="3xl"
                />
            </Button>

            <Button width="25%" height="70" variant="ghost" borderRadius="full">
                <Icon
                    textAlign="center"
                    as={FontAwesome5}
                    name="volume-mute"
                    color="info.400"
                    size="3xl"
                />
            </Button>

            <Button width="25%" height="70" variant="ghost" borderRadius="full">
                <Icon
                    textAlign="center"
                    as={AntDesign}
                    name="poweroff"
                    color="red.600"
                    size="3xl"
                />
            </Button>

        </Flex>
        <Circle marginLeft="15%" w="260rpx" h="260rpx" borderWidth="1" borderColor="info.300" backgroundColor="info.200">
            <Button variant="ghost" borderRadius="full">
                <Icon
                    as={AntDesign}
                    name="caretup"
                    color="info.400"
                    size="5xl"
                />
            </Button>

            <Flex direction="row">
                <Button variant="ghost" borderRadius="full">
                    <Icon
                        as={AntDesign}
                        name="caretleft"
                        color="info.400"
                        size="5xl"
                    />
                </Button>
                <Button variant="ghost" borderRadius="full">
                    <Icon
                        as={Entypo}
                        name="controller-record"
                        color="info.400"
                        size="5xl"
                    />
                </Button>

                <Button variant="ghost" borderRadius="full">
                    <Icon
                        as={AntDesign}
                        name="caretright"
                        color="info.400"
                        size="5xl"
                    />
                </Button>

            </Flex>
            <Button variant="ghost" borderRadius="full">
                <Icon
                    as={AntDesign}
                    name="caretdown"
                    color="info.400"
                    size="5xl"
                />
            </Button>
        </Circle>
        <Flex direction="row">
            <Center flex="1" mt="20rpx" >
                <Button w="25%" h="40rpx" colorScheme="info">
                    <Icon
                        as={AntDesign}
                        name="caretup"
                        color="white"
                    />
                </Button>
                <Center w="25%" h="30rpx" backgroundColor="info.100" _text={{color:"coolGray.500"}}>Bri</Center>
                <Button w="25%" h="40rpx" colorScheme="info">
                    <Icon
                        as={AntDesign}
                        name="caretdown"
                        color="white"
                    />
                </Button>
            </Center>
            <Center flex="1" mt="20rpx" >
                <Button w="25%" h="40rpx" colorScheme="info">
                    <Icon
                        as={AntDesign}
                        name="caretup"
                        color="white"
                    />
                </Button>
                <Center w="25%" h="30rpx" backgroundColor="info.100" _text={{color:"coolGray.500"}}>Vol</Center>
                <Button w="25%" h="40rpx" colorScheme="info">
                    <Icon
                        as={AntDesign}
                        name="caretdown"
                        color="white"
                    />
                </Button>
            </Center>
        </Flex>

    </NativeBaseProvider>
}
export default TvControl