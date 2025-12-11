import { View, Text, Image } from '@react-pdf/renderer';
import { styles } from './styles';


interface HeaderCommonProps {
    projectName: string;
    labReceivedDate: string;
    companyName: string;
    clientName: string;
    clientAddress: string;
    city: string;
    state: string;
    zip: string;
    projectLocation: string;
    clientPhone: string;
    clientProjectNumber: string;
    labReportingBatchID: string;
}

export const HeaderCommon: React.FC<HeaderCommonProps> = (props) => {
    return (
        <View style={{ width: '100%', marginTop: 10, marginBottom: 10 }}>
            <View style={styles.commonHeaderRow}>
                <Text style={styles.commonHeaderLabel}>Project Name:</Text>
                <Text style={styles.commonHeaderValue}>{props.projectName}</Text>
            </View>
            <View style={styles.commonHeaderRow}>
                <Text style={styles.commonHeaderLabel}>Lab Received:</Text>
                <Text style={styles.commonHeaderValue}>{props.labReceivedDate}</Text>
            </View>
            <View style={styles.commonHeaderRow}>
                <Text style={styles.commonHeaderLabel}>Company:</Text>
                <Text style={styles.commonHeaderValue}>{props.companyName}</Text>
            </View>
            <View style={styles.commonHeaderRow}>
                <Text style={styles.commonHeaderLabel}>Client:</Text>
                <Text style={styles.commonHeaderValue}>{props.clientName}</Text>
            </View>
            <View style={styles.commonHeaderRow}>
                <Text style={styles.commonHeaderLabel}>Address:</Text>
                <Text style={styles.commonHeaderValue}>
                    {props.clientAddress}, {props.city}, {props.state} {props.zip}
                </Text>
            </View>
            <View style={styles.commonHeaderRow}>
                <Text style={styles.commonHeaderLabel}>Project Location:</Text>
                <Text style={styles.commonHeaderValue}>{props.projectLocation}</Text>
            </View>
            <View style={styles.commonHeaderRow}>
                <Text style={styles.commonHeaderLabel}>Phone:</Text>
                <Text style={styles.commonHeaderValue}>{props.clientPhone}</Text>
            </View>
            <View style={styles.commonHeaderRow}>
                <Text style={styles.commonHeaderLabel}>Client Project #:</Text>
                <Text style={styles.commonHeaderValue}>{props.clientProjectNumber}</Text>
            </View>
            <View style={[styles.commonHeaderRow, { borderBottom: 'none' }]}>
                <Text style={styles.commonHeaderLabel}>Lab Batch ID:</Text>
                <Text style={styles.commonHeaderValue}>{props.labReportingBatchID}</Text>
            </View>
        </View>
    );
};