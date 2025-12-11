import type { Sample } from "../../../../interfaces/Types";
import { AnalyticalResultItem } from "./AnalyticalResultItem";
import { AnalyticalResultsHeader } from "./AnalyticalResultsHeader";
import { View, Text, Image } from '@react-pdf/renderer';

interface AnalyticalResultsTableProps {
    samplesData: Sample[];
}

export const AnalyticalResultsTable: React.FC<AnalyticalResultsTableProps> = ({ samplesData }) => {
    return (
        <View style={{ width: '100%' }}>
            <AnalyticalResultsHeader />
            {samplesData.map((sample, index) => (
                <AnalyticalResultItem key={index} sample={sample} />
            ))}
        </View>
    );
};