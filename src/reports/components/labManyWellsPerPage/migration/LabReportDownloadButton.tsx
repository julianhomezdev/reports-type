import { PDFDownloadLink } from '@react-pdf/renderer';
import { LabReportPDF } from './LabReportPdf';

export const LabReportDownloadButton: React.FC<{ clientName: string }> = ({ clientName }) => {
    return (
        <PDFDownloadLink 
            document={<LabReportPDF clientNameOrg={clientName} />} 
            fileName="lab-report.pdf"
        >
            {({ blob, url, loading, error }) =>
                loading ? 'Generando PDF...' : 'Descargar Reporte PDF'
            }
        </PDFDownloadLink>
    );
};