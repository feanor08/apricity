import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout/Layout'
import Home from './pages/Home'
import Initiatives from './pages/Initiatives'
import Impact from './pages/Impact'
import GetInvolved from './pages/GetInvolved'
import Updates from './pages/Updates'
import AboutUs from './pages/AboutUs'
import Contribute from './pages/Contribute'
import CollectionCamps from './pages/get-involved/CollectionCamps'
import DroppingCenters from './pages/get-involved/DroppingCenters'
import Volunteer from './pages/get-involved/Volunteer'
import Partner from './pages/get-involved/Partner'
import Career from './pages/get-involved/Career'
import Internship from './pages/get-involved/Internship'
import InitiativeDetail from './pages/InitiativeDetail'

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