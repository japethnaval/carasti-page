import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import getImageUrl from '@util/get-image-url'
import { FC } from 'react'

export const NavBar: FC = () => {
  const fontSize = useBreakpointValue({
    base: 'xs',
    md: 'sm',
    lg: 'sm',
  })
  return (
    <Flex
      marginBottom={{
        base: '16px',
        md: '32px',
      }}
      // boxShadow="0px 1px 8px 0px rgba(0,0,0,0.4)"
      background="white"
      height={{
        base: '48px',
        md: '72px',
      }}
      paddingInline={{
        base: '48px',
        md: '64px',
      }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Image
          objectFit="contain"
          width={{
            sm: '14px',
            md: '80px',
            lg: '120px',
          }}
          src={getImageUrl('carasti-logo.svg')}
        />
      </Box>

      <Flex
        gap={{
          base: '8px',
          md: '16px',
        }}
        alignItems="center"
      >
        <Menu>
          <MenuButton
            paddingInline={0}
            _hover={{
              background: 'inherit',
            }}
            _focus={{
              background: 'inherit',
            }}
            _active={{
              background: 'inherit',
            }}
            background="white"
            h="fit-content"
            fontWeight={400}
            as={Button}
            rightIcon={
              <Image
                objectFit="contain"
                src={getImageUrl('chevron-down.svg')}
              />
            }
          >
            <Text fontSize={fontSize}> Browse Cars</Text>
          </MenuButton>
          <MenuList
            _active={{
              background: 'gray',
            }}
          >
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            paddingInline={0}
            _hover={{
              background: 'inherit',
            }}
            _focus={{
              background: 'inherit',
            }}
            _active={{
              background: 'inherit',
            }}
            background="white"
            h="fit-content"
            fontWeight={400}
            as={Button}
            rightIcon={
              <Image
                objectFit="contain"
                src={getImageUrl('chevron-down.svg')}
              />
            }
          >
            <Text fontSize={fontSize}> Help & Resources</Text>
          </MenuButton>
          <MenuList
            _active={{
              background: 'gray',
            }}
          >
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>

        <Text cursor="pointer" fontSize={fontSize}>
          Carasti for business
        </Text>

        <Text cursor="pointer" fontSize={fontSize}>
          Gift Vouchers
        </Text>

        <Menu>
          <MenuButton
            pointerEvents="initial"
            background="white"
            h="fit-content"
            fontWeight={400}
            as={Box}
          >
            <Flex background="#F2F3F5" cursor="pointer" borderRadius="200px">
              <Avatar
                w="40px"
                h="40px"
                name="Megan Smith"
                src="https://bit.ly/tioluwani-kolawole"
              />
              <Box
                w="30px"
                textAlign="center"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  objectFit="contain"
                  src={getImageUrl('chevron-down.svg')}
                />
              </Box>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}

export default NavBar
