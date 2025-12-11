import { useState } from 'react'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import { LabReportPDF } from '../reports/components/labManyWellsPerPage/migration/LabReportPDF'
import { Link } from 'react-router-dom'

interface PDFReportPageProps {
  clientName: string
}

function PDFReportPage({ clientName }: PDFReportPageProps) {
  const [showViewer, setShowViewer] = useState(true)

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header con controles */}
      <div className="max-w-7xl mx-auto mb-4 bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              ← Inicio
            </Link>
            
            
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowViewer(!showViewer)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              {showViewer ? '🖼️ Ocultar Vista' : '👁️ Mostrar Vista'}
            </button>

            <PDFDownloadLink 
              document={<LabReportPDF clientNameOrg={clientName} />} 
              fileName={`lab-report-${clientName.replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.pdf`}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors inline-block"
            >
              {({ loading }) => loading ? '⏳ Generando...' : '📥 Descargar PDF'}
            </PDFDownloadLink>
          </div>
        </div>
      </div>

      {/* Visualizador PDF */}
      {showViewer && (
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: 'calc(100vh - 120px)' }}>
          <PDFViewer width="100%" height="100%" showToolbar={true}>
            <LabReportPDF clientNameOrg={clientName} />
          </PDFViewer>
        </div>
      )}

      {/* Mensaje cuando está oculto */}
      {!showViewer && (
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-12 text-center">
          <div className="text-6xl mb-4">📄</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">
            Vista previa oculta
          </h2>
          <p className="text-gray-600 mb-6">
            Haz clic en "Mostrar Vista" para ver el PDF en el navegador
          </p>
          <button
            onClick={() => setShowViewer(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            👁️ Mostrar Vista Previa
          </button>
        </div>
      )}
    </div>
  )
}

export default PDFReportPage