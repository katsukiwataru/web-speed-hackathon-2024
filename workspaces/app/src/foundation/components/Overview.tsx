import { useSetAtom } from 'jotai';
import React, { useId, useState } from 'react';
import styled from 'styled-components';

import { DialogContentAtom } from '../atoms/DialogContentAtom';
import { Color, Space, Typography } from '../styles/variables';

import { Button } from './Button';
import { Spacer } from './Spacer';
import { Text } from './Text';

const _Button = styled(Button)`
  color: ${Color.MONO_A};
`;

const _Content = styled.section`
  white-space: pre-line;
`;

export const Overview: React.FC = () => {
  const overviewDialogA11yId = useId();
  const [isClient, setIsClient] = useState(false);
  const updateDialogContent = useSetAtom(DialogContentAtom);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = async () => {
    const text = await fetch('/assets/content/overview.txt').then((res) => res.text());
    updateDialogContent(
      <_Content aria-labelledby={overviewDialogA11yId} role="dialog">
        <Text as="h2" color={Color.MONO_100} id={overviewDialogA11yId} typography={Typography.NORMAL16}>
          Cyber TOONとは
        </Text>
        <Spacer height={Space * 1} />
        <Text as="p" color={Color.MONO_100} typography={Typography.NORMAL12}>
          {text}
        </Text>
      </_Content>,
    );
  };

  return (
    <_Button disabled={!isClient} onClick={handleClick}>
      Cyber TOONとは
    </_Button>
  );
};
