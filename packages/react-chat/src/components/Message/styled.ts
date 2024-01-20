import { ClassName } from '@/constants';
import { tagFactory } from '@/hocs';
import { styled } from '@/styles';

import 'katex/dist/katex.min.css'; // Import Katex CSS

export const tag = tagFactory(ClassName.MESSAGE);

export const Container = styled(tag('div'), {
  display: 'inline-block',
  boxSizing: 'border-box',
  padding: '10px 14px',
  borderRadius: '$1',
  typo: {},
  overflowWrap: 'anywhere',
});
