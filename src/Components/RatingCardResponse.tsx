import * as React from 'react';
import {Button, Card, Layout} from './';
import {CONSTANTA} from '../contansta';
import ThankyouIllustration from '../assets/illustration-thank-you.svg';

interface RatingCardResponseProps {
  rating: number;
}

const RatingCardResponse: React.FC<RatingCardResponseProps> = ({rating}) => {
  return (
    <Layout>
      <Card.Container>
        <Card.CardHeader gap={20}>
          <img src={ThankyouIllustration} alt='Thank You' />
          <Button
            width='fit-content'
            color={CONSTANTA.COLOR.ORANGE}
            backgroundColor={CONSTANTA.COLOR.DARKBLUE}
          >
            You selected {rating + 1} out of 5
          </Button>
        </Card.CardHeader>
        <Card.CardTitle textAlign='center'>Thank you!</Card.CardTitle>
        <Card.CardContent gap={40} textAlign='center'>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </Card.CardContent>
      </Card.Container>
    </Layout>
  );
};

export default RatingCardResponse;
