import {HStack,VStack, Box,Text,IconButton,Input,Flex,Button,Image,Spacer } from "@chakra-ui/react";

import {ChevronDownIcon} from '@chakra-ui/icons'

import {  BsFillShareFill} from  'react-icons/bs'



  function Intern() {
       return (
        <>
       <Box>

<Box mt='5%' w='90%' h='100px'  ml='20' mb='100px' >
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
        <Button size='sm' width='500px' color='white' bg='blue'>SEARCH</Button>
        </Flex>
        </Box>

       <Box >
          <HStack>
          <Box w='20%' ml='10%'>
            <Image  src='https://assets.interntheory.com/creative/Internship_left_course_add_02.png'/>
          </Box>

            <VStack borderBottom='1px dashed black'>
               <Box>
                  <Box w='30%'>
                 <Text fontSize='3xl'>All Internships</Text>
                 </Box>
                 <HStack>
                   <Box w='20%' ml='5%'>
                    <Image src='https://assets.interntheory.com/creative/logo.png'/>
                   </Box>

                   <Flex gap='20px'>
                 
                   <Flex  mt='2%' w='550px'direction='column' justifyContent='flex-start' >
                      <Box w='62%'>
                       <Text fontSize='2xl'  fontWeight='450'>Develop Your Skillset</Text>
                       </Box>
                       <Box w='68%'>
                       <Text>Online Skill Development Programs</Text>
                       </Box>
                       <Box w='70%'>
                       <Text>Taught by Industry Experts Internship</Text>
                        </Box>
                        <Box w='45%'>
                        <Text>Certified Courses</Text>
                        </Box>
                       
                        <Box w='70%'>
                       <Text>Guaranteed Internship Opportunities</Text>
                       </Box>
                       <Box  w='64%'>
                      <Text fontWeight='500' color='RGBA(0, 0, 0, 0.68)'>Learn Industry-Demanded Skills</Text>
                      </Box>
                     
                      </Flex>
                   

                     <Box w='150px' mt='2%'>
                      <VStack spacing='7'>
                        <Text>4-6 Weeks</Text>
                        <BsFillShareFill size={'30px'}/>
                        <Text color='blue' fontSize='md' fontWeight='500' >UPGRADE SKILLS</Text>
                        </VStack>

                     </Box>
                     </Flex>
                 </HStack>
               </Box>
            </VStack>
         
          </HStack>

          <VStack borderBottom='1px dashed black' ml='20%'>
               <Box>
               
                 <HStack ml='15%'>
                   <Box w='10%' ml='5%'>
                    <Image src='https://assets.interntheory.com/uploads/company/logos/348ebc3e1dc80c206c4ac8af46f90db576813b9d.jpg'/>
                   </Box>

                   <Flex gap='50px'>
                 
                   <Flex  mt='2%' w='550px'direction='column' justifyContent='flex-start' >
                      <Box w='78%'>
                       <Text fontSize='2xl'  fontWeight='450'>Digital Marketing Analyst</Text>
                       </Box>
                       <Box w='50%'>
                       <Text>Fando Network</Text>
                       </Box>
                       <Box w='55%'>
                       <Text>Full Time Internship</Text>
                        </Box>
                        <Box w='52%'>
                        <Text>Digital Marketing</Text>
                        </Box>
                       
                        <Box w='43%'>
                       <Text>Bangalore</Text>
                       </Box>
                       <Box w='63%'>
                       <Text>Stipend: 15000 per month</Text>
                       </Box>
                     
                     
                      </Flex>
                   

                     <Box w='150px' mt='2%'>
                      <VStack spacing='7'>
                        <Text>4-6 Weeks</Text>
                        <BsFillShareFill size={'30px'}/>
                        <Text color='blue' fontSize='md' fontWeight='500' >UPGRADE SKILLS</Text>
                        </VStack>

                     </Box>
                     </Flex>
                 </HStack>
               </Box>
            </VStack>


            <VStack borderBottom='1px dashed black' ml='20%'>
               <Box>
               
                 <HStack ml='15%'>
                   <Box  ml='5%'>
                    <Image src='https://assets.interntheory.com/uploads/company/companylogos/62362fbf882221470f099d8d0a119df93ce19831/7e34b7356b30b3696d14fcab94c6e8989a42fd69com.jpg'/>
                   </Box>

                   <Flex gap='50px'>
                 
                   <Flex  mt='2%' w='550px'direction='column' justifyContent='flex-start' >
                      <Box w='78%'>
                       <Text fontSize='2xl'  fontWeight='450'>Digital Marketing Analyst</Text>
                       </Box>
                       <Box w='50%'>
                       <Text>Fando Network</Text>
                       </Box>
                       <Box w='55%'>
                       <Text>Full Time Internship</Text>
                        </Box>
                        <Box w='52%'>
                        <Text>Digital Marketing</Text>
                        </Box>
                       
                        <Box w='43%'>
                       <Text>Bangalore</Text>
                       </Box>
                       <Box w='63%'>
                       <Text>Stipend: 15000 per month</Text>
                       </Box>
                     
                     
                      </Flex>
                   

                     <Box w='150px' mt='2%'>
                      <VStack spacing='7'>
                        <Text>4-6 Weeks</Text>
                        <BsFillShareFill size={'30px'}/>
                        <Text color='blue' fontSize='md' fontWeight='500' >UPGRADE SKILLS</Text>
                        </VStack>

                     </Box>
                     </Flex>
                 </HStack>
               </Box>
            </VStack>
        
       </Box>


       
    




       
        
       


        






        </Box>
        </>
       )
  }

    export default Intern;