import type { SampleTest } from "../../../../interfaces/Types";
import { View, Text, Image } from '@react-pdf/renderer';
import { styles } from './styles';

interface AnalyticalResultItemRowProps {
    test: SampleTest;
}

export const AnalyticalResultItemRow: React.FC<AnalyticalResultItemRowProps> = ({ test }) => {
    return (
        <View style={styles.resultRow}>
            <Text style={styles.resultRowCell}>{test.analyteName} ({test.analyteId})</Text>
            <Text style={styles.resultRowCell}>{test.results}</Text>
            <Text style={styles.resultRowCell}>{test.units}</Text>
            <Text style={styles.resultRowCell}>{test.df}</Text>
            <Text style={styles.resultRowCell}>{test.mdl}</Text>
            <Text style={styles.resultRowCell}>{test.pql}</Text>
            <Text style={styles.resultRowCell}>{test.method}</Text>
            <Text style={styles.resultRowCell}>{test.analyzedDate}</Text>
            <Text style={styles.resultRowCell}>{test.by}</Text>
            <Text style={styles.resultRowCell}>{test.batch}</Text>
            <Text style={styles.resultRowCell}>{test.note}</Text>
        </View>
    );
};