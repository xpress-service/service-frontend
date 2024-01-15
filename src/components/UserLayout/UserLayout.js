import React from 'react';
import UserSideNav from '../UserSideNav/UserSideNav';
import UserHeader from '../UserHeader/UserHeader';

// const UserLayout = ({ children }) => {
//   return (
//     <div className="flex h-screen">
//       <UserSideNav />
//       <div className="flex flex-col flex-1">
//         <UserHeader />
//         <main className="bg-[#FF9B05] flex items-center justify-center h-screen w-full">
//           <div className="w-[976px] items-center justify-center py-4 rounded-3xl">
//             {children}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default UserLayout;

const UserLayout = ({ children }) => {
  return (
    <div className="flex bg-[#FF9B05] py-2 px-6">
      {/* UserSideNav */}
      <UserSideNav />

      <div className="flex flex-col flex-1 h-screen px-6 ml-48">
        {/* UserHeader */}
        <UserHeader />

        <main className="h-screen flex items-center justify-center flex-1">
          <div className="w-full max-w-[976px] px-4 md:px-8 py-4 rounded-3xl h-screen ">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserLayout;