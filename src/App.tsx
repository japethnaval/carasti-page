import { Box, SimpleGrid } from '@chakra-ui/react'
import Footer from '@components/footer/footer.component'
import NavBar from '@components/navbar/navbar.component'
import ProfilePage from '@components/pages/my-profile.component'
import Sidebar from '@components/sidebar/sidebar.component'

const App = () => (
  <Box h="100vh">
    <NavBar />
    <SimpleGrid
      height={{
        base: 'auto',
        md: 'fill-available',
      }}
      padding={{
        base: '16px',
        md: '32px 16px',
      }}
      columns={{
        base: 1,
        md: 2,
      }}
      spacing="16px"
      gridTemplateColumns={{
        base: 'auto',
        md: '269px auto',
      }}
    >
      <Box background="white">
        <Sidebar />
      </Box>
      <Box
        height="fill-available"
        background="white"
        padding={{
          base: '16px',
          md: '32px',
        }}
      >
        <ProfilePage />
      </Box>
    </SimpleGrid>
    {/* <Flex h="fill-available" paddingInline="64px" gap="16px">
      <Box
        h="fill-available"
        w="269px"
        padding="32px 16px;"
        background="white"
        display={{
          md: 'static',
        }}
      >
        <Sidebar />
      </Box>
      <Box
        flex={1}
        h="fill-available"
        padding="32px"
        background="white"
        overflowY="scroll"
        overflowX="hidden"
      >
        <ProfilePage />
      </Box>
    </Flex> */}
    <Box marginTop="200px">
      <Footer />
    </Box>
  </Box>
)

export default App
