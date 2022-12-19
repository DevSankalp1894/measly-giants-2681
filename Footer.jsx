
  import {Box,VStack,Text,Image,Flex, HStack} from '@chakra-ui/react'
 
import { AiFillFacebook,AiFillLinkedin,AiOutlineTwitter,AiOutlineGooglePlus} from "react-icons/ai";


  function Footer () {
       return (
        <>
        <Box w='100%' backgroundColor='#446478' h='450px'>
            <Flex gap='10px'>
                
                <VStack ml='200px' mt='150px'>
                   
                  < AiFillFacebook color='white' size='30px' />  
                  < AiFillLinkedin color='white' size='30px' /> 
                  <AiOutlineTwitter color='white' size='30px' /> 
                  < AiOutlineGooglePlus color='white' size='30px' /> 
                  

                </VStack>

                <VStack color='white'   mt='80px'>
                    <Text fontSize='lg' fontWeight='500'>BY PLACE</Text>
                   <Text>----------------------------------</Text>
                    <Text >Internship In Mumbai</Text>
                    <Text>Internship In Delhi</Text>
                    <Text>Internship In Pune</Text>
                    <Text>Internship In Banglore</Text>
                    <Text>Internship In Hyderabad</Text>
                </VStack>

                <VStack color='white'   mt='80px' ml='150px'>
                    <Text fontSize='lg' fontWeight='500'>BY PROFILE</Text>
                   <Text>------------------------------------------------------</Text>
                    <Text>Marketing Internships</Text>
                    <Text>Business Development Internships</Text>
                    <Text>Content Writing Internships</Text>
                    <Text>Graphic Designing Internships</Text>
                    <Text>HR Internships</Text>
                    <Text>Engineering Internships</Text>
                </VStack>

                <VStack color='white' mt='80px' ml='150px'>
                    <Text fontSize='lg' fontWeight='500'>BY TYPE</Text>
                   <Text>----------------------------------------------------------</Text>
                    <Text>Full Time Internship</Text>
                    <Text>Part Time Internship</Text>
                    <Text> Worh Fron Home Internship</Text>
                  
                </VStack>
                

            
            </Flex>

            <Box mt='40px' ml='180px' w='80%'>
                    <HStack color='white' gap='50px'>
                        <Text fontSize='15px' fontWeight='600'>REFUND & CANCELLATION POLICY</Text>
                        <Text fontSize='15px' fontWeight='600'>COURSES</Text>
                        <Text fontSize='15px' fontWeight='600'>TERMS AND CONDITIONS</Text>
                        <Text fontSize='15px' fontWeight='600'>PRIVACY POLICY</Text>
                        <Text fontSize='15px' fontWeight='600'>CONTACT US</Text>
                        <Text fontSize='15px' fontWeight='600'>ABOUT US</Text>
                        <Text fontSize='15px' fontWeight='600'>SIDEMAP</Text>
                
                    </HStack>
                    <Text color='white'>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</Text>
                    <Text color='white' >© 2015 - 2022 INTERNTHEORY. ALL RIGHTS RESERVED.</Text>
                </Box>


        </Box>
        </>
       )
  }

    export default Footer;