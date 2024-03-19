/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/button-has-type */
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { AppContext } from '@context/app.context'
import getImageUrl from '@util/get-image-url'
import { get } from 'lodash'
import React, { ChangeEventHandler, useContext, useRef } from 'react'

const Rescan = ({
  id,
  title,
  subTitle,
  upload,
}: {
  upload:
    | {
        file: File
        id: string
      }
    | undefined
  id: string
  title: string
  subTitle: string
}) => {
  const hiddenFileInput = useRef<any>(null)
  const { addToFiles } = useContext(AppContext)

  const handleClick = () => {
    if (hiddenFileInput) {
      hiddenFileInput!.current.click()
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = get(event, 'target.files.0')
    if (fileUploaded) {
      addToFiles({ id, file: fileUploaded })
    }
  }

  return (
    <Box w="367px">
      <Flex
        key={id}
        background="#F7F8F9"
        h="67px"
        padding="12px"
        alignItems="center"
        gap="8px"
      >
        {upload && upload.file.type === 'image/jpeg' ? (
          <Image w="45px" h="32px" src={URL.createObjectURL(upload.file)} />
        ) : (
          <Box w="45px" h="32px" background="white" />
        )}
        <Flex direction="column" justifyContent="center">
          <Flex gap="8px">
            <Text
              color="#101828"
              fontSize="16px"
              fontWeight={400}
              lineHeight="20px"
            >
              {title}
            </Text>
            {upload && upload.file.type === 'application/pdf' && (
              <Image
                objectFit="contain"
                w="20px"
                h="20px"
                src={getImageUrl('check-icon.svg')}
              />
            )}
          </Flex>
          <Text
            color="#475467"
            fontSize="14px"
            fontWeight={400}
            lineHeight="20px"
          >
            {subTitle}
          </Text>
        </Flex>
        <Button
          onClick={handleClick}
          fontSize="16px"
          fontWeight={400}
          background="#EAECF0"
          border="1px solid #EAECF0"
          marginLeft="auto"
          size="sm"
          colorScheme="gray"
        >
          Rescan
        </Button>
      </Flex>

      <input
        ref={hiddenFileInput}
        type="file"
        name="file"
        accept="image/*, application/pdf"
        style={{ display: 'none' }}
        onChange={
          handleChange as unknown as ChangeEventHandler<HTMLInputElement>
        }
      />
    </Box>
  )
}

export default Rescan
