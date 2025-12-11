import { View, Text, Image } from '@react-pdf/renderer';
import { styles } from './styles';


export const AnalyticalResultsHeader: React.FC = () => {
    return (
        <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Analytical Results</Text>
        </View>
    );
};