
  import {HStack,Input,Box,Text,Flex,Spacer,VStack,Button} from '@chakra-ui/react';

  import {  FaGoogle} from  'react-icons/fa'

  import { AiFillFacebook,AiOutlineBorder} from "react-icons/ai";
  function SignIn() {
       return (
        <>
       <Box w='35%' m='auto' 
       boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'>
        <Box mt='5%'>
            <Flex w='70%' m='auto'>
                <Box mt='5%' borderBottom={'2px solid black'} w='30%'>
                <Text>STUDENT</Text>
                </Box>
                <Spacer/>
                <Box mt='5%' borderBottom={'2px solid black'} w='30%'>
                <Text>COMPANY</Text>
                </Box>
            </Flex>

           <Box mt='5%'>
            <Box mr='70%'>
             <Text fontSize='2xl'>Login</Text>
             </Box>
             <Box  w='95%' mt='2%' border= '1.5px dashed red' backgroundColor='pink.100'>
                <Text  >
                If you are a company looking to hire interns, please login as<span style={{marginRight:'50%'}}> a company by clicking <span style={{color:'blue'}}>here.</span></span>
                </Text>
             </Box>
             </Box>

             <Box mt='5%'>
                <VStack>
                <Button color='white' w='90%'  leftIcon={< AiFillFacebook size='25px'/>} backgroundColor={'blue.400'}>SIGNIN WITH FACEBOOK</Button>
                <Button color='white' w='90%'  leftIcon={<FaGoogle  size='20px'/>} backgroundColor={'blue.400'}>SIGNIN WITH GOOGLE</Button>
                <Text>
                    OR
                </Text>
                </VStack>
             </Box>

             <Box>
                <VStack>
                    <Box w='90%'>
                        <Input variant='flushed' placeholder='Email/Number'/>
                    </Box>

                    <Box  w='90%'>
                        <Input variant='flushed' placeholder='Password'/>
                    </Box>
                </VStack>
             </Box>

             <Box w='90%' m='auto'>
                <Flex mt='2%'>
                    <HStack>
                        <AiOutlineBorder/>
                        <Text>Remember me</Text>
                    </HStack>

                    <Spacer/>
                    <Text color='blue'>Forgot Password ?</Text>
                </Flex>
                <Box mt='5%'>
                    <Text>Don't have an account?<span style={{color:'blue'}}>Create your accunt</span></Text>
                </Box>

                <Box mt='3%'>
                    <Button w='95%' borderColor='red' border='1px' color='red.600' >LOGIN</Button>
                </Box>

             </Box>


         

  

        </Box>
       </Box>

        </>
       )
  }

    export default SignIn;