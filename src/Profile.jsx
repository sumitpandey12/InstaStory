import React from "react";

const Profile = ({ user }) => {
  console.log(user);
  return (
    <div className="bg-white">
      <div className="max-w-lg mx-auto py-10 bg-white rounded-lg shadow-md">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src={user.profile_pic_url}
          alt="Profile picture"
          crossOrigin="anonymous"
        ></img>
        <h2 className="text-center text-sm mt-3 text-black">{user.username}</h2>
        <h2 className="text-center text-xl font-semibold mt-1 text-black">
          {user.full_name}
        </h2>
        <p className="text-center text-gray-600 mt-1">{user.category}</p>
        <ul className="flex gap-6 justify-center items-center my-5">
          <li className="flex flex-col items-center">
            <span className="text-black">{user.media_count}</span>
            <span className="text-black">posts</span>
          </li>
          <li className="flex flex-col items-center">
            <span className="text-black">{user.follower_count}</span>
            <span className="text-black">followers</span>
          </li>
          <li className="flex flex-col items-center">
            <span className="text-black">{user.following_count}</span>
            <span className="text-black">following</span>
          </li>
        </ul>
        <div className="flex justify-center mt-5">
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            Twitter
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            LinkedIn
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            GitHub
          </a>
        </div>
        <div className="mt-5">
          <p className="text-gray-600 mt-1">{user.biography}</p>
          <p className="text-gray-600 mt-1">Email: {user.public_email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
