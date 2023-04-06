import { Heading, Image, Text } from "@chakra-ui/react"
import logo from '../assets/icon.svg'
const Header = () => {
  return (
    <>
    <Image src={logo} alt='logo' width={100} height={100}  marginBottom='1rem'/>
    <Heading color='white' marginBottom='1rem'>
        AI Keyword Generator
    </Heading>

    <Text fontSize={25} textAlign='center'>
        Paste in your text and we will extract the keywords for you
    </Text>
    
    </>
  )
}

export default Header