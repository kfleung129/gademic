import { Heading, Text, Box, Flex, Button, Spacer } from '@chakra-ui/react' 

const NavBar = () => {
    return(
        <Box bgColor={'cyan.500'}>
            <Flex justifyContent={'center'}>
                <Button _hover={{bgColor:'cyan.300'}} borderRadius={0} p={3} fontSize={'15px'} fontWeight={'bold'}><a href='/'>Home</a></Button>
                <Button _hover={{bgColor:'cyan.300'}} borderRadius={0} p={3} fontSize={'15px'} fontWeight={'bold'}>Find tutor</Button>
                <Button _hover={{bgColor:'cyan.300'}} borderRadius={0} p={3} fontSize={'15px'} fontWeight={'bold'}>Ask Homework</Button>
                <Button _hover={{bgColor:'cyan.300'}} borderRadius={0} p={3} fontSize={'15px'} fontWeight={'bold'}>Book shop</Button>
                <Spacer/>
                <Button borderRadius={0} bgColor={'cyan.900'} p={3} fontSize={'15px'} fontWeight={'bold'}><a href={window.location.pathname === '/login/' ? '.' : '/login/'}>Login</a></Button>
            </Flex>
        </Box>
    );
}

export default NavBar