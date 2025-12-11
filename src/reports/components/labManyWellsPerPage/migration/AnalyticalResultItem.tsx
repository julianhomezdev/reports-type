import { View, Text, Image } from '@react-pdf/renderer';
import { styles } from './styles';
import type { Sample } from '../../../../interfaces/Types';
import { AnalyticalResultItemRow } from './AnalyticalResultItemRow';
import { ClassicalParametersHeader } from './ClassicalParametersHeader';
import { AnalyticalResultItemHeader } from './AnalyticalResultItemHeader';


interface AnalyticalResultItemProps {
    sample: Sample;
}

export const AnalyticalResultItem: React.FC<AnalyticalResultItemProps> = ({ sample }) => {
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

            {sample.sampleTests.map((test, index) => (
                <AnalyticalResultItemRow key={index} test={test} />
            ))}
        </View>
    );
};