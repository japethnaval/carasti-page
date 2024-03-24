/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/button-has-type */
import AvatarIcon from '@assets/Avatar.jpg'
import {
  Avatar,
  Box,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import getImageUrl from '@util/get-image-url'
import { get } from 'lodash'
import {
  ChangeEvent,
  ChangeEventHandler,
  DragEvent,
  useRef,
  useState,
} from 'react'

const ImageUploader = () => {
  const hiddenFileInput = useRef<any>(null)
  const [selectedImage, setSelectedImage] = useState<File | undefined>(
    undefined,
  )

  const fontSize = useBreakpointValue({
    base: 'xs',
    md: '16px',
    lg: '16px',
  })

  const handleClick = () => {
    if (hiddenFileInput) {
      hiddenFileInput!.current.click()
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = get(event, 'target.files.0')
    if (fileUploaded) {
      setSelectedImage(fileUploaded)
    }
  }

  const overrideEventDefaults = (event: DragEvent<HTMLElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }
  const handleDragAndDropFiles = (event: DragEvent<HTMLElement>) => {
    overrideEventDefaults(event)
    if (!event.dataTransfer) return

    const { files } = event.dataTransfer
    setSelectedImage(get(files, 0) as unknown as File)
  }

  return (
    <Flex
      w="fill-available"
      gap="16px"
      data-testid="imageUploader"
      flexDirection={{
        base: 'column',
        md: 'row',
      }}
      alignItems={{
        base: 'center',
        md: 'flex-start',
      }}
    >
      <Box>
        {selectedImage &&
        String(get(selectedImage, 'type')).includes('image') ? (
          <Avatar w="64px" h="64px" src={URL.createObjectURL(selectedImage)} />
        ) : (
          <Avatar w="64px" h="64px" src={AvatarIcon} />
        )}
      </Box>
      <Box
        border="2px solid #007BFF"
        borderRadius="12px"
        w="fill-available"
        padding="16px"
        h="126px"
        cursor="pointer"
        alignItems="center"
        data-testid="initiator"
        onClick={handleClick}
        onDrop={handleDragAndDropFiles}
        onDragEnter={overrideEventDefaults}
        onDragLeave={overrideEventDefaults}
        onDragOver={overrideEventDefaults}
      >
        <Flex direction="column" alignItems="center" position="relative">
          <Image
            objectFit="contain"
            w="40px"
            h="40px"
            src={getImageUrl('image-upload-icon.svg')}
          />

          <Flex gap="4px">
            <Text
              color="#007BFF"
              fontSize={fontSize}
              fontWeight={600}
              lineHeight="20px"
            >
              Click to upload
            </Text>
            <Text
              color="#475467"
              fontSize={fontSize}
              fontWeight={400}
              lineHeight="20px"
            >
              or drag and drop
            </Text>
          </Flex>
          <Text
            color="#475467"
            fontSize={fontSize}
            fontWeight={400}
            lineHeight="20px"
          >
            SVG, PNG, JPG or GIF (max. 800x400px)
          </Text>
          <Image
            position="absolute"
            right="-40px"
            top="40px"
            objectFit="contain"
            src={getImageUrl('jpg-icon.svg')}
          />
        </Flex>

        <input
          data-testid="fileInput"
          ref={hiddenFileInput}
          type="file"
          name="myImage"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={
            handleChange as unknown as ChangeEventHandler<HTMLInputElement>
          }
        />
      </Box>
    </Flex>
  )
}

export default ImageUploader
