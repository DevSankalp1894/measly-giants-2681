
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJSxT21Y024h_n_hAlQ2P5L-2FxDoel7LMg&usqp=CAU

  import {Box,Text,Image,Input,Flex,Button,ButtonGroup,IconButton} from '@chakra-ui/react';
  import {ChevronDownIcon} from '@chakra-ui/icons'
  import React from 'react';


  function Form() {

      const [text , setText] = React.useState('');
      
       return (

        //<Box w={'90%'} m={'auto'}   display='flex'
        // alignItems='center'
        // justifyContent='center'
        // width='100%'
        // py={12}
        // bgPosition='center'
        // bgRepeat='no-repeat'
        // mb={2}
        //   bgImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8naXn66QOzzityyI7Iu20NLucHG1KToefmA&usqp=CAU')">
        <>
        <Box position='absolute' top='220px' justifyContent={'center'} ml='450px' alignItems='center'>
          <Text color='white'fontSize='2xl' fontWeight='500'>Let’s Get You <span style={{backgroundColor:'red',fontWeight:'700'}}>Ready</span></Text>
          <Text >The One Stop to Upgrade Your Resume. Expand Your Skillset. Do An Internship. Get Placed</Text>
        </Box>
        <Box  m='auto' w='97%'  >
        <Image  m='auto' w='97%' h='400px'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8naXn66QOzzityyI7Iu20NLucHG1KToefmA&usqp=CAU'/>
        <Box position='absolute' top='300px' w='90%' h='100px' bgColor='blackAlpha.200' ml='20' mb='100px' >
        <Flex gap='6' 
         bgColor='white' w='90%' m='auto' alignItem='center' justifyContent='center'>
        <Input variant='flushed' placeholder='Cities...'/> 
         
         <IconButton aria-label='Add to friends' icon={<ChevronDownIcon />} />
      
        <Input variant='flushed' placeholder='type' />
        <IconButton aria-label='Add to friends' icon={<ChevronDownIcon />} />
        <Input variant='flushed' placeholder='Preferences' />
        <IconButton aria-label='Add to friends' icon={<ChevronDownIcon />} />
       
        <Text>OR</Text>
        <Input variant='flushed' placeholder='Search...' />
        <Button size='sm' width='500px' color='white' bg='red'>SEARCH</Button>
        </Flex>
        </Box>
        </Box>
        <Box w='80%' h='600px'>

        </Box>
        </>

        //V Pattern javascript?




        
      
       )
  }

    export default Form;