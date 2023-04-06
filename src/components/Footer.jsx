import { Box,Image, Text, Flex } from '@chakra-ui/react'
import logo from '../assets/icon.svg'

const Footer = () => {
    return (
        <Box marginTop={50}>
            <Flex justifyContent='center' alignItems='center'>
                <Image src={logo} marginRight={1}/>
                <Text>Powered by Bret Tech</Text>

            </Flex>
        </Box>
    )
}

export default Footer