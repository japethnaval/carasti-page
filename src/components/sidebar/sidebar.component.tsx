import { Avatar, Button, Flex, Image, Text } from '@chakra-ui/react'
import getImageUrl from '@util/get-image-url'
import { startCase } from 'lodash'
import { FC } from 'react'

export const Sidebar: FC = () => {
  const buttons = [
    'profile-icon.svg',
    'bookings-icon.svg',
    'wallet-icon.svg',
    'settings-icon.svg',
    'support-icon.svg',
  ]

  return (
    <Flex
      background="white"
      direction="column"
      justifyContent="space-between"
      h="fill-available"
    >
      <Flex direction="column">
        {buttons.map((src) => (
          <Button
            aria-selected={src.includes('profile')}
            _selected={{
              fontWeight: 700,
              color: '#101828',
              background: '#F2F4F7',
            }}
            color="#344054"
            fontWeight={400}
            fontSize="16px"
            alignItems="center"
            justifyContent="flex-start"
            leftIcon={
              <Image
                objectFit="contain"
                width={{
                  sm: '16px',
                }}
                src={getImageUrl(`sidebar/${src}`)}
              />
            }
            colorScheme="white"
            _hover={{
              background: '#F2F4F7',
            }}
            _active={{
              background: '#F2F4F7',
            }}
          >
            {startCase(src.split('-')[0])}
          </Button>
        ))}
      </Flex>
      <Flex alignItems="center" gap="16px" justifyContent="center">
        <Avatar
          w="40px"
          h="40px"
          name="Megan Smith"
          src="https://bit.ly/tioluwani-kolawole"
        />
        <Flex direction="column">
          <Text
            fontSize={{
              base: '8px',
              md: '14px',
            }}
            fontWeight={500}
            color="#344054"
          >
            Megan Smith
          </Text>
          <Text
            fontSize={{
              base: '8px',
              md: '14px',
            }}
            fontWeight={300}
            color="#344054"
          >
            megan@info.com
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Sidebar
