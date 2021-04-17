import React from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';

import Card, { CardTitle } from './Card';
import Button from './Button';

const QRCodeWrapper = styled.div`
  background-color: rgba(255, 129, 63, 0.05);
  border: 1px solid rgba(255, 129, 63, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 30px;

  img {
    margin-top: 20px;
    max-width: 60px;
  }
`;

export type DonationCardProps = {
  type?: string;
  username: string;
  address: string;
};

export default function DonationCard({
  type = 'kakaopay',
  username,
  address,
}: DonationCardProps): JSX.Element {
  return (
    <Card>
      <CardTitle>
        Buy <span>{username}</span> a coffee
      </CardTitle>
      <QRCodeWrapper>
        <QRCode value={address} />
        <img src={process.env.PUBLIC_URL + '/kakaopay.png'} alt='kakao pay' />
      </QRCodeWrapper>
      <Button href={address} target='_blank' rel='noopener noreferrer'>
        커피 한 잔 사주기
      </Button>
    </Card>
  );
}
