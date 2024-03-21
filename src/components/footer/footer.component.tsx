import {
  Box,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import getImageUrl from '@util/get-image-url'
import { FC } from 'react'

export const Footer: FC = () => {
  const fontSize = useBreakpointValue({
    base: 'xs',
    md: '16px',
    lg: '16px',
  })

  return (
    <Box background="white">
      <Flex
        padding={{
          base: '64px',
        }}
      >
        <SimpleGrid
          columns={{ base: 2, md: 3 }}
          paddingBlock={{
            base: '16px',
          }}
          gridGap={{
            base: '32px',
            md: '64px',
          }}
          spacing="16px"
        >
          <Flex direction="column" gap={{ base: '4px', md: '16px' }}>
            <Text fontSize={fontSize}>How it works</Text>
            <Text fontSize={fontSize}>Available cars</Text>
            <Text fontSize={fontSize}>Plant a Tree</Text>
            <Text fontSize={fontSize}>Carasti for Business</Text>
            <Text fontSize={fontSize}>EVs</Text>
          </Flex>
          <Flex direction="column" gap={{ base: '4px', md: '16px' }}>
            <Text fontSize={fontSize}>About us</Text>
            <Text fontSize={fontSize}>News</Text>
            <Text fontSize={fontSize}>FAQs</Text>
            <Text fontSize={fontSize}>Contact us</Text>
          </Flex>
          <Flex direction="column" gap={{ base: '4px', md: '16px' }}>
            <Text fontSize={fontSize}>Terms & Conditions</Text>
            <Text fontSize={fontSize}>Privacy Policy</Text>
          </Flex>
        </SimpleGrid>
        <Flex
          direction="column"
          marginLeft="auto"
          gap={{ base: '4px', md: '16px' }}
          justifyContent={{
            base: 'flex-end',
            md: 'flex-start',
          }}
        >
          <Image objectFit="contain" src={getImageUrl('carasti-logo.svg')} />
          <Image
            objectFit="contain"
            src={getImageUrl('stores/google-store-logo.svg')}
          />
          <Image
            objectFit="contain"
            src={getImageUrl('stores/app-store-logo.svg')}
          />
        </Flex>
      </Flex>

      <Divider borderColor="#EAECF0" orientation="horizontal" />
      <Flex
        gap="16px"
        alignItems="center"
        paddingBlock="32px"
        paddingInline="64px"
      >
        <Image
          objectFit="contain"
          w="20px"
          h="20px"
          src={getImageUrl('socials/fb-logo.svg')}
        />
        <Image
          objectFit="contain"
          w="20px"
          h="20px"
          src={getImageUrl('socials/ig-logo.svg')}
        />
        <Image
          objectFit="contain"
          w="20px"
          h="20px"
          src={getImageUrl('socials/linkedin-logo.svg')}
        />
        <Image
          objectFit="contain"
          w="20px"
          h="20px"
          src={getImageUrl('socials/tiktok-logo.svg')}
        />
        <Text
          color="#667085"
          fontWeight={400}
          fontSize={{
            base: '7px',
            md: '16px',
          }}
        >
          © 2023 Carasti Holding LTD.
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
