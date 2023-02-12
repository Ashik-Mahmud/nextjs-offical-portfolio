type Props = {};

const Card = (props: Props) => {
  return (
    <div className="bg-white p-2 rounded-md">
      <div className="card-image w-full p-1">
        <img
          src={
            "https://raw.githubusercontent.com/Ashik-Mahmud/nextjs-official-portfolio/main/preview.png"
          }
          alt="Picture-of-the-author"
          className="w-full h-full rounded-md"
        />
      </div>
      <div className="card-details p-2">
        <h3 className="text-lg my-1 font-medium">
          <a href="#">House Renting Houses</a>
        </h3>
        <p className="text-xs text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quae.
        </p>
        <div className="card-footer">
          <div className="card-tags text-xs flex flex-wrap items-center gap-1 my-2">
            <span className="bg-gray-100 p-1 px-2 text-gray-600">Next.js</span>
            <span className="bg-gray-100 p-1 px-2 text-gray-600">React</span>
            <span className="bg-gray-100 p-1 px-2 text-gray-600">Node.js</span>
          </div>
          <div className="card-links flex items-center gap-2 text-xs">
            <a href="#" className="hover:underline hover:text-blue-500">
              Github
            </a>
            <a href="#" className="hover:underline hover:text-blue-500">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
