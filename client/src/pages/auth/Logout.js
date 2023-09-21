// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Context } from '../../context/Context';

// export default function Logout() {
//   const { user, dispatch } = useContext(Context);
//   const navigate = useNavigate();
//   // const handleClick = async () => {
//   //   localStorage.clear();
//   //   navigate('/');
//   // };
//   const handleLogout = () => {
//     dispatch({ type: 'LOGOUT' });
//     navigate('/');
//   };

//   return (
//     <div>
//       <h1>Are you sure you want to Logout?</h1>
//       <button
//         type="submit"
//         className="btn mb-3 auth-btn"
//         onClick={handleLogout}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }
