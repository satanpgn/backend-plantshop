import React from 'react';

const Profile = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '30px', border: '5px solid #ddd', borderRadius: '10px', maxWidth: '600px' }}>
        <h1 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>User Profile</h1>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png" // Placeholder image URL
            alt="Profile"
            style={{ height: '200px', width: '200px', borderRadius: '50%' }}
          />
          <a
            href="/editprofile"
            style={{
              marginTop: '20px',
            background: 'green',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            cursor: 'pointer',
            display: 'inline-block',
            textDecoration: 'none', // Remove underline from link
      }}
    >
      Edit
    </a>
        </div>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h2>Pankaj Singh</h2>
          <p>Email: pankaj123@gmail.com</p>
          <p>Location: Lazimpat, Ktm</p>
          <p>Age: 24</p>
          <p>Bio: Hey, I am Pankaj and I am Developer trying to develop a webiste for my business</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
