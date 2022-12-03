import { Button, useClipboard } from '@chakra-ui/react';
import { useEffect } from 'react';

export function CodeCopy({ children }) {
  const { onCopy, setValue, hasCopied } = useClipboard('');

  useEffect(() => {
    setValue(children[0].props.children[0]);
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
    >
      {hasCopied ? 'Copied!' : 'Copy'}
    </Button>
  );
}
