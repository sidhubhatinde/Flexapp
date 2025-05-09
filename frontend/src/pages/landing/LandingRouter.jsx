import React from 'react'
import Home from '../home/Home'
import FindWork from '../findwork/FindWork';
import ClientLanding from './ClientLanding';

function LandingRouter() {

    const user ={
        name:"Ammar",
        role:"freelancer"
    }
    // let user;

    if (!user) {
        return <Home />;
      }
    
      if (user.role === "freelancer") {
        return <FindWork />;
      }
    
      if (user.role === "client") {
        return <ClientLanding />;
      }
  
}

export default LandingRouter