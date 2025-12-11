import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Sistema de Reportes de Laboratorio
        </h1>
        
        <div className="space-y-4">
          <Link 
            to="/report-preview" 
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-center"
          >
            📄 Vista Previa HTML del Reporte
          </Link>
          
          <Link 
            to="/report-pdf" 
            className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors text-center"
          >
            📑 Generar y Visualizar PDF
          </Link>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h2 className="font-semibold text-gray-700 mb-2">Información:</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Vista previa HTML: Rápida visualización en navegador</li>
            <li>• Vista PDF: Documento final listo para descargar</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePage