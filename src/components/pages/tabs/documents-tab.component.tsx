/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Box, Divider, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import FileRescan from '@components/file-rescan/file-rescan.component'
import { AppContext } from '@context/app.context'
import { startCase } from 'lodash'
import { FC, useContext } from 'react'

export const DocumentsTab: FC = () => {
  const { files } = useContext(AppContext)
  const people = [
    {
      id: 'person_1',
      name: 'Megan Smith',
      jobTitle: 'Megan Murphy',
      imageSrc: 'https://bit.ly/tioluwani-kolawole',
      documents: [
        {
          id: '1a',
          title: 'Driving License',
          subTitle: 'Front',
        },
        {
          id: '2a',
          title: 'Driving License',
          subTitle: 'Front',
        },
        {
          id: '3a',
          title: 'Driving License',
          subTitle: 'Front',
        },
        {
          id: '4a',
          title: 'Driving License',
          subTitle: 'Front',
        },
      ],
    },
    {
      id: 'person_2',
      name: 'Megan Smith2',
      jobTitle: 'Megan Murphy2',
      imageSrc: 'https://bit.ly/tioluwani-kolawole',
      documents: [
        {
          id: '1b',
          title: 'Driving License',
          subTitle: 'Front',
        },
        {
          id: '2b',
          title: 'Driving License',
          subTitle: 'Front',
        },
        {
          id: '3b',
          title: 'Driving License',
          subTitle: 'Front',
        },
        {
          id: '4b',
          title: 'Driving License',
          subTitle: 'Front',
        },
      ],
    },
  ]

  return (
    <Box>
      <Flex direction="column" paddingBottom="16px">
        <Text
          color="#101828"
          fontSize="18px"
          fontWeight={600}
          lineHeight="28px"
        >
          All documents
        </Text>
        <Text
          color="#475467"
          fontSize="14px"
          fontWeight={400}
          lineHeight="20px"
        >
          Add and update all the documents here.
        </Text>
      </Flex>
      <Divider borderColor="#EAECF0" orientation="horizontal" />
      <SimpleGrid
        paddingBlock="32px"
        gridTemplateColumns={{
          base: 'min-content',
          md: '220px auto',
        }}
        columns={{
          base: 1,
          md: 2,
        }}
        overflow="auto"
        spacing="16px"
      >
        <>
          {people.map((item) => (
            <>
              <Box key={item.id} display="flex" gap="8px">
                <Avatar
                  w="36px"
                  h="36px"
                  name={startCase(item.name)}
                  src={item.imageSrc}
                />
                <Flex direction="column">
                  <Text
                    fontSize={{
                      md: '14px',
                    }}
                    fontWeight={500}
                    color="#344054"
                  >
                    {item.name}
                  </Text>
                  <Text
                    fontSize={{
                      md: '14px',
                    }}
                    fontWeight={300}
                    color="#344054"
                  >
                    {item.jobTitle}
                  </Text>
                </Flex>
              </Box>
              <Flex
                direction="column"
                gap="16px"
                flexFlow="row wrap"
                justifyContent="flex-start"
              >
                {item.documents.map((doc) => (
                  <FileRescan
                    upload={files.filter((f: any) => f.id === doc.id)[0]}
                    id={doc.id}
                    title={doc.title}
                    subTitle={doc.subTitle}
                  />
                ))}
              </Flex>
            </>
          ))}
        </>
      </SimpleGrid>
      {/* {people.map((item) => (
        <Flex
          key={item.id}
          direction="row"
          gap="16px"
          alignItems="flex-start"
          paddingBlock="32px"
          flexFlow="row wrap"
          justifyContent="flex-start"
        >
          <Flex gap="8px" alignItems="center" flex="0 0 210px">
            <Fragment key={item.id}>
              <Avatar
                w="36px"
                h="36px"
                name={startCase(item.name)}
                src={item.imageSrc}
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
                  {item.name}
                </Text>
                <Text
                  fontSize={{
                    base: '8px',
                    md: '14px',
                  }}
                  fontWeight={300}
                  color="#344054"
                >
                  {item.jobTitle}
                </Text>
              </Flex>
            </Fragment>
          </Flex>
          <Flex
            direction="column"
            gap="16px"
            flexFlow="row wrap"
            justifyContent="flex-start"
          >
            {item.documents.map((doc) => (
              <FileRescan
                upload={files.filter((f: any) => f.id === doc.id)[0]}
                id={doc.id}
                title={doc.title}
                subTitle={doc.subTitle}
              />
            ))}
          </Flex>
        </Flex>
      ))} */}
    </Box>
  )
}

export default DocumentsTab
