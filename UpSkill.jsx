
  import {Box,Heading ,Image,Text,Flex,VStack} from '@chakra-ui/react'
  //rgb(238, 238, 238)
  function UpSkill () {
      return (
        <>
        <Box bgColor='rgb(238, 238, 238)' h='400px'>
            <Box  h='50px' mt='150px'>
                <Heading mt='100px'>HOW ABOUT <span style={{color:'red'}}>UPSKILLING ?</span></Heading>
            </Box>
            <Flex gap='20px' ml='20px' mt='50px'>
                <Box   display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'
    py={12}
    bgImage="url('https://img.freepik.com/premium-photo/financial-business-chart-with-diagrams-stock-numbers-showing-profits-losses_273081-4.jpg?w=2000')"
    bgPosition='center'
    bgRepeat='no-repeat'
    mb={2} w='40%' h='200px'>
          <Text fontSize='xl' color={'white'} w='65%' fontWeight='500'>Learn How To Trade Online. Become A Certified <span style={{backgroundColor:'red'}}>STOCK TRADER</span> </Text>
          
             
                </Box>

                <Box   display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'
    py={12}
    bgImage="url('https://assets.entrepreneur.com/content/3x2/2000/20191112054904-FotoJet32.jpeg')"
    bgPosition='center'
    bgRepeat='no-repeat'
    mb={2} w='40%' h='200px'>
          <Text fontSize='xl' color={'white'} w='60%' fontWeight='500'>Be Ready With Our <span style={{backgroundColor:'red'}}>DIGITAL MARKETING</span>Online Course!</Text>
      
          
             
                </Box>

                <Box   display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'
    py={12}
    bgImage="url('https://images.pexels.com/photos/6986455/pexels-photo-6986455.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')"
    bgPosition='center'
    bgRepeat='no-repeat'
    mb={2} w='40%' h='200px'>
          <Text fontSize='xl' color={'white'} w='65%' fontWeight='500'>  Always browsed website NOW <span style={{backgroundColor:'red'}}>MAKE</span> ONE </Text>
          
             
                </Box>
            </Flex >
        </Box>
        <Box>
            <Flex gap='100px' w='70%' m='auto'>
                <Box w='30%'>
                    <Image src='https://assets.interntheory.com/creative/chart.png'/>
                </Box>
                <Box mt='150px' >
                    <Heading>
                    WE ARE CONSTANTLY <span style={{color:'red'}}>GROWING</span></Heading>
                    <hr/>
                    <Text>We are on a mission to help every student in India. Upgrading your CV and getting you a</Text>
                    <Text>meaningful job remains our sole motive and we are not stopping anytime soon.</Text>
                </Box>
            </Flex>
        </Box>

       <Box mt='50px' boxShadow='rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;' h='220px' backgroundColor='rgb(238, 238, 238)'>
        <Flex w='90%' ml='200px' gap='80px' >
        <VStack>
            <Box mt='50px'>
            <Image borderRadius='50%' src='https://assets.interntheory.com/img/testimonial-image/in3.jpg'/>
            </Box>
            <Box>
                <Heading>Amani Nagda</Heading>
                <Text color='blue' fontWeight='700'>Intern at Porche</Text>
            </Box>
        </VStack>
         <Box w='65%' mt='30px'>
            <Text mt='50px' >"We have been using InternTheory for over a year now and are very happy with the quality of applications that we receive. Their team has been very helpful in screening applications for the various internship requirements we had. It has been a delight working with them."</Text>
         </Box>
        </Flex>
       </Box>

        </>
      )
  }

    export default UpSkill;