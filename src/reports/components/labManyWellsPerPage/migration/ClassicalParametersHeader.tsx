import { View, Text, Image } from '@react-pdf/renderer';
import { styles } from './styles';

export const ClassicalParametersHeader: React.FC = () => {
    return (
        <View style={styles.parameterHeader}>
            <Text style={styles.parameterHeaderText}>Classical Chemistry Parameters</Text>
        </View>
    );
};