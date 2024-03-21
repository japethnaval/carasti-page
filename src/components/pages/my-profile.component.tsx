import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { AppContext, TabTypes } from '@context/app.context'
import { startCase } from 'lodash'
import { FC, useContext, useMemo } from 'react'

import DetailsTab from './tabs/details-tab.component'
import DocumentsTab from './tabs/documents-tab.component'

export const ProfilePage: FC = () => {
  const { activeTab, setactiveTab } = useContext(AppContext)

  const navigationButtons = [
    'details',
    'documents',
    'referral',
    'tolls & fines analytics',
    'plant a tree',
    'share rewards',
    'favourite cars',
  ]

  const renderActiveTab = useMemo(() => {
    switch (activeTab) {
      case 'details':
        return <DetailsTab />
      case 'documents':
        return <DocumentsTab />
      default:
        return <Text>Not yet available!</Text>
    }
  }, [activeTab])

  return (
    <Box>
      <Text
        paddingBottom={{
          base: '8px',
          md: '16px',
        }}
        fontWeight="bold"
        fontSize={{
          base: '16px',
          md: '32px',
        }}
      >
        My Profile
      </Text>
      <Flex
        padding="4px"
        gap="4px"
        background="#F9FAFB"
        border="1px solid #EAECF0"
        borderRadius="8px"
        marginBottom="32px"
        flexFlow="row wrap"
      >
        {navigationButtons.map((key) => (
          <Button
            h="36px"
            flex="1 1 170px"
            aria-selected={activeTab === key}
            onClick={() => setactiveTab(key as TabTypes)}
            background="inherit"
            _hover={{
              background: 'white',
              boxShadow: 'rgba(16, 24, 40, 0.3) 0px 2px 4px 0px',
            }}
            _selected={{
              background: 'white',
              boxShadow: 'rgba(16, 24, 40, 0.3) 0px 2px 4px 0px',
            }}
            _active={{
              background: 'white',
              boxShadow: 'rgba(16, 24, 40, 0.3) 0px 2px 4px 0px',
            }}
            key={key}
          >
            {startCase(key)}
          </Button>
        ))}
      </Flex>
      {renderActiveTab}
    </Box>
  )
}

export default ProfilePage
