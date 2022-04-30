import React from 'react';
import { logout } from '../../spotify/SpotifyAuth';
import PremiumNotice from './PremiumNotice';

const Dashboard = ({account}) => {

    const checkPremium = () => {
        if (account?.product === "premium") {
          return true;
        } else {
          return false;
        }
      }

      console.log(account)

    return (
        <div style={{paddingTop: 100, paddingLeft: 600}}>
          {
            account && checkPremium ? (
              <div>
                <h1>Welcome {account?.display_name}</h1>
              <button onClick={logout}>
                Logout
              </button>
              </div>
            ) : (
              <PremiumNotice />
            )
          } 
        </div>
    );
};

export default Dashboard;
