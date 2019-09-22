import React from 'react'
import Layout from './layout/Layout'
import { ThemeProvider } from './context/ThemeContext'

import WeekTable from './components/WeekTable'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <WeekTable></WeekTable>
      </Layout>
    </ThemeProvider>
  )
}

export default App
