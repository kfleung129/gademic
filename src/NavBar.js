import { Heading, Text, Box, Flex, Button, Spacer } from '@chakra-ui/react' 
import { FaHome, FaSearch, FaQuestion, FaBook } from 'react-icons/fa'

const NavBar = () => {
    return(
        <Box bgColor={'cyan.500'}>
            <Flex justifyContent={'center'}>
                <Button leftIcon={<FaHome/>} _hover={{bgColor:'cyan.300'}} borderRadius={0} p={3} fontSize={'15px'} fontWeight={'bold'}><a href='/gademic/'>Home</a></Button>
                <Button leftIcon={<FaSearch/>} _hover={{bgColor:'cyan.300'}} borderRadius={0} p={3} fontSize={'15px'} fontWeight={'bold'}>Find tutor</Button>
                <Button leftIcon={<FaQuestion/>} _hover={{bgColor:'cyan.300'}} borderRadius={0} p={3} fontSize={'15px'} fontWeight={'bold'}>Ask Homework</Button>
                <Button leftIcon={<FaBook/>} _hover={{bgColor:'cyan.300'}} borderRadius={0} p={3} fontSize={'15px'} fontWeight={'bold'}>Book shop</Button>
                <Spacer/>
                <Button borderRadius={0} bgColor={'cyan.900'} p={3} fontSize={'15px'} fontWeight={'bold'}><a href={window.location.pathname === '/gademic/login/' ? '.' : '/gademic/login/'}>Login</a></Button>
            </Flex>
        </Box>
    );
}

export default NavBar