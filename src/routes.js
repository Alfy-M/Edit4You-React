/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import Notifications from "views/Notifications.jsx";
import {Login} from "views/TableList";

let authUser = JSON.parse(localStorage.getItem('authUser'));




//User logged
const dashboardLoggedRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "pe-7s-graph",
      component: Dashboard,
      layout: "/admin"
    },
    {
      path: "/user",
      name: "User Profile",
      icon: "pe-7s-user",
      component: UserProfile,
      layout: "/admin"
    },
    {
      path: "/notifications",
      name: "Notifications",
      icon: "pe-7s-bell",
      component: Notifications,
      layout: "/admin"
    }
  ];
  
//User not logged
const dashboardRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "pe-7s-graph",
      component: Dashboard,
      layout: "/admin"
    },
    {
      path: "/table",
      name: "Login",
      icon: "pe-7s-note2",
      component: Login,
      layout: "/admin"
    },
  ];
  
const routes = authUser !== null ? dashboardLoggedRoutes : dashboardRoutes;
export default routes;
