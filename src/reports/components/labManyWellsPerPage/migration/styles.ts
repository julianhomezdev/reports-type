import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    section: {
        margin: 10,
        padding: 10,
    },
    // Header styles
    headerContainer: {
        width: '100%',
        marginBottom: 10,
    },
    logoContainer: {
        width: '100%',
        height: 80,
        paddingLeft: 15,
        justifyContent: 'flex-start',
    },
    logo: {
        width: 80,
        height: 80,
    },
    blueBox: {
        width: '100%',
        backgroundColor: '#e6f1ff',
        border: '2px solid #aed3fc',
        padding: 30,
        marginTop: 5,
    },
    boldText10: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#000000',
    },
    normalText10: {
        fontSize: 10,
        color: '#000000',
    },
    // Common Header
    commonHeaderRow: {
        flexDirection: 'row',
        width: '100%',
        borderBottom: '1px solid #000000',
        paddingVertical: 2,
    },
    commonHeaderLabel: {
        width: '30%',
        fontSize: 9,
        color: '#000000',
    },
    commonHeaderValue: {
        width: '70%',
        fontSize: 9,
        color: '#000000',
        fontWeight: 'bold',
    },
    // Table styles
    tableHeader: {
        width: '100%',
        height: 25,
        backgroundColor: '#e6f1ff',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #000000',
        marginTop: 10,
    },
    tableHeaderText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000000',
    },
    // Analytical Results
    sampleInfoContainer: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#e6f1ff',
        padding: 3,
        borderLeft: '2px solid #000000',
        borderRight: '2px solid #000000',
        borderTop: '1px solid #000000',
    },
    sampleInfoColumn: {
        width: '33.33%',
        flexDirection: 'column',
    },
    sampleInfoText: {
        fontSize: 10,
        color: '#000000',
    },
    parameterHeader: {
        width: '100%',
        backgroundColor: '#e6f1ff',
        border: '1px solid #aed3fc',
        padding: 3,
        borderLeft: '2px solid #000000',
        borderRight: '2px solid #000000',
    },
    parameterHeaderText: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#000000',
    },
    resultTableHeader: {
        width: '100%',
        flexDirection: 'row',
        borderTop: '1px solid #000000',
        borderBottom: '1px solid #000000',
        borderLeft: '2px solid #000000',
        borderRight: '2px solid #000000',
    },
    resultTableCell: {
        width: '9.09%', // 100% / 11 columns
        fontSize: 8,
        color: '#000000',
        textAlign: 'center',
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultRow: {
        width: '100%',
        flexDirection: 'row',
        borderBottom: '0.5px solid #CCCCCC',
        borderLeft: '2px solid #000000',
        borderRight: '2px solid #000000',
    },
    resultRowCell: {
        width: '9.09%',
        fontSize: 8,
        color: '#000000',
        textAlign: 'center',
        padding: 3,
        justifyContent: 'center',
    },
    
    footerText: {
        fontSize: 9,
        color: '#000000',
    },
    // Samples Summary
    summaryHeaderRow: {
        width: '100%',
        backgroundColor: '#e6f1ff',
        border: '2px solid #aed3fc',
        padding: 5,
        flexDirection: 'row',
    },
    summaryHeaderCell: {
        width: '16.66%',
        fontSize: 9,
        color: '#000000',
        textAlign: 'center',
    },
    summaryRow: {
        width: '100%',
        flexDirection: 'row',
        borderBottom: '1px solid #CCCCCC',
        padding: 3,
    },
    summaryCell: {
        width: '16.66%',
        fontSize: 8,
        color: '#000000',
        textAlign: 'center',
    },
    // Continuation banner
    continuationBanner: {
        width: '100%',
        backgroundColor: '#fff3cd',
        padding: 3,
        borderTop: '2px solid #000000',
        borderLeft: '2px solid #000000',
        borderRight: '2px solid #000000',
    },
    continuationText: {
        fontSize: 10,
        color: '#000000',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    footer: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    width: '91.66%', // w-11/12
    },

footerSignature: {
    width: '33.33%', // w-4/12
    borderTop: '2px solid #000000',
    paddingTop: 2,
    marginBottom: 3,
},

footerSignatureName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000000',
},

footerSignatureTitle: {
    fontSize: 10,
    color: '#000000',
},

footerInfo: {
    width: '100%',
    flexDirection: 'row',
    borderTop: '2px solid #000000',
    paddingTop: 3,
},

footerDateColumn: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
},

footerDateText: {
    fontSize: 10,
    color: '#000000',
},

footerDisclaimerColumn: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
},

footerDisclaimerText: {
    fontSize: 8,
    color: '#000000',
    textAlign: 'center',
},

footerPageColumn: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
},

footerPageText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000000',
},
});