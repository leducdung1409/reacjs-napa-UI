import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import HomePage from '../pages/Home';
import LoginPage from '../pages/admin/login/login';
import AdminHomePage from '../pages/admin/dashboard/Home';
import HomeTable from '../pages/admin/dashboard/table/HomeTable'
import Setting from '../pages/admin/dashboard/table/Setting'
import ChatBot from '../pages/admin/dashboard/table/ChatBot'

const AdminRoute = [
  {
    title: 'About',
    path: '/about',
    element: AboutPage,
    children: '',
    exact: true,
  },
  {
    title: 'AdminHomePage',
    path: '/',
    element: AdminHomePage,
    children: HomeTable,
    exact: true,
  },
  {
    title: 'Contact',
    path: '/contact',
    element: ContactPage,
    children: '',
    exact: true,
  },
  {
    title: 'admin',
    path: '/admin/login',
    element: LoginPage,
    exact: true,
  },
  {
    title: 'admin',
    path: '/admin/home',
    element: AdminHomePage,
    children: HomeTable,
    exact: true,
  },
  {
    title: 'admin',
    path: '/admin/chatbot',
    element: AdminHomePage,
    children: ChatBot,
    exact: true,
  },
  {
    title: 'admin',
    path: '/admin/setting',
    element: AdminHomePage,
    children: Setting,
    exact: true,
  },
];

export default AdminRoute;
