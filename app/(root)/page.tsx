import React from 'react';
import HeaderBox from '../../components/HeaderBox';
import TotalBalanceBox from '../../components/TotalBalanceBox';
import RightSidebar from '../../components/RightSidebar';

const Home = () => {
  const loggedIn = {
    firstName: 'Vicente',
    lastName: 'JSM',
    email: 'matavic25@gmail.com',
  } as User;
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Access & manage your account and transactions efficiently.'
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[{}, {}]}
        banks={[{ currentBalance: 123.5 }, {}]}
      />
    </section>
  );
};

export default Home;
