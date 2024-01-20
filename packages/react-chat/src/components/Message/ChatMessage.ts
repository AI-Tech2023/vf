import { styled } from '@/styles';

import { Container, tag } from './styled';

import 'katex/dist/katex.min.css'; // Import Katex CSS

export const ChatMessage = styled(tag(Container, 'chat'), {
  variants: {
    from: {
      system: {
        color: '$black',
        backgroundColor: '$lightGrey',
      },

      user: {
        color: '$white',
        backgroundColor: '$primary',
        whiteSpace: 'break-spaces',
      },
    },
  },
  defaultVariants: {
    from: 'system',
  },
});
