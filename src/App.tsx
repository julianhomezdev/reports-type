import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReportPreview from './pages/ReportPreview'
import PDFReportPage from './pages/PDFReportPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        
        {/* Vista previa HTML del reporte */}
        <Route path="/report-preview" element={<ReportPreview clientNameMain='Julian Homez' />} />
        
        
      </Routes>
    </BrowserRouter>
  )
}

export default App