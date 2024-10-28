import React from "react";

function FriendCard({ avatar, name, address, mobile }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-6 m-4 text-center bg-yellow-400">
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-bold mb-2 text-[#0015ff] font-poppin">
        {name}
      </h2>
      <p className="text-gray-700 mb-2 font-bold">{address}</p>
      <p className="text-gray-700 mb-4">{mobile}</p>
      <div className="flex justify-center space-x-2">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          -₹650
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          +₹876
        </button>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Settle Now
      </button>
    </div>
  );
}

export default FriendCard;
