import { bindVariants } from '@/utils/variants';

import { ChatMessage } from './ChatMessage';
import { MessageVariant } from './constants';
import DebugMessage from './DebugMessage';
import { Container } from './styled';

import 'katex/dist/katex.min.css'; // Import Katex CSS

const VARIANTS = {
  [MessageVariant.CHAT]: ChatMessage,
  [MessageVariant.DEBUG]: DebugMessage,
};

const Message = bindVariants(VARIANTS, MessageVariant.CHAT);

export default Object.assign(Message, {
  Variant: MessageVariant,

  Container,
  Chat: ChatMessage,
  Debug: DebugMessage,
});
