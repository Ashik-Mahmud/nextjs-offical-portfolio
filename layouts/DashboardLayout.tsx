import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      {/* sidebar here */}
      <aside>sidebar</aside>
      {/* main content here */}
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
