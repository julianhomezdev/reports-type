import { View, Text, Image } from '@react-pdf/renderer';
import { styles } from './styles';


export const AnalyticalResultItemHeader: React.FC = () => {
    return (
        <View style={styles.resultTableHeader}>
            <Text style={styles.resultTableCell}>Analyte Name (Analyte ID)</Text>
            <Text style={styles.resultTableCell}>Results/Qual</Text>
            <Text style={styles.resultTableCell}>Units</Text>
            <Text style={styles.resultTableCell}>DF</Text>
            <Text style={styles.resultTableCell}>MDL</Text>
            <Text style={styles.resultTableCell}>PQL</Text>
            <Text style={styles.resultTableCell}>Method</Text>
            <Text style={styles.resultTableCell}>Analyzed Date</Text>
            <Text style={styles.resultTableCell}>By</Text>
            <Text style={styles.resultTableCell}>Batch</Text>
            <Text style={styles.resultTableCell}>Notes</Text>
        </View>
    );
};