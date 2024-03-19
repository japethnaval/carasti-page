import { Box, Flex } from '@chakra-ui/react'
import Footer from '@components/footer/footer.component'
import NavBar from '@components/navbar/navbar.component'
import ProfilePage from '@components/pages/my-profile.component'
import Sidebar from '@components/sidebar/sidebar.component'

const App = () => (
  <Box h="100vh">
    <NavBar />
    <Flex h="fill-available" paddingInline="64px" gap="16px" overflow="hidden">
      <Box h="fill-available" w="269px" padding="32px 16px;" background="white">
        <Sidebar />
      </Box>
      <Box flex={1} h="fill-available" padding="32px" background="white">
        <ProfilePage />
      </Box>
    </Flex>
    <Box marginTop="200px">
      <Footer />
    </Box>
  </Box>
)

export default App
