import {Container,HStack,VStack, Box,Text,IconButton,Input,Flex,Button,Image,Spacer } from "@chakra-ui/react";

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

       <Box  boxShadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'>
       <Container w='30%' ml='25%' >
                 <Text fontSize='3xl'>All Internships</Text>
                 </Container>
          <HStack >
          <Box w='20%' ml='10%'>
            <Image  src='https://assets.interntheory.com/creative/Internship_left_course_add_02.png'/>
          </Box>

            <VStack borderBottom='1px dashed black' >
               <Box>
                

                 
                 <HStack >
                   <Box w='15%' ml='8%'>
                    <Image src='https://assets.interntheory.com/creative/logo.png'/>
                   </Box>

                   <Flex gap='170px'>
                 
                   <Flex    aligItems= 'left'
            justifyContent= 'left'
            flexDirection= 'column'
            textAlign= 'left'
            w='90%'
            
           ml='6%' >
                   
                       <Text fontSize='2xl'  fontWeight='450'>Develop Your Skillset</Text>
                      
                     
                       <Text>Online Skill Development Programs</Text>
                    
                      
                       <Text>Taught by Industry Experts Internship</Text>
                      
                        
                        <Text>Certified Courses</Text>
                        
                       
                        
                       <Text>Guaranteed Internship Opportunities</Text>
                       
                     
                      <Text fontWeight='500' color='RGBA(0, 0, 0, 0.68)'>Learn Industry-Demanded Skills</Text>
                     
                     
                      </Flex>
                   

                     <Box w='300px' mt='2%'>
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

          <VStack borderBottom='1px dashed black' ml='20%' >
               <Box>
               
                 <HStack ml='10%'>
                   <Box w='10%' ml='10%'>
                    <Image src='https://assets.interntheory.com/uploads/company/logos/348ebc3e1dc80c206c4ac8af46f90db576813b9d.jpg'/>
                   </Box>

                   <Flex gap='180px'>
                 
                   <Flex     aligItems= 'left'
            justifyContent= 'left'
            flexDirection= 'column'
            textAlign= 'left'
            w='90%'
            
           ml='10%'  >
                      
                       <Text fontSize='2xl'  fontWeight='450'>Digital Marketing Analyst</Text>
                     
                   
                       <Text>Fando Network</Text>
                     
                       
                       <Text>Full Time Internship</Text>
                     
                    
                        <Text>Digital Marketing</Text>
                       
                       
                       
                       <Text>Bangalore</Text>
                     
                    
                       <Text>Stipend: 15000 per month</Text>
                       
                     
                     
                      </Flex>
                   

                     <Box w='300px' mt='2%'>
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
                   <Box w='10%' ml='5%'>
                    <Image src='https://images-platform.99static.com//UOJV12LEYKblogNTKmZKrdg4Ccw=/104x3311:906x4113/fit-in/500x500/projects-files/48/4880/488031/1355a579-9162-4650-9780-04bf125901ce.png'/>
                   </Box>

                   <Flex gap='150px'>
                 
                   <Flex       
            aligItems= 'left'
            justifyContent= 'left'
            flexDirection= 'column'
            textAlign= 'left'
            
           ml='10%'
           
           >
                      <Box w='100%'>
                       <Text fontSize='2xl'  fontWeight='450'>Marketing Ambassador-Work from Home</Text>
                       </Box>
                       
                       <Text>Laugh Out Loud Ventures</Text>
                      
                       
                       <Text>Work From Home Internship</Text>
                        
                       
                        <Text>Marketing</Text>
                     
                       
                      
                       <Text>Bangalore,Chennai,Delhi </Text>
                       
                       
                       <Text>Stipend: 3000 - 10000 per month</Text>
                       
                     
                     
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
                   <Box w='10%' ml='5%'>
                    <Image src='https://assets.interntheory.com/uploads/company/companylogos/c22171e9ccc3eaa1f43a19d86be801e0341c4999/2f0c5644573472744e5586f69fb778f0959edfd7com.jpg'/>
                   </Box>

                   <Flex gap='150px'>
                 
                   <Flex       
            aligItems= 'left'
            justifyContent= 'left'
            flexDirection= 'column'
            textAlign= 'left'
            
           ml='10%'
           
           >
                      <Box w='100%'>
                       <Text fontSize='2xl'  fontWeight='450'>Content Writer</Text>
                       </Box>
                       
                       <Text>J K Diamonds Institute of Gems & Jewelry</Text>
                      
                       
                       <Text>Full Time Internship</Text>
                        
                       
                        <Text>Education And Training</Text>
                     
                       
                      
                       <Text>Mumbai</Text>
                       
                       
                       <Text>Stipend: 15000 per month</Text>
                       
                     
                     
                      </Flex>
                      <Spacer/>
                   

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
                   <Box w='10%' ml='5%'>
                    <Image src='https://assets.interntheory.com/uploads/company/logos/6efdff45626352708533d4a6021e909ca9c33925.jpg'/>
                   </Box>

                   <Flex gap='150px'>
                 
                   <Flex       
            aligItems= 'left'
            justifyContent= 'left'
            flexDirection= 'column'
            textAlign= 'left'
            
           ml='10%'
           
           >
                      <Box w='100%'>
                       <Text fontSize='2xl'  fontWeight='450'>Psychology Intern</Text>
                       </Box>
                       
                       <Text>EkakiVedam Foundation</Text>
                      
                       
                       <Text>Full Time,Part Time,Work From Home</Text>
                        
                       
                        <Text>Internship</Text>
                     
                       
                      
                       <Text>Psychology</Text>
                       
                       
                       <Text>Gurgaon,Mumbai,Delhi,  ...MORE</Text>

                       <Text>Stipend: 200 per sale</Text>
                       
                     
                     
                      </Flex>
                      <Spacer/>
                   

                     <Box w='200px' mt='2%'>
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
                   <Box w='10%' ml='5%'>
                    <Image src='https://assets.interntheory.com/uploads/company/logos/47bea5aaf51cca0ed55002de9cb2bc3c050d3243.jpg'/>
                   </Box>

                   <Flex gap='50px'>
                 
                   <Flex       
            aligItems= 'left'
            justifyContent= 'left'
            flexDirection= 'column'
            textAlign= 'left'
            w='90%'
            
           ml='10%'
           
           >
                      <Box w='100%'>
                       <Text fontSize='xl'  fontWeight='450'>Business Development (online sales for IT)</Text>
                       </Box>
                       
                       <Text>AfterFirst Media</Text>
                      
                       
                       <Text>Full Time Internship</Text>
                        
                       
                        <Text>Digital Marketing</Text>
                     
                       
                      
                       <Text>Ahmedabad</Text>
                       
                       
                       <Text>Stipend: 10000 per month</Text>

                      
                     
                     
                      </Flex>
                      <Spacer/>
                   

                     <Box w='300px' mt='2%'>
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
                   <Box w='10%' ml='5%'>
                    <Image src='https://assets.interntheory.com/uploads/company/logos/47bea5aaf51cca0ed55002de9cb2bc3c050d3243.jpg'/>
                   </Box>

                   <Flex gap='80px'>
                 
                   <Flex       
            aligItems= 'left'
            justifyContent= 'left'
            flexDirection= 'column'
            textAlign= 'left'
            w='90%'
           ml='10%'
           
           >
                      <Box w='100%'>
                       <Text fontSize='xl'  fontWeight='450'>Digital Marketing Interns needed</Text>
                       </Box>
                       
                       <Text>AfterFirst Media</Text>
                      
                       
                       <Text>Full Time Internship</Text>
                        
                       
                        <Text>Digital Marketing</Text>
                     
                       
                      
                       <Text>Ahmedabad</Text>
                       
                       
                       <Text>Stipend: 10000 per month</Text>

                      
                     
                     
                      </Flex>
                      <Spacer/>
                   

                     <Box w='300px' mt='2%'>
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
                   <Box w='10%' ml='5%'>
                    <Image src='https://assets.interntheory.com/uploads/company/logos/7b122f8459f847f0ae7c5a6f902a748944675bf9.jpg'/>
                   </Box>

                   <Flex gap='120px'>
                 
                   <Flex       
            aligItems= 'left'
            justifyContent= 'left'
            flexDirection= 'column'
            textAlign= 'left'
            w='90%'
           ml='11%'
           
           >
                      <Box w='100%'>
                       <Text fontSize='xl'  fontWeight='450'>Content intern</Text>
                       </Box>
                       
                       <Text>Global Supply Chain Group</Text>
                      
                       
                       <Text>Full Time Internship</Text>
                        
                       
                        <Text>Content Writing</Text>
                     
                       
                      
                       <Text>Gurgaon</Text>
                       
                       
                       <Text>Stipend: 10000 per month</Text>

                      
                     
                     
                      </Flex>
                      <Spacer/>
                   

                     <Box w='300px' mt='2%'>
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
                   <Box w='10%'  ml='5%'>
                    <Image src='https://assets.interntheory.com/uploads/company/logos/7b122f8459f847f0ae7c5a6f902a748944675bf9.jpg'/>
                   </Box>

                   <Flex gap='120px'>
                 
                   <Flex       
            aligItems= 'left'
            justifyContent= 'left'
            flexDirection= 'column'
            textAlign= 'left'
            w='90%'
           ml='11%'
           
           >
                      <Box w='100%'>
                       <Text fontSize='xl'  fontWeight='450'>Social Media Intern</Text>
                       </Box>
                       
                       <Text>GypsyMoth LLP</Text>
                      
                       
                       <Text>Full Time Internship</Text>
                        
                       
                        <Text>Advertising</Text>
                     
                       
                      
                       <Text>Mumbai</Text>
                       
                       
                       <Text>Stipend: 10000 per month</Text>

                      
                     
                     
                      </Flex>
                      <Spacer/>
                   

                     <Box w='300px' mt='2%'>
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
                   <Box w='10%'  ml='5%'>
                    <Image src='https://assets.interntheory.com/uploads/company/logos/ce621fc8bc71e12c2356f869eb640cdee89ce235.jpg'/>
                   </Box>

                   <Flex gap='110px'>
                 
                   <Flex       
            aligItems= 'left'
            justifyContent= 'left'
            flexDirection= 'column'
            textAlign= 'left'
            w='90%'
           ml='11%'
           
           >
                      <Box w='100%'>
                       <Text fontSize='xl'  fontWeight='450'>Digital Marketing Intern</Text>
                       </Box>
                       
                       <Text>As Webworks</Text>
                      
                       
                       <Text>Work From Home Internship</Text>
                        
                       
                        <Text>Digital Marketing</Text>
                     
                       
                      
                       <Text>Pune,Mumbai,Nashik</Text>
                       
                       
                       <Text>Stipend: None</Text>

                      
                     
                     
                      </Flex>
                      <Spacer/>
                   

                     <Box w='300px' mt='2%'>
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


            <VStack  ml='20%'>
               <Box>
               
                 <HStack ml='15%'>
                   <Box w='10%'  ml='5%'>
                    <Image src='https://assets.interntheory.com/uploads/company/logos/ce621fc8bc71e12c2356f869eb640cdee89ce235.jpg'/>
                   </Box>

                   <Flex gap='120px'>
                 
                   <Flex       
            aligItems= 'left'
            justifyContent= 'left'
            flexDirection= 'column'
            textAlign= 'left'
            w='90%'
           ml='11%'
           
           >
                      <Box w='100%'>
                       <Text fontSize='xl'  fontWeight='450'>Graphic Intern</Text>
                       </Box>
                       
                       <Text>Listed Fans</Text>
                      
                       
                       <Text>Full Time Internship</Text>
                        
                       
                        <Text>Graphic Designing</Text>
                     
                       
                      
                       <Text>Delhi</Text>
                       
                       
                       <Text>Stipend: 15000 per month</Text>

                      
                     
                     
                      </Flex>
                      <Spacer/>
                   

                     <Box w='300px' mt='2%'>
                      <VStack spacing='7'>
                        <Text>4-6 Weeks</Text>
                        <BsFillShareFill size={'30px'}/>
                        <Text color='blue' fontSize='md' fontWeight='500' >UPGRADE SKILLS</Text>
                        </VStack>

                     </Box>
                     </Flex>
                 </HStack>
               </Box>

               <Text>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</Text>

               <Box  h='70px'>
              <Button mt='20%' color={'blue'}  variant='link' rightIcon={<ChevronDownIcon/>}>SEE MORE </Button>
              
            </Box>
            </VStack>


            
            <VStack  ml='20%'>
               <Box>
               
                 <HStack ml='15%'>
                   <Box w='10%'  ml='5%'>
                    <Image src='https://assets.interntheory.com/uploads/company/logos/ce621fc8bc71e12c2356f869eb640cdee89ce235.jpg'/>
                   </Box>

                   <Flex gap='120px'>
                 
                   <Flex       
            aligItems= 'left'
            justifyContent= 'left'
            flexDirection= 'column'
            textAlign= 'left'
            w='90%'
           ml='11%'
           
           >
                      <Box w='100%'>
                       <Text fontSize='xl'  fontWeight='450'>Graphic Intern</Text>
                       </Box>
                       
                       <Text>Listed Fans</Text>
                      
                       
                       <Text>Full Time Internship</Text>
                        
                       
                        <Text>Graphic Designing</Text>
                     
                       
                      
                       <Text>Delhi</Text>
                       
                       
                       <Text>Stipend: 15000 per month</Text>

                      
                     
                     
                      </Flex>
                      <Spacer/>
                   

                     <Box w='300px' mt='2%'>
                      <VStack spacing='7'>
                        <Text>4-6 Weeks</Text>
                        <BsFillShareFill size={'30px'}/>
                        <Text color='blue' fontSize='md' fontWeight='500' >UPGRADE SKILLS</Text>
                        </VStack>

                     </Box>
                     </Flex>
                 </HStack>
               </Box>

               <Text>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</Text>

          
            </VStack>

            <VStack  ml='20%'>
               <Box>
               
                 <HStack ml='15%'>
                   <Box w='10%'  ml='5%'>
                    <Image src='https://assets.interntheory.com/uploads/company/logos/ce621fc8bc71e12c2356f869eb640cdee89ce235.jpg'/>
                   </Box>

                   <Flex gap='120px'>
                 
                   <Flex       
            aligItems= 'left'
            justifyContent= 'left'
            flexDirection= 'column'
            textAlign= 'left'
            w='90%'
           ml='11%'
           
           >
                      <Box w='100%'>
                       <Text fontSize='xl'  fontWeight='450'>Graphic Intern</Text>
                       </Box>
                       
                       <Text>Listed Fans</Text>
                      
                       
                       <Text>Full Time Internship</Text>
                        
                       
                        <Text>Graphic Designing</Text>
                     
                       
                      
                       <Text>Delhi</Text>
                       
                       
                       <Text>Stipend: 15000 per month</Text>

                      
                     
                     
                      </Flex>
                      <Spacer/>
                   

                     <Box w='300px' mt='2%'>
                      <VStack spacing='7'>
                        <Text>4-6 Weeks</Text>
                        <BsFillShareFill size={'30px'}/>
                        <Text color='blue' fontSize='md' fontWeight='500' >UPGRADE SKILLS</Text>
                        </VStack>

                     </Box>
                     </Flex>
                 </HStack>
               </Box>

               <Text>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</Text>

          
            </VStack>


            <VStack  ml='20%'>
               <Box>
               
                 <HStack ml='15%'>
                   <Box w='10%'  ml='5%'>
                    <Image src='https://assets.interntheory.com/uploads/company/logos/ce621fc8bc71e12c2356f869eb640cdee89ce235.jpg'/>
                   </Box>

                   <Flex gap='120px'>
                 
                   <Flex       
            aligItems= 'left'
            justifyContent= 'left'
            flexDirection= 'column'
            textAlign= 'left'
            w='90%'
           ml='11%'
           
           >
                      <Box w='100%'>
                       <Text fontSize='xl'  fontWeight='450'>Graphic Intern</Text>
                       </Box>
                       
                       <Text>Listed Fans</Text>
                      
                       
                       <Text>Full Time Internship</Text>
                        
                       
                        <Text>Graphic Designing</Text>
                     
                       
                      
                       <Text>Delhi</Text>
                       
                       
                       <Text>Stipend: 15000 per month</Text>

                      
                     
                     
                      </Flex>
                      <Spacer/>
                   

                     <Box w='300px' mt='2%'>
                      <VStack spacing='7'>
                        <Text>4-6 Weeks</Text>
                        <BsFillShareFill size={'30px'}/>
                        <Text color='blue' fontSize='md' fontWeight='500' >UPGRADE SKILLS</Text>
                        </VStack>

                     </Box>
                     </Flex>
                 </HStack>
               </Box>

               <Text>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</Text>

          
            </VStack>


            <VStack  ml='20%'>
               <Box>
               
                 <HStack ml='15%'>
                   <Box w='10%'  ml='5%'>
                    <Image src='https://assets.interntheory.com/uploads/company/logos/ce621fc8bc71e12c2356f869eb640cdee89ce235.jpg'/>
                   </Box>

                   <Flex gap='120px'>
                 
                   <Flex       
            aligItems= 'left'
            justifyContent= 'left'
            flexDirection= 'column'
            textAlign= 'left'
            w='90%'
           ml='11%'
           
           >
                      <Box w='100%'>
                       <Text fontSize='xl'  fontWeight='450'>Graphic Intern</Text>
                       </Box>
                       
                       <Text>Listed Fans</Text>
                      
                       
                       <Text>Full Time Internship</Text>
                        
                       
                        <Text>Graphic Designing</Text>
                     
                       
                      
                       <Text>Delhi</Text>
                       
                       
                       <Text>Stipend: 15000 per month</Text>

                      
                     
                     
                      </Flex>
                      <Spacer/>
                   

                     <Box w='300px' mt='2%'>
                      <VStack spacing='7'>
                        <Text>4-6 Weeks</Text>
                        <BsFillShareFill size={'30px'}/>
                        <Text color='blue' fontSize='md' fontWeight='500' >UPGRADE SKILLS</Text>
                        </VStack>

                     </Box>
                     </Flex>
                 </HStack>
               </Box>

               <Text>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</Text>

          
            </VStack>

       </Box>


       
      </Box>

        
        </>
       )
  }

    export default Intern;