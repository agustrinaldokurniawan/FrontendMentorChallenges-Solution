import * as React from 'react';
import {Card, RowBox, RoundButton, Button} from '.';
import StarSvg from '../assets/icon-star.svg';

interface RatingCardProps {
  activeMenu: number;
  setActiveMenu: React.Dispatch<React.SetStateAction<number>>;
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}

const RatingCard: React.FC<RatingCardProps> = ({
  activeMenu,
  setActiveMenu,
  setSubmit,
}) => {
  return (
    <Card.Container>
      <RoundButton>
        <img src={StarSvg} alt='star' />
      </RoundButton>
      <Card.CardTitle>How did we do?</Card.CardTitle>
      <Card.CardContent gap={40}>
        Please let us know how we did with your support request. All fedback is
        appreciated to help us improve our offering!
        <RowBox justifyContent='space-between'>
          {[...Array(5)].map((_, key) => (
            <RoundButton
              key={key}
              hover
              onClick={() => setActiveMenu(key === activeMenu ? null : key)}
              active={key === activeMenu}
            >
              {key + 1}
            </RoundButton>
          ))}
        </RowBox>
        <Button hover onClick={() => setSubmit(activeMenu ? true : false)}>
          SUBMIT
        </Button>
      </Card.CardContent>
    </Card.Container>
  );
};

export default RatingCard;
