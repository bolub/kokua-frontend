import {
  Box,
  chakra,
  Flex,
  VStack,
  Text,
  Link as ChakraLink,
  Container,
  Icon,
} from '@chakra-ui/react';
import { FC } from 'react';
import { ArrowSlant } from '../Assets/ArrowSlant';
import { Prose } from '@nikolovlazar/chakra-ui-prose';

// markdown
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CodeCopy } from './CodeCopy';
import rehypeRaw from 'rehype-raw';

const Pre = ({ children }) => (
  <pre>
    <CodeCopy>{children}</CodeCopy>
    {children}
  </pre>
);

const Content: FC<{
  data: string;
  packageUrl: string;
  contentIds?: string;
}> = ({ data, packageUrl, contentIds }) => {
  const ids = contentIds?.split(',');

  console.log(data);
  const contentData =
    data === '-' || !data
      ? 'Currently updating documentation, will be available soon, 😁'
      : data;

  return (
    <chakra.section py='80px'>
      <Container>
        <Flex gap='125px'>
          {/* Navigation */}
          <Box w='full' maxWidth='189px'>
            <Box position='sticky' top={16}>
              <Text fontWeight='semibold' color='text.100'>
                Example Usage
              </Text>

              <VStack mt='34px' align='start' spacing='16px'>
                {ids?.map((name, index) => {
                  const isActive = false;
                  console.log(name);
                  return (
                    <ChakraLink
                      key={index}
                      p='10px'
                      w='full'
                      fontSize='xs'
                      borderRadius='4px'
                      fontWeight={isActive ? 'bold' : 'normal'}
                      bgColor={isActive ? 'backgrounds.300' : 'white'}
                      href={`#${name}`}
                      textTransform='capitalize'
                    >
                      {name?.replace(/-/g, ' ')}
                    </ChakraLink>
                  );
                })}

                <ChakraLink
                  p='10px'
                  w='full'
                  fontSize='xs'
                  fontWeight='bold'
                  borderRadius='4px'
                  display='flex'
                  gap='6px'
                  href={packageUrl}
                  isExternal
                >
                  View Full documentation
                  <Icon width='14px' height='14px' as={ArrowSlant} />
                </ChakraLink>
              </VStack>
            </Box>
          </Box>

          {/* content */}
          <Box w='full'>
            <Prose>
              <ReactMarkdown
                //  eslint-disable-next-line
                children={contentData}
                components={{
                  pre: Pre,
                  code({ node, inline, className, children, ...props }) {
                    return (
                      <SyntaxHighlighter
                        //  eslint-disable-next-line
                        children={String(children).replace(/\n$/, '')}
                        //  @ts-ignore
                        style={coldarkDark}
                        customStyle={{
                          borderRadius: '6px',
                        }}
                        language={'javascript'}
                        PreTag='div'
                        showLineNumbers
                        {...props}
                      />
                    );
                  },
                }}
                rehypePlugins={[rehypeRaw]}
              />
              {/* <div dangerouslySetInnerHTML={{ __html: data }} /> */}
            </Prose>
          </Box>
        </Flex>
      </Container>
    </chakra.section>
  );
};

export default Content;
