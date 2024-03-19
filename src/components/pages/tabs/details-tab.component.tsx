import { Box, Button, Divider, Flex, Input, Text } from '@chakra-ui/react'
import UploadAndDisplayImage from '@components/image-uploader/image-uploader.component'
import { FC } from 'react'

export const DetailsTab: FC = () => (
  <Box>
    <Flex direction="column" paddingBottom="16px">
      <Text color="#101828" fontSize="18px" fontWeight={600} lineHeight="28px">
        Personal info
      </Text>
      <Text color="#475467" fontSize="14px" fontWeight={400} lineHeight="20px">
        Update your photo and personal details here.
      </Text>
    </Flex>
    <Divider borderColor="#EAECF0" orientation="horizontal" />
    <Flex paddingBlock="16px">
      <Text
        flex="0 1 325px"
        color="#101828"
        fontSize="14px"
        fontWeight={600}
        lineHeight="20px"
      >
        Name
      </Text>
      <Flex gap="16px">
        <Input placeholder="Placeholder" size="md" />
        <Input placeholder="Placeholder" size="md" />
      </Flex>
    </Flex>
    <Flex paddingBlock="16px">
      <Text
        flex="0 1 325px"
        color="#101828"
        fontSize="14px"
        fontWeight={600}
        lineHeight="20px"
      >
        Email address
      </Text>
      <Flex minW="525px">
        <Input placeholder="Placeholder" size="md" />
      </Flex>
    </Flex>
    <Divider borderColor="#EAECF0" orientation="horizontal" />
    <Flex paddingBlock="16px">
      <Text
        flex="0 1 325px"
        color="#101828"
        fontSize="14px"
        fontWeight={600}
        lineHeight="20px"
      >
        Name
      </Text>
      <Flex gap="16px">
        <Input placeholder="Placeholder" size="md" />
        <Input placeholder="Placeholder" size="md" />
      </Flex>
    </Flex>
    <Divider borderColor="#EAECF0" orientation="horizontal" />
    <Flex paddingBlock="16px">
      <Flex direction="column" flex="0 1 325px">
        <Text
          color="#101828"
          fontSize="14px"
          fontWeight={600}
          lineHeight="20px"
        >
          Your photo
        </Text>
        <Text
          color="#475467"
          fontSize="14px"
          fontWeight={400}
          lineHeight="20px"
        >
          This will be displayed on your profile.
        </Text>
      </Flex>
      <Flex minW="525px">
        <UploadAndDisplayImage />
      </Flex>
    </Flex>
    <Divider borderColor="#EAECF0" orientation="horizontal" />
    <Flex paddingBlock="16px">
      <Text
        flex="0 1 325px"
        color="#101828"
        fontSize="14px"
        fontWeight={600}
        lineHeight="20px"
      >
        Date of birth
      </Text>
      <Flex minW="525px">
        <Input placeholder="Placeholder" size="md" />
      </Flex>
    </Flex>
    <Divider borderColor="#EAECF0" orientation="horizontal" />
    <Flex paddingBlock="16px">
      <Text
        flex="0 1 325px"
        color="#101828"
        fontSize="14px"
        fontWeight={600}
        lineHeight="20px"
      >
        Phone number
      </Text>
      <Flex minW="525px">
        <Input placeholder="Placeholder" size="md" />
      </Flex>
    </Flex>
    <Divider borderColor="#EAECF0" orientation="horizontal" />
    <Flex gap="16px" padding="16px 32px" justifyContent="flex-end">
      <Button variant="outline" border="1px solid #D0D5DD" color="#344054">
        Cancel
      </Button>
      <Button background="#007BFF" color="white">
        Save
      </Button>
    </Flex>
  </Box>
)

export default DetailsTab
