// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import styles from '../styles/NavbarStyles/Navbar.module.scss';
// import Link from 'next/link';

// const Navbar = () => {
//   const [menus1, setmenus1] = useState([]);

//   /**********************States For Dropdown ********************** */
//   const [homePagedropdownList, setHomePagedropdownList] = useState([]);
//   const [aboutPagedropdownList, setAboutPagedropdownList] = useState([]);
//   const [spacesPagedropdownList, setSpacesPagedropdownList] = useState([]);

//   useEffect(() => {
//     getStaticProps()
//   }, [])

//   async function getStaticProps() {
//     const tokenString = "2ee52bb5555e80a96bfe266fb51a02c8cfb176f64ba549a57fc1ffd68cb5c2a7b1ddd2ced220d8fb0348678f400c38472741859eac01b4a584e9061d5a85737a615f9c360456698306f9e843c0b00ff4c83a6e860be8b13cb456a3ea93cc371dc31f98af44898f7af3f667dfbc519569089e48cbbc12ba9598d80be7e0729d69";
//     const res = await axios.get('http://localhost:1337/api/menus?populate=*', { headers: { "Authorization": `Bearer ${tokenString}` } });
//     console.log('res =>', res);
//     const menus = res.data.data[0].attributes;
//     console.log("menus", menus);

//     /****************Home page dropDown ****************/
//     const homePagedropdown = menus.home_pages.data;
//     setHomePagedropdownList(homePagedropdown);

//     /****************About page dropDown ***************/
//     const aboutPagedropdown = menus.about_pages.data;
//     setAboutPagedropdownList(aboutPagedropdown);

//     /****************Spaces page dropDown************* */
//     const spacesPagedropdown = menus.spaces_pages.data;
//     setSpacesPagedropdownList(spacesPagedropdown);

//     const menulist = [];
//     for (const key in menus) {
//       let menuItem = key;
//       if (menuItem === 'about_pages' || menuItem === 'spaces_pages' || menuItem === 'home_pages') {
//         menulist.push(menuItem);
//       }
//       setmenus1(menulist);
//     }
//     return menus;
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Navbar</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse " id="navbarNavDarkDropdown">
//             <ul className="navbar-nav">
//               <li className="nav-item dropdown d-flex" >
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   {menus1[0]}
//                 </a>&emsp;&emsp;

//                 <ul className="dropdown-menu dropdown-menu-dark">{homePagedropdownList.map((list) => {
//                   return (
//                     <li key={list.id}><a className="dropdown-item" href="#">{list.attributes.home}</a></li>
//                   )
//                 })}
//                 </ul>
//               </li>
//             </ul>

//             <ul className="navbar-nav">
//               <li className="nav-item dropdown" style={{ display: "flex" }}>
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   {menus1[1]}
//                 </a>&emsp;&emsp;

//                 <ul className="dropdown-menu dropdown-menu-dark">{aboutPagedropdownList.map((list) => {
//                   return (
//                     <li key={list.id}><a className="dropdown-item" href="#">{list.attributes.about}</a></li>
//                   )
//                 })}
//                 </ul>
//               </li>
//             </ul>

//             <ul className="navbar-nav">
//               <li className="nav-item dropdown" style={{ display: "flex" }}>
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   {menus1[2]}
//                 </a>&emsp;&emsp;

//                 <ul className="dropdown-menu dropdown-menu-dark">{spacesPagedropdownList.map((list) => {
//                   return (
//                     <li key={list.id}><a className="dropdown-item" href="#">{list.attributes.Spaces}</a></li>
//                   )
//                 })}
//                 </ul>
//               </li>
//             </ul>

//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar;

/*************************** */


import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';

function Navbar() {

  return (
    <div>
      <p> HI THIS IS APURV</p>
    </div>
  )
}

export async function getStaticProps(){
  console.log('GET STATIC PROPS');
    const tokenString = "2ee52bb5555e80a96bfe266fb51a02c8cfb176f64ba549a57fc1ffd68cb5c2a7b1ddd2ced220d8fb0348678f400c38472741859eac01b4a584e9061d5a85737a615f9c360456698306f9e843c0b00ff4c83a6e860be8b13cb456a3ea93cc371dc31f98af44898f7af3f667dfbc519569089e48cbbc12ba9598d80be7e0729d69";
    const response = await axios.get('http://localhost:1337/api/menus?populate=*', { headers: { "Authorization": `Bearer ${tokenString}` } });

    return{
      props: {
        response,
      }
    }
}

export default Navbar;

