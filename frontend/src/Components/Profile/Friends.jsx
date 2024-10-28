import React from "react";
import FriendCard from "./friendCard";

const dataset = [
  {
    avatar: "src/public/man.png",
    name: "Pradeep",
    address: "Shahi Colony",
    mobile: 9865372813,
  },
  {
    avatar: "src/public/profile.png",
    name: "Mohan",
    address: "Bawri Pul",
    mobile: 8732538292,
  },
];

const Friends = () => {
  return (
    <div className="max-w-[78vw] h-[90.8vh] p-8">
      <h1 className="title text-[36px] font-bold font-noto">Friends</h1>
      <div className="cards flex">
        {dataset.map((person, index) => (
          <FriendCard
            key={index}
            avatar={person.avatar}
            name={person.name}
            address={person.address}
            mobile={person.mobile}
          />
        ))}
      </div>
    </div>
  );
};

export default Friends;
