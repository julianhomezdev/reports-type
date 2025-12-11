import type { Sample } from "../../../../interfaces/Types";
import { DetectionSummaryHeader } from "./DetectionSummaryHeader";
import { DetectionSummaryResultItem } from "./DetectionSummaryResultItem";
import { View, Text, Image } from '@react-pdf/renderer';


interface DetectionSummaryTableProps {
    samplesData: Sample[];
}

export const DetectionSummaryTable: React.FC<DetectionSummaryTableProps> = ({ samplesData }) => {
    return (
        <View style={{ width: '100%' }}>
            <DetectionSummaryHeader />
            {samplesData.map((sample, index) => (
                <DetectionSummaryResultItem key={index} sample={sample} />
            ))}
        </View>
    );
};