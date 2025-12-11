
import { View, Text, Image } from '@react-pdf/renderer';
import { styles } from './styles';

interface SampleData {
    labSampleId: string;
    clientSampleId: string;
    collectedDateTime: string;
    sampleMatrix: string;
    analysisRequested: string;
}

interface SamplesSummaryProps {
    samples: SampleData[];
}

export const SamplesSummary: React.FC<SamplesSummaryProps> = ({ samples }) => {
    return (
        <View style={{ width: '100%', marginTop: 15 }}>
            <View style={styles.summaryHeaderRow}>
                <Text style={styles.summaryHeaderCell}>Item</Text>
                <Text style={styles.summaryHeaderCell}>Lab Sample ID</Text>
                <Text style={styles.summaryHeaderCell}>Client Sample ID</Text>
                <Text style={styles.summaryHeaderCell}>Collected{'\n'}Date Time</Text>
                <Text style={styles.summaryHeaderCell}>Sample Matrix</Text>
                <Text style={styles.summaryHeaderCell}>Analysis Requested</Text>
            </View>

            {samples.map((sample, index) => (
                <View key={index} style={styles.summaryRow}>
                    <Text style={styles.summaryCell}>{index + 1}</Text>
                    <Text style={styles.summaryCell}>{sample.labSampleId}</Text>
                    <Text style={styles.summaryCell}>{sample.clientSampleId}</Text>
                    <Text style={styles.summaryCell}>{sample.collectedDateTime}</Text>
                    <Text style={styles.summaryCell}>{sample.sampleMatrix}</Text>
                    <Text style={styles.summaryCell}>{sample.analysisRequested}</Text>
                </View>
            ))}
        </View>
    );
};