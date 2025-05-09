import React from 'react'
import FreelancerProfile from './FreelancerProfile';
import ClientProfile from './ClientProfile';

function Profile() {
  const user = {
    role:"freelancer"
  }
  return (
    <>
      {user.role === 'freelancer' ? (
        <FreelancerProfile />
      ) : user.role === 'client' ? (
        <ClientProfile />
      ) : (
        <p>Invalid user role</p>
      )}
    </>
  );
}

export default Profile