import DashboardLayout from "@/components/layouts/DashboardLayout";

type Props = {};

const ProfilePage = (props: Props) => {
  return (
    <div>
      <div className="title font-amiri flex items-center justify-between">
        <h3 className="text-xl font-bold">Profile Page</h3>
      </div>
      <div className="profile-image">
        <img
          className="w-32 h-32 rounded-full object-cover border"
          src="/assets/images/me.jpg"
          alt="profile"
        />
        <h3 className="text-xl font-bold my-3">
          Ashik Mahmud{" "}
          <span className="text-sm font-normal">Full Stack Developer</span>
        </h3>
        <p className="text-sm font-normal">
          I am a full stack web developer. I have been working with web
          development for 2 years. I love to create web applications using
          modern technologies.
        </p>
      </div>
    </div>
  );
};

ProfilePage.getLayout = (page: React.ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default ProfilePage;
