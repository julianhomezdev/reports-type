import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  viewer: {
    width: '100%',
    height: '100vh',
  },
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 40,
    right: 40,
    borderBottom: '2 solid #333',
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerInfo: {
    fontSize: 9,
    color: '#666',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    borderTop: '1 solid #333',
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 8,
  },
  content: {
    marginTop: 80,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15,
    color: '#1a56db',
  },
  table: {
    width: '100%',
    marginBottom: 15,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: '1 solid #e5e7eb',
    minHeight: 25,
    alignItems: 'center',
  },
  tableHeader: {
    backgroundColor: '#f3f4f6',
    fontWeight: 'bold',
    borderBottom: '2 solid #333',
  },
  tableCol: {
    padding: 5,
    fontSize: 9,
  },
  col1: { width: '15%' },
  col2: { width: '15%' },
  col3: { width: '20%' },
  col4: { width: '15%' },
  col5: { width: '10%' },
  col6: { width: '10%' },
  col7: { width: '15%' },
  sampleBlock: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fafafa',
    borderRadius: 5,
  },
  sampleHeader: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1f2937',
  },
  sampleInfo: {
    fontSize: 9,
    marginBottom: 3,
    color: '#4b5563',
  },
});

const samplesData = [
  {
    clientSampleId: "MW-01",
    labSampleId: "2504013-001",
    dateCollected: "04/07/25 09:15:00",
    collectedBy: "John Martinez",
    matrixId: "Groundwater",
    tests: [
      { analyte: "pH", result: "7.2", units: "pH units", mdl: "0.1", pql: "0.5", method: "EPA 150.1" },
      { analyte: "Conductivity", result: "450", units: "μS/cm", mdl: "1", pql: "5", method: "EPA 120.1" },
      { analyte: "Total Dissolved Solids", result: "285", units: "mg/L", mdl: "5", pql: "10", method: "SM 2540C" },
    ]
  },
  {
    clientSampleId: "MW-02",
    labSampleId: "2504013-002",
    dateCollected: "04/07/25 10:30:00",
    collectedBy: "Sarah Chen",
    matrixId: "Groundwater",
    tests: [
      { analyte: "Lead", result: "2.5", units: "μg/L", mdl: "0.5", pql: "1.0", method: "EPA 6010D" },
      { analyte: "Arsenic", result: "3.8", units: "μg/L", mdl: "0.5", pql: "1.0", method: "EPA 6010D" },
      { analyte: "Chromium", result: "1.2", units: "μg/L", mdl: "0.5", pql: "1.0", method: "EPA 6010D" },
    ]
  },
  {
    clientSampleId: "MW-03",
    labSampleId: "2504013-003",
    dateCollected: "04/07/25 11:45:00",
    collectedBy: "Mike Thompson",
    matrixId: "Groundwater",
    tests: [
      { analyte: "Benzene", result: "< 0.5", units: "μg/L", mdl: "0.2", pql: "0.5", method: "EPA 8260D" },
      { analyte: "Toluene", result: "1.8", units: "μg/L", mdl: "0.2", pql: "0.5", method: "EPA 8260D" },
      { analyte: "Xylenes, Total", result: "< 0.5", units: "μg/L", mdl: "0.3", pql: "0.5", method: "EPA 8260D" },
    ]
  },
  {
    clientSampleId: "SW-01",
    labSampleId: "2504013-004",
    dateCollected: "04/07/25 13:20:00",
    collectedBy: "Emily Rodriguez",
    matrixId: "Surface Water",
    tests: [
      { analyte: "Nitrate as N", result: "5.6", units: "mg/L", mdl: "0.1", pql: "0.5", method: "EPA 353.2" },
      { analyte: "Phosphorus, Total", result: "0.85", units: "mg/L", mdl: "0.05", pql: "0.1", method: "EPA 365.1" },
      { analyte: "BOD, 5-day", result: "12.5", units: "mg/L", mdl: "2", pql: "2", method: "SM 5210B" },
    ]
  },
  {
    clientSampleId: "SW-02",
    labSampleId: "2504013-005",
    dateCollected: "04/07/25 14:50:00",
    collectedBy: "David Park",
    matrixId: "Surface Water",
    tests: [
      { analyte: "E. coli", result: "75", units: "MPN/100mL", mdl: "1", pql: "1", method: "SM 9223B" },
      { analyte: "Total Coliform", result: "240", units: "MPN/100mL", mdl: "1", pql: "1", method: "SM 9223B" },
      { analyte: "Turbidity", result: "3.5", units: "NTU", mdl: "0.1", pql: "0.5", method: "EPA 180.1" },
    ]
  },
];

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header} fixed>
        <Text style={styles.headerTitle}>LABS INC - Laboratory Report</Text>
        <Text style={styles.headerInfo}>Client: WSP | Project: NPDES Outfalls | Batch: 2504013</Text>
      </View>

      <View style={styles.footer} fixed>
        <Text>Report Date: 04/07/25</Text>
        <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Analytical Results</Text>

        {samplesData.map((sample, idx) => (
          <View key={idx} style={styles.sampleBlock} wrap={false}>
            <Text style={styles.sampleHeader}>
              Sample: {sample.clientSampleId} ({sample.labSampleId})
            </Text>
            <Text style={styles.sampleInfo}>Collected: {sample.dateCollected} by {sample.collectedBy}</Text>
            <Text style={styles.sampleInfo}>Matrix: {sample.matrixId}</Text>

            <View style={styles.table}>
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={[styles.tableCol, styles.col1]}>Analyte</Text>
                <Text style={[styles.tableCol, styles.col2]}>Result</Text>
                <Text style={[styles.tableCol, styles.col3]}>Units</Text>
                <Text style={[styles.tableCol, styles.col4]}>MDL</Text>
                <Text style={[styles.tableCol, styles.col5]}>PQL</Text>
                <Text style={[styles.tableCol, styles.col6]}>Method</Text>
              </View>

              {sample.tests.map((test, testIdx) => (
                <View key={testIdx} style={styles.tableRow}>
                  <Text style={[styles.tableCol, styles.col1]}>{test.analyte}</Text>
                  <Text style={[styles.tableCol, styles.col2]}>{test.result}</Text>
                  <Text style={[styles.tableCol, styles.col3]}>{test.units}</Text>
                  <Text style={[styles.tableCol, styles.col4]}>{test.mdl}</Text>
                  <Text style={[styles.tableCol, styles.col5]}>{test.pql}</Text>
                  <Text style={[styles.tableCol, styles.col6]}>{test.method}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default function AppTest() {
  return (
    <PDFViewer style={styles.viewer}>
      <MyDocument />
    </PDFViewer>
  );
}