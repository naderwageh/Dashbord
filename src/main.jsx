import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import './index.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Dashboard from './Page/Dashboard/Dashboard.jsx';
import Team from './Page/Team/Team.jsx';
import Calendar from './Page/Calendar/Calendar.jsx';
import Profile from './Page/Profile/Profile.jsx';
import Contacts from './Page/Contacts/Contacts.jsx';
import Page from './Page/Page/Page.jsx';
import Invoices from './Page/Invoices/Invoices.jsx';
import Bar from './Page/Bar/Bar.jsx';
import BieChart from './Page/pieChart/BieChart'
import Line from './Page/Line/Line.jsx';
import Gogeraphy from './Page/Gogeraphy/Gogeraphy.jsx';
import Notfound from './Page/NotFound/Notfound.jsx';

// تعريف الروتر
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path= 'Dashboard' element={<Dashboard/>} />
      <Route path= 'Team' element={<Team/>} />
      <Route path= 'contacts' element={<Contacts/>} />
      <Route path= 'invoices' element={<Invoices/>} />
      <Route path= 'profile' element={<Profile/>} />
      <Route path= 'calendar' element={<Calendar/>} />
      <Route path= 'page' element={<Page/>} />
      <Route path= 'bar' element={<Bar/>} />
      <Route path= 'BieChart' element={<BieChart/>} />
      <Route path= 'Line' element={<Line/>} />
      <Route path= 'Gogeraphy' element={<Gogeraphy/>} />
      <Route path= '*' element={<Notfound/>} />
  
    </Route>
  )
);

// ريندر التطبيق
ReactDOM.createRoot(document.getElementById("root")).render( // استخدام علامة التعجب إذا كنت متأكداً من وجود العنصر
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);  