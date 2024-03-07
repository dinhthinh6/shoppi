import React, { Fragment } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DefaultConponent from './components/DefaultComponent/DefaultComponent'
import {routes} from './routes'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? DefaultConponent : Fragment
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page/>
                </Layout>
              } />
            ) 
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App