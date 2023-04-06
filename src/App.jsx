import { useState } from "react"
import { Container, Box } from "@chakra-ui/react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import TextInput from "./components/TextInput"

import KeywordsModal from "./components/KeywordsModal"
const App = () => {

  const [keywords, setKeywords] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: 'Extract keywords from this text. Add a hashtag before each word and Make the first letter of each word uppercase and separate with commas\n\n' + text + '',
        temperature: 0.5,//this is the randomness which also affects the creativity
        //0 is conservative responses 1 is the most creative
        max_tokens: 60, //number of words which are returned back
        //repetitions can be between -2.0 and 2.0
        frequency_penalty: 0.8

      })


    }

    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);
    //VITE_OPENAI_API_URL='https://api.openai.com/v1/completions'
    const json = await response.json();
    const data = json.choices[0].text.trim();
    console.log(data);
    setKeywords(data);
    setLoading(false);



  }

  const closeModal = () =>{
    setIsOpen(false);
  }
  return (
    <Box bg='blue.600' color='white' height='100%' paddingTop={130}>

      <Container maxW='3xl' centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <KeywordsModal keywords={keywords} loading={loading} isOpen={isOpen} closeModal={closeModal} />

    </Box>
  )
}

export default App