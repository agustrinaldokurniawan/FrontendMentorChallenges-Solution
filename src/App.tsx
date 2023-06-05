import * as React from 'react';
import {Layout} from './Components';
import RatingCard from './Components/RatingCard';
import RatingCardResponse from './Components/RatingCardResponse';

const App: React.FC = () => {
  const [activeMenu, setActiveMenu] = React.useState<number | null>(null);
  const [submit, setSubmit] = React.useState<boolean>(false);

  return (
    <Layout>
      {submit ? (
        <RatingCardResponse rating={activeMenu} />
      ) : (
        <RatingCard
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          setSubmit={setSubmit}
        />
      )}
    </Layout>
  );
};

export default App;
