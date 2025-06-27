import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <aside className="fixed h-screen w-56 bg-gray-900 text-white flex flex-col py-4">
    <nav className="flex-1">
      <ul className="space-y-2">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-6 py-2 rounded transition ${
                isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `block px-6 py-2 rounded transition ${
                isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"
              }`
            }
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `block px-6 py-2 rounded transition ${
                isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"
              }`
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-learning"
            className={({ isActive }) =>
              `block px-6 py-2 rounded transition ${
                isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"
              }`
            }
          >
            My Learning
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-payments"
            className={({ isActive }) =>
              `block px-6 py-2 rounded transition ${
                isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"
              }`
            }
          >
            My Payments
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className="px-6 mt-auto">
      <span className="text-xs text-gray-400">© 2025 Cursus</span>
    </div>
  </aside>
);

export default Sidebar;


// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   const [open, setOpen] = useState(false);

//   const navLinks = (
//     <ul className="space-y-2">
//       <li>
//         <NavLink
//           to="/dashboard"
//           className={({ isActive }) =>
//             `block px-6 py-2 rounded transition ${
//               isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"
//             }`
//           }
//           onClick={() => setOpen(false)}
//         >
//           Dashboard
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/courses"
//           className={({ isActive }) =>
//             `block px-6 py-2 rounded transition ${
//               isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"
//             }`
//           }
//           onClick={() => setOpen(false)}
//         >
//           Courses
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/profile"
//           className={({ isActive }) =>
//             `block px-6 py-2 rounded transition ${
//               isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"
//             }`
//           }
//           onClick={() => setOpen(false)}
//         >
//           Profile
//         </NavLink>
//       </li>
//     </ul>
//   );

//   return (
//     <>
//       {/* Hamburger for mobile */}
//       <button
//         className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white rounded-full p-2 focus:outline-none shadow"
//         onClick={() => setOpen(!open)}
//         aria-label="Toggle sidebar"
//       >
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
//         </svg>
//       </button>

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed top-0 left-0 h-screen w-56 bg-gray-900 text-white flex flex-col py-4 z-40
//           transition-transform duration-300
//           -translate-x-full
//           md:translate-x-0 md:static md:block
//           ${open ? "translate-x-0" : ""}
//         `}
//         style={{ minHeight: "100vh" }}
//       >
//         <nav className="flex-1">{navLinks}</nav>
//         <div className="px-6 mt-auto">
//           <span className="text-xs text-gray-400">© 2025 Cursus</span>
//         </div>
//       </aside>

//       {/* Backdrop for mobile */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}
//     </>
//   );
// };

// export default Sidebar;
