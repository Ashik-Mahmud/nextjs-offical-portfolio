import React from "react";

type Props = {};

const AchievementCard = (props: Props) => {
  return (
    <div className="flex items-start justify-start gap-7 p-3 my-2 bg-[#ffffffae] backdrop-blur-md rounded border">
      <div className="flex items-center justify-between w-60">
        <img
          className="w-40 h-40 rounded object-cover border"
          src="https://raw.githubusercontent.com/Ashik-Mahmud/nextjs-official-portfolio/main/preview.png"
          alt="profile"
        />
      </div>
      <div className="flex flex-wrap gap-1 mt-2 flex-col items-start">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-medium">Programming Hero Certificate</h3>
          <p className="text-sm text-gray-500">
            Achivements Description Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Repellendus beatae tempora deleniti quasi
            provident! Nihil voluptate quidem accusantium sequi! Aspernatur,
            nostrum hic quisquam sapiente officia maiores. Molestias veritatis
            optio eius! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur eius numquam ut, quasi explicabo consequatur nobis
            minima pariatur velit! Cum est perspiciatis sapiente omnis,
            reprehenderit facere quidem rem architecto similique.
          </p>
        </div>
        <a
          className="bg-blue-100  p-1 border rounded  text-xs "
          href="https://programming-hero.com/"
        >
          Certificate
        </a>
      </div>
    </div>
  );
};

export default AchievementCard;
