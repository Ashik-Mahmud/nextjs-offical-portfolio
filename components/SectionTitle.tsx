type Props = {
  title: string;
  subTitle?: string;
};

const SectionTitle = ({ title, subTitle }: Props) => {
  return (
    <div className="title">
      <h1 className="text-3xl font-semibold font-amiri text-gray-700">
        {title}
      </h1>
      <p>{subTitle || " This is the section for particular Page"}</p>
      <div className="line w-full h-[2px] from-gray-400 bg-gradient-to-r  to-gray-100 mt-3"></div>
    </div>
  );
};

export default SectionTitle;
