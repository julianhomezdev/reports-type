import { styles } from "./styles";
import { View, Text, Image } from '@react-pdf/renderer';


interface HeaderProps {
    clientName: string;
}

export const Header: React.FC<HeaderProps> = ({ clientName }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.logoContainer}>
                <Image 
                    src="/src/assets/LOGO_SRL_FINAL.png" 
                    style={styles.logo}
                />
            </View>

            <View style={styles.blueBox}>
                <Text style={styles.boldText10}>
                    Thank you {clientName} for the opportunity to be of service
                    to you and your company. We sincerely Appreciate Your Business.
                </Text>

                <Text style={[styles.normalText10, { marginTop: 3 }]}>
                    SRL certifies these Laboratory Results were produced in accordance
                    with NELAC Standards. Hold times and presevation requirements were met for
                    all analytes unless specifically call noted in the report. Results relate
                    only to the samples as received.
                </Text>
            </View>
        </View>
    );
};