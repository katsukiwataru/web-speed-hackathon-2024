import React from 'react';

import { Color, Space } from '../styles/variables';

import { Box } from './Box';
import { Company } from './Company';
import { Contact } from './Contact';
import { Flex } from './Flex';
import { Overview } from './Overview';
import { Question } from './Question';
import { Term } from './Term';

export const Footer: React.FC = () => {
  return (
    <Box as="footer" backgroundColor={Color.Background} p={Space * 1}>
      <Flex align="flex-start" direction="column" gap={Space * 1} justify="flex-start">
        <img alt="Cyber TOON" height={45} src="/assets/cyber-toon.svg" width={189} />
        <Flex align="start" direction="row" gap={Space * 1.5} justify="center">
          <Term />
          <Contact />
          <Question />
          <Company />
          <Overview />
        </Flex>
      </Flex>
    </Box>
  );
};
