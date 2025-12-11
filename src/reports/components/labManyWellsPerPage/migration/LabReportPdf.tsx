import { Document, Page, Image } from '@react-pdf/renderer';
import type { Sample } from '../../../../interfaces/Types';
import { Header } from './Header';
import { styles } from './styles';
import { HeaderCommon } from './HeaderCommon';
import { SamplesSummary } from './SamplesSummary';
import { Footer } from './Footer';
import { AnalyticalResultsTable } from './AnalyticalResultsTable';
import { DetectionSummaryTable } from './DetectionSummaryTable';
import { paginateSamples } from '../../../utils/paginateSamples';
import { AnalyticalResultsHeader } from './AnalyticalResultsHeader';
import AnalyticalResultItemPaginated from '../AnalyticalResultItemPaginated';
import { DetectionSummaryHeader } from './DetectionSummaryHeader';
import { DetectionSummaryResultItem } from './DetectionSummaryResultItem';

interface LabReportPDFProps {
    clientNameOrg: string;
}

export const LabReportPDF: React.FC<LabReportPDFProps> = ({ clientNameOrg }) => {
    const projectData = {
        projectName: "LABS INC",
        labReceivedDate: "04/07/25 12:43:00",
        companyName: "WSP",
        clientName: "Robert Sheridan",
        clientAddress: "550 NorthLake Blvd. Suite 1000",
        city: "Altamonte Springs",
        state: "FL",
        zip: "31701",
        projectLocation: "NPDES Outfalls",
        clientPhone: "407-522-7570",
        clientProjectNumber: "US0041111.8242.02",
        labReportingBatchID: "2504013"
    };

    const samplesData = [
        {
            labSampleId: "LAB-001",
            clientSampleId: "CLIENT-001",
            collectedDateTime: "04/07/25 12:43:00",
            sampleMatrix: "Water",
            analysisRequested: "pH, Conductivity"
        },
        {
            labSampleId: "LAB-002",
            clientSampleId: "CLIENT-002",
            collectedDateTime: "04/07/25 13:00:00",
            sampleMatrix: "Soil",
            analysisRequested: "Heavy Metals"
        }
    ];

    const samplesDataTW: Sample[] = [
    {
        clientSampleId: "MW-01",
        labSampleId: "2504013-001",
        dateCollected: "04/07/25 09:15:00",
        collectedBy: "John Martinez",
        matrixId: "Groundwater",
        sampleTests: [
            {
                analyteName: "pH",
                analyteId: "PH-001",
                results: "7.2",
                units: "pH units",
                df: "1",
                mdl: "0.1",
                pql: "0.5",
                method: "EPA 150.1",
                analyzedDate: "04/08/25",
                by: "JM",
                batch: "B2504-01",
                note: ""
            },
            {
                analyteName: "Conductivity",
                analyteId: "COND-001",
                results: "450",
                units: "μS/cm",
                df: "1",
                mdl: "1",
                pql: "5",
                method: "EPA 120.1",
                analyzedDate: "04/08/25",
                by: "JM",
                batch: "B2504-01",
                note: ""
            },
            {
                analyteName: "Total Dissolved Solids",
                analyteId: "TDS-001",
                results: "285",
                units: "mg/L",
                df: "1",
                mdl: "5",
                pql: "10",
                method: "SM 2540C",
                analyzedDate: "04/08/25",
                by: "LS",
                batch: "B2504-01",
                note: ""
            }
        ]
    },
    {
        clientSampleId: "MW-02",
        labSampleId: "2504013-002",
        dateCollected: "04/07/25 10:30:00",
        collectedBy: "Sarah Chen",
        matrixId: "Groundwater",
        sampleTests: [
            {
                analyteName: "Lead",
                analyteId: "PB-7439",
                results: "2.5",
                units: "μg/L",
                df: "1",
                mdl: "0.5",
                pql: "1.0",
                method: "EPA 6010D",
                analyzedDate: "04/09/25",
                by: "RK",
                batch: "B2504-02",
                note: ""
            },
            {
                analyteName: "Arsenic",
                analyteId: "AS-7440",
                results: "3.8",
                units: "μg/L",
                df: "1",
                mdl: "0.5",
                pql: "1.0",
                method: "EPA 6010D",
                analyzedDate: "04/09/25",
                by: "RK",
                batch: "B2504-02",
                note: ""
            },
            {
                analyteName: "Chromium",
                analyteId: "CR-7440",
                results: "1.2",
                units: "μg/L",
                df: "1",
                mdl: "0.5",
                pql: "1.0",
                method: "EPA 6010D",
                analyzedDate: "04/09/25",
                by: "RK",
                batch: "B2504-02",
                note: ""
            }
        ]
    },
    {
        clientSampleId: "MW-01",
        labSampleId: "2504013-001",
        dateCollected: "04/07/25 09:15:00",
        collectedBy: "John Martinez",
        matrixId: "Groundwater",
        sampleTests: [
            {
                analyteName: "pH",
                analyteId: "PH-001",
                results: "7.2",
                units: "pH units",
                df: "1",
                mdl: "0.1",
                pql: "0.5",
                method: "EPA 150.1",
                analyzedDate: "04/08/25",
                by: "JM",
                batch: "B2504-01",
                note: ""
            },
            {
                analyteName: "Conductivity",
                analyteId: "COND-001",
                results: "450",
                units: "μS/cm",
                df: "1",
                mdl: "1",
                pql: "5",
                method: "EPA 120.1",
                analyzedDate: "04/08/25",
                by: "JM",
                batch: "B2504-01",
                note: ""
            },
            {
                analyteName: "Total Dissolved Solids",
                analyteId: "TDS-001",
                results: "285",
                units: "mg/L",
                df: "1",
                mdl: "5",
                pql: "10",
                method: "SM 2540C",
                analyzedDate: "04/08/25",
                by: "LS",
                batch: "B2504-01",
                note: ""
            }
        ]
    },{
        clientSampleId: "MW-01",
        labSampleId: "2504013-001",
        dateCollected: "04/07/25 09:15:00",
        collectedBy: "John Martinez",
        matrixId: "Groundwater",
        sampleTests: [
            {
                analyteName: "pH",
                analyteId: "PH-001",
                results: "7.2",
                units: "pH units",
                df: "1",
                mdl: "0.1",
                pql: "0.5",
                method: "EPA 150.1",
                analyzedDate: "04/08/25",
                by: "JM",
                batch: "B2504-01",
                note: ""
            },
            {
                analyteName: "Conductivity",
                analyteId: "COND-001",
                results: "450",
                units: "μS/cm",
                df: "1",
                mdl: "1",
                pql: "5",
                method: "EPA 120.1",
                analyzedDate: "04/08/25",
                by: "JM",
                batch: "B2504-01",
                note: ""
            },
            {
                analyteName: "Total Dissolved Solids",
                analyteId: "TDS-001",
                results: "285",
                units: "mg/L",
                df: "1",
                mdl: "5",
                pql: "10",
                method: "SM 2540C",
                analyzedDate: "04/08/25",
                by: "LS",
                batch: "B2504-01",
                note: ""
            }
        ]
    },{
        clientSampleId: "MW-01",
        labSampleId: "2504013-001",
        dateCollected: "04/07/25 09:15:00",
        collectedBy: "John Martinez",
        matrixId: "Groundwater",
        sampleTests: [
            {
                analyteName: "pH",
                analyteId: "PH-001",
                results: "7.2",
                units: "pH units",
                df: "1",
                mdl: "0.1",
                pql: "0.5",
                method: "EPA 150.1",
                analyzedDate: "04/08/25",
                by: "JM",
                batch: "B2504-01",
                note: ""
            },
            {
                analyteName: "Conductivity",
                analyteId: "COND-001",
                results: "450",
                units: "μS/cm",
                df: "1",
                mdl: "1",
                pql: "5",
                method: "EPA 120.1",
                analyzedDate: "04/08/25",
                by: "JM",
                batch: "B2504-01",
                note: ""
            },
            {
                analyteName: "Total Dissolved Solids",
                analyteId: "TDS-001",
                results: "285",
                units: "mg/L",
                df: "1",
                mdl: "5",
                pql: "10",
                method: "SM 2540C",
                analyzedDate: "04/08/25",
                by: "LS",
                batch: "B2504-01",
                note: ""
            }
        ]
    }
    ];

    const paginatedSamples = paginateSamples(samplesDataTW, 30);
    const paginatedDetections = paginateSamples(samplesDataTW, 30); // Usa los mismos datos
    
    const totalPages = 1 + paginatedSamples.length + paginatedDetections.length;

    return (
        <Document>
            {/* Página 1 */}
            <Page size="A4" style={styles.page}>
                <Header clientName={clientNameOrg} />
                <HeaderCommon {...projectData} />
                <SamplesSummary samples={samplesData} />
                <Footer pageNumber={1} totalPages={totalPages} />
            </Page>

            {/* Páginas Analytical Results */}
            {paginatedSamples.map((pageSamples, pageIndex) => (
                <Page key={pageIndex} size="A4" style={styles.page}>
                    <HeaderCommon {...projectData} />
                    <AnalyticalResultsHeader />
                    {pageSamples.map((paginatedSample, i) => (
                        <AnalyticalResultItemPaginated 
                            key={i} 
                            paginatedSample={paginatedSample} 
                        />
                    ))}
                    <Footer pageNumber={1 + pageIndex + 1} totalPages={totalPages} />
                </Page>
            ))}

            {/* Páginas Detection Summary */}
            {paginatedDetections.map((pageSamples, pageIndex) => (
                <Page key={pageIndex} size="A4" style={styles.page}>
                    <HeaderCommon {...projectData} />
                    <DetectionSummaryHeader />
                    {pageSamples.map((paginatedSample, i) => (
                        <DetectionSummaryResultItem 
                            key={i} 
                            sample={paginatedSample.sample} 
                        />
                    ))}
                    <Footer pageNumber={1 + paginatedSamples.length + pageIndex + 1} totalPages={totalPages} />
                </Page>
            ))}
        </Document>
    );
};