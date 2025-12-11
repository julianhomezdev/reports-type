import { View, Text, Image } from '@react-pdf/renderer';
import { styles } from './styles';
import type { Sample } from '../../../../interfaces/Types';
import { ClassicalParametersHeader } from './ClassicalParametersHeader';
import { AnalyticalResultItemHeader } from './AnalyticalResultItemHeader';
import { AnalyticalResultItemRow } from './AnalyticalResultItemRow';


interface DetectionSummaryResultItemProps {
    sample: Sample;
}

export const DetectionSummaryResultItem: React.FC<DetectionSummaryResultItemProps> = ({ sample }) => {
    const detectedTests = sample.sampleTests.filter(test => {
        const resultValue = parseFloat(test.results.replace(/[<>]/g, ''));
        const pqlValue = parseFloat(test.pql);
        return !isNaN(resultValue) && !isNaN(pqlValue) && resultValue > pqlValue;
    });

    if (detectedTests.length === 0) {
        return null;
    }

    return (
        <View style={{ width: '100%' }}>
            <View style={styles.sampleInfoContainer}>
                <View style={styles.sampleInfoColumn}>
                    <Text style={styles.sampleInfoText}>
                        Client Sample ID: <Text style={{ fontWeight: 'bold' }}>{sample.clientSampleId}</Text>
                    </Text>
                    <Text style={styles.sampleInfoText}>
                        Lab Sample ID: <Text style={{ fontWeight: 'bold' }}>{sample.labSampleId}</Text>
                    </Text>
                </View>

                <View style={styles.sampleInfoColumn}>
                    <Text style={styles.sampleInfoText}>
                        Date Collected: <Text style={{ fontWeight: 'bold' }}>{sample.dateCollected}</Text>
                    </Text>
                    <Text style={styles.sampleInfoText}>
                        Collected By: <Text style={{ fontWeight: 'bold' }}>{sample.collectedBy}</Text>
                    </Text>
                </View>

                <View style={styles.sampleInfoColumn}>
                    <Text style={styles.sampleInfoText}>
                        Matrix ID: <Text style={{ fontWeight: 'bold' }}>{sample.matrixId}</Text>
                    </Text>
                </View>
            </View>

            <ClassicalParametersHeader />
            <AnalyticalResultItemHeader />

            {detectedTests.map((test, index) => (
                <AnalyticalResultItemRow key={index} test={test} />
            ))}
        </View>
    );
};