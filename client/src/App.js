import React from 'react'
import { ChakraProvider, Heading, Box } from '@chakra-ui/react'

import Search from './components/Search'

const App = () => {
	return (
		<>
			<Box height='100vh' maxWidth='100vw' maxHeight='100vh' overflow='hidden'>
				<Heading align='center' as='h1' fontSize='5xl' mt='10rem'>
					Cules Search
				</Heading>

				<Search />
			</Box>
		</>
	)
}

export default App
