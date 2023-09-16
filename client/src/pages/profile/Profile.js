import React from 'react';
import UserProfile from '../../components/profiles/UserProfile';
import ProfileUpdate from '../../components/profiles/ProfileUpdate';
import MentorSearch from '../../components/profiles/MentorSearch';

const Profile = () => {
  return (
    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <UserProfile />
          <ProfileUpdate />
          <MentorSearch />
        </div>
      </div>
    </div>
  );
};

export default Profile;
