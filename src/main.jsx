import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import Team from './Pages/Team/Team.jsx'
import Contacts from './Pages/Contacts/Contacts.jsx'
import Invoices from './Pages/Invoices/Invoices.jsx'
import Form from './Pages/Form/Form.jsx'
import Calender from './Pages/Calender/Calender.jsx'
import Faq from './Pages/Faq/Faq.jsx'
import BarChart from './Pages/BarChart/BarChart.jsx'
import PieChart from './Pages/PieChart/PieChart.jsx'
import LineChart from './Pages/LineChart/LineChart.jsx'
import GeographyChart from './Pages/GeographyChart/GeographyChart.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calender" element={<Calender />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="georaphy" element={<GeographyChart />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
