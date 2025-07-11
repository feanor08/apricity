import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout/Layout'
import Home from './pages/Home'
import Initiatives from './pages/Initiatives/Initiatives'
import Impact from './pages/Impact/Impact'
import GetInvolved from './pages/GetInvolved/GetInvolved'
import Updates from './pages/Updates/Updates'
import AboutUs from './pages/AboutUs/AboutUs'
import Contribute from './pages/Contribute/Contribute'
import CollectionCamps from './pages/GetInvolved/get-involved/CollectionCamps'
import DroppingCenters from './pages/GetInvolved/get-involved/DroppingCenters'
import Volunteer from './pages/GetInvolved/get-involved/Volunteer'
import Partner from './pages/GetInvolved/get-involved/Partner'
import Career from './pages/GetInvolved/get-involved/Career'
import Internship from './pages/GetInvolved/get-involved/Internship'
import InitiativeDetail from './pages/Initiatives/InitiativeDetail'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/initiatives" element={<Initiatives />} />
          <Route path="/initiatives/:id" element={<InitiativeDetail />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/get-involved/collection-camps" element={<CollectionCamps />} />
          <Route path="/get-involved/dropping-centers" element={<DroppingCenters />} />
          <Route path="/get-involved/volunteer" element={<Volunteer />} />
          <Route path="/get-involved/partner" element={<Partner />} />
          <Route path="/get-involved/career" element={<Career />} />
          <Route path="/get-involved/internship" element={<Internship />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App