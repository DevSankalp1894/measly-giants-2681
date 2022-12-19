
  import {Text,Box,Image,HStack,Flex,Spacer,Button} from '@chakra-ui/react'
  import {AiOutlineMenu} from "react-icons/ai";
  import { BsFillCartPlusFill } from "react-icons/bs";

  function Nav () {


     
 
      return (

       <Box w='90%' m='auto' mt='10px'>
        <Flex >
        <Box>
        <Flex gap='30px'>
          <Box>
         <AiOutlineMenu size={'25px'}/>
         </Box>
       
         <Box  boxSize='100px'>
         <Image  src='https://assets.interntheory.com/creative/logo.png'/>
         </Box>
         </Flex>
         </Box>
         <Spacer/>
         <Box>
        <Flex gap='30px'>
          <Box>
         <BsFillCartPlusFill size={'25px'}/>
         </Box>
       
         <Box  boxSize='100px'>
           <Button   size='sm' color='white' bg='red'>SIGN IN</Button>
         </Box>
         </Flex>
         </Box>
         </Flex>
       </Box>

      )
  }

    export default Nav;