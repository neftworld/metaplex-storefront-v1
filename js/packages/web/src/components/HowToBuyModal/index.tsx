import { InstructionsModal } from '../InstructionsModal';
import React from 'react';
import { LABELS } from '../../constants';

interface HowToBuyModalProps {
  buttonClassName: string;
  onClick?: any;
}

export const HowToBuyModal: React.FC<HowToBuyModalProps> = ({
  buttonClassName,
  onClick,
}) => {
  return (
    <InstructionsModal
      buttonClassName={buttonClassName}
      buttonText="How to Buy"
      modalTitle={`Buying NFTs on ${LABELS.STORE_NAME}`}
      cardProps={[
        {
          title: 'Purchase a Soul of Hidama',
          imgSrc: '/modals/how-to-buy-2.jpg',
          description: `Purchase a NFT from Magic Eden to start earning $CustomToken.`,
        },
        {
          title: 'Collect  $SAKE',
          imgSrc: '/modals/how-to-buy-1.jpg',
          description: `You can stake your NFT for $CustomToken..`,
        },
        {
          title: `Connect your wallet to ${LABELS.STORE_NAME}.`,
          imgSrc: '/modals/how-to-buy-3.jpg',
          description: `Connect your wallet to the site and start spending your $CustomToken.`,
          //endElement: <ConnectButton className={'secondary-btn'} />,
        },
      ]}
      onClick={onClick}
    />
  );
};
