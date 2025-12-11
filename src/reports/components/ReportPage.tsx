import Footer from "./common/Footer";
import HeaderCommon from "./common/HeaderCommon";
import Header from "./labManyWellsPerPage/Header";

interface ReportPageProps {

    children: React.ReactNode;

    pageNumber: number;

    totalPages: number;

    clientName: string;

    projectData: {

        projectName: string;

        labReceivedDate: string;

        companyName: string;

        clientName: string;

        clientAddress: string;

        city: string;

        state: string;

        zip: string;


        projectLocation: string;

        clientPhone: string;

        clientProjectNumber: string;

        labReportingBatchID: string;

    };

    showHeader?: boolean;

    showCommonHeader?: boolean;

}

function ReportPage({ 
    children, 
    pageNumber, 
    totalPages, 
    clientName,
    projectData,
    showHeader = true,
    showCommonHeader = true
}: ReportPageProps) {

    return (
        <div className="w-full min-h-screen flex flex-col items-center bg-white page-break">
            
            {/* Headers */}
            {showHeader && <Header clientName={clientName} />}
            
            {showCommonHeader && <HeaderCommon {...projectData} />}

            {/* Contenido */}
            <div className="flex-1 w-full flex flex-col items-center py-4">
                {children}
            </div>

            {/* Footer */}
            <Footer pageNumber={pageNumber} totalPages={totalPages} />

        </div>
    );
}

export default ReportPage;