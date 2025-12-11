import { View, Text, Image } from '@react-pdf/renderer';
import { styles } from './styles';


export const DetectionSummaryHeader: React.FC = () => {
    return (
        <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Detection Summary</Text>
        </View>
    );
};