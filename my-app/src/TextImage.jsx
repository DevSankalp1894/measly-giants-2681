
  import {Image,Grid,GridItem,Box,Flex,HStack,Text,Heading} from '@chakra-ui/react'
  import { AiFillNotification} from "react-icons/ai";
  function TextImage () {
      return (
        <>
        <Flex justifyContent='space-between'>
        <Box ml='20' top='750px' position='absolute'>
            
                    
                    <Heading>PLETHORA OF OPPORTUNITIES <span style={{color:'red'}}>FOR YOU </span> </Heading>
                    <hr/>
                    <Text>We are on a mission to connect employers to young talent all over India. With our strong</Text>
                    <Text>corporate network, it will no longer be a challenge to find the right internship for you</Text>
        </Box>
       <Box  ml='900px'  top='550px' position='absolute'>
        <Grid templateColumns='repeat(4, 1fr)' gap={10}>
  
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-1.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-2.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-3.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-4.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-6.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-7.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-8.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-9.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-10.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-11.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-12.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-13.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-14.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-15.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-16.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-17.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-18.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-19.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-20.png'/>
  <Image src='https://assets.interntheory.com/creative/home-logo/logo-21.png'/>

</Grid>
</Box>
</Flex>
    <Box>
        <Box mt='100px'  >
            <Heading>LET’S GET SOME <span style={{color:'red'}}>WORK EXPERIENCE</span></Heading>
        </Box>
        <Box w='90%' m='auto'>
            <Grid templateColumns='repeat(4, 1fr)' gap='10px'  mt='10'>
            <Box display='flex' gap='3' h='150px' 
                bgColor=' rgb(238, 238, 238)'
                   alignItem='center' justifyContent='center'>
                 <Image w='50px' h='50px' mt='50px' src='https://cdn-icons-png.flaticon.com/512/1317/1317336.png'/>
                 <Text fontSize='2xl' as='b' mt='50px'>MARKETING</Text> 

                </Box>
                <Box display='flex' gap='3' h='150px' 
                bgColor=' rgb(238, 238, 238)'
              alignItem='center' justifyContent='center'>
                 <Image w='50px' h='50px' mt='50px' src='https://orgozbusiness.com/wp-content/uploads/2020/05/ico_tres.png'/>
                 <Text w='52%'fontSize='2xl' as='b' mt='40px'>BUSINESS DEVELOPMENT</Text> 

                </Box>
              
                <Box display='flex' gap='3' h='150px' 
                 bgColor=' rgb(238, 238, 238)'
                   alignItem='center' justifyContent='center'>
                 <Image w='50px' h='50px' mt='50px' src='https://media.glassdoor.com/sql/542807/legacy-traditional-school-squareLogo-1639595613511.png'/>
                 <Text  w='50%' fontSize='2xl' as='b' mt='40px'>CONTENT WRITING</Text> 

                </Box>
              
                <Box display='flex' gap='3' h='150px' 
                bgColor=' rgb(238, 238, 238)'
                   alignItem='center' justifyContent='center'>
                 <Image borderRadius='50%'  w='50px' h='50px' mt='50px' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzf/wAARCABAADADASIAAhEBAxEB/8QAHAAAAgIDAQEAAAAAAAAAAAAABAUABgEDBwII/8QANBAAAgECBAQDBgQHAAAAAAAAAQIDBBEABRIhBjFBURMiYQcUFXGRoSMycoEmQkNiorHw/8QAGQEAAgMBAAAAAAAAAAAAAAAAAQMAAgQG/8QALBEAAQMBAwoHAAAAAAAAAAAAAQACEQMhMUEEEhNRYYGRobHRBSIyUsHh8P/aAAwDAQACEQMRAD8A6zc9ziXPc4xhTW5s1pBQBCkbiOSpdGdFcnTpVV3drkCwsL7XvtgEwrtYXXJvc9ziXPc4rUdXklVTrNU8SioVwHDCvEIsRcWCFfvviQT8PlWNNnctM42PiZg4ZdgQdEpPQg7ixviSVbNp+7lZ35Ky3Pc4lz3OK/RZyQ0gWpTM6WL89RDHZ0FyLkDyyC6sCU5W5YexSJLGkkTq8bgMrKbhgeRBxAUHMLbbwgc0kkkeHL6dyklTcu6neOJbaiPU3VR+q/TGyriy6myt4qyKnXL4Y/NHKF8MKOVwdvrjxT+fO61z/ThijX0vqY/7H0wTWUkVdAaecMUZlbysVIIIIII5bgYg1ovsAbv4/SW1kseW5Ma0mBHCJHG7EeFAHIVQOgQXF7cwPkMJuAloPhkmWUhR4IXeaIq6F4g0jCxKE2J06gb8mt/KcU7i3iT4ll8GWZdSeBQUcq+CdTO7oqlBcfI368hgn2YSOeKyFb8JqKW9j+Yh4+fy3+pwvSgugLcfDnNyY1nmDfGxdIysUYqa0QrS+/JIFqpIgutza6l7b3sevW+PMKfDcyECACkrCzRqBtHLzYD0YXa3cN3wRS5bS0lXU1UCsJag3kJckcydgTYbsTt3xrzsWoklBs0VRE6kfrAP1BI/fDDrWGkZObgbOyxGfBz2ZG295p0dPUoSG+zJgbi+qr6Ph6qnyoN7yunzKuoopYBmA7gXODcyppJ445KYhaqnfxISxsCbWKn0IJHpsemNmX1sVbEZIwVdG0yxPs0bdVYf9cWI2OBsVp9NSJiJ3fBC+f5S0k0jiUuxvIQWLBjzJY36knFs9lp/ivzAh2opWN/Vo/2+mAOKOH8zyWfxKpdcE1S2moVx+MTqbfe4Y2JPTY4Yey5JF4q3RQoopT5Vtbzx89zjM0EPAK6PKqjKmROey6MLsLP3Bdbwvzkl4qemW2uepjUD+1W1t/ip+2DZpo6eF5p5FjijGp3c2CjuTgGgWSsqjmM6NGmnRSxOLFUO5cjoWsNugA6k41HUubpiPOcOuCY4Dq8vjqJhURu9PVAaRPFYMR2YHZhz2ODMTBIlLa4tMhJ6ymrqqmakr6LL8xp2tqu7REkG48pDC/W+rGjLMslysOuVZNQ0hksJJZKlmYgcuSkm1+Vxh/iYrmpumsiBz6TCXx5aZZUmzKf3qRDqRNOmJD0IXe59SSe1sMMTEwQIS3PLr1//2Q=='/>
                 <Text w='50%' fontSize='2xl' as='b' mt='40px'>GRAPHIC DESIGN</Text> 

                </Box>
              
                <Box display='flex' gap='3' h='150px' 
                 bgColor=' rgb(238, 238, 238)'
                   alignItem='center' justifyContent='center'>
                 <Image w='50px' h='50px' mt='50px' src='https://ebc-jp.com/wpdata/wp-content/uploads/2020/03/icon-asset-management-1.png'/>
                 <Text fontSize='2xl' as='b' mt='50px'>FINANCE</Text> 

                </Box>
               
                <Box display='flex' gap='3' h='150px' 
                  bgColor=' rgb(238, 238, 238)'
                   alignItem='center' justifyContent='center'>
                 <Image  borderRadius='50%' w='50px' h='50px' mt='50px' src='https://thumbs.dreamstime.com/b/teamwork-icon-staff-partnership-three-person-vector-teamwork-icon-staff-partnership-three-person-stock-vector-121854045.jpg'/>
                 <Text w='50%'  fontSize='2xl' as='b' mt='40px'>HUMAN RESOURCE</Text> 

                </Box>
           
                <Box display='flex' gap='3' h='150px' 
                 bgColor=' rgb(238, 238, 238)'
                   alignItem='center' justifyContent='center'>
                 <Image w='50px' h='50px' mt='50px' borderRadius='50%' src='https://openclipart.org/image/800px/279030'/>
                 <Text fontSize='2xl' as='b' mt='50px'>ENGINEERING</Text> 

                </Box>
              
                <Box display='flex' gap='3' h='150px' 
                  bgColor='rgb(238, 238, 238)'
                   alignItem='center' justifyContent='center'>
                 <Image w='50px' h='50px' mt='50px' src='https://cdn-icons-png.flaticon.com/512/262/262226.png'/>
                 <Text w='50%'  fontSize='2xl' as='b' mt='40px'>ALL INTERNSHIP</Text> 

                </Box>

            </Grid>
        </Box>
    </Box>

        </>
      )
  }

    export default TextImage;