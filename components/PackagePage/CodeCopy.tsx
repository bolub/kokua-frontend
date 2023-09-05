import { Button, useClipboard } from '@chakra-ui/react';
import { ReactNode, useEffect } from 'react';

export function CodeCopy({ children }: { children: any }) {
  const { onCopy, setValue, hasCopied } = useClipboard('');

  useEffect(() => {
    setValue(children[0]?.props?.children[0]);
  }, [children, setValue]);

  return (
    <Button
      size='sm'
      onClick={onCopy}
      pos='absolute'
      top='14px'
      right='10px'
      colorScheme='black'
      bgColor='black'
      fontFamily='figtree'
      borderRadius='8px'
      py='8px'
      px='14px'
      fontWeight='semibold'
    >
      {hasCopied ? 'Copied!' : 'Copy'}
    </Button>
  );
}
