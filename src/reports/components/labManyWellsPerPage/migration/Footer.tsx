// Footer.tsx - React-PDF
import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';

interface FooterProps {
    pageNumber?: number;
    totalPages?: number;
}

export const Footer: React.FC<FooterProps> = ({ pageNumber, totalPages }) => {
    const currentDate = new Date().toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    return (
        <View style={styles.footer} fixed>
            {/* Primera sección - Firma */}
            <View style={styles.footerSignature}>
                <Text style={styles.footerSignatureName}>Saul Roa</Text>
                <Text style={styles.footerSignatureTitle}>
                    Vice President / Quality Assurance Officer - S
                </Text>
            </View>

            {/* Segunda sección - Info */}
            <View style={styles.footerInfo}>
                {/* Fecha */}
                <View style={styles.footerDateColumn}>
                    <Text style={styles.footerDateText}>{currentDate}</Text>
                </View>

                {/* Disclaimer */}
                <View style={styles.footerDisclaimerColumn}>
                    <Text style={styles.footerDisclaimerText}>
                        This report, which includes the attached Chain-Of-Custody, shall not be
                    </Text>
                    <Text style={styles.footerDisclaimerText}>
                        reported except in full, without written approval of the laboratory
                    </Text>
                </View>

                {/* Page number */}
                <View style={styles.footerPageColumn}>
                    {pageNumber && totalPages && (
                        <Text style={styles.footerPageText}>
                            Page {pageNumber} of {totalPages}
                        </Text>
                    )}
                </View>
            </View>
        </View>
    );
};