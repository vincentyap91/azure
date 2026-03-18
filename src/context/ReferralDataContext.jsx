import React, { createContext, useContext, useState } from 'react';

const ReferralDataContext = createContext(null);

export function ReferralDataProvider({ children }) {
    const [totalCommissionBonus, setTotalCommissionBonus] = useState('PKR 0.000');
    const [totalDepositBonus, setTotalDepositBonus] = useState('PKR 0.000');

    const value = {
        totalCommissionBonus,
        totalDepositBonus,
        setTotalCommissionBonus,
        setTotalDepositBonus,
    };

    return (
        <ReferralDataContext.Provider value={value}>
            {children}
        </ReferralDataContext.Provider>
    );
}

export function useReferralData() {
    const ctx = useContext(ReferralDataContext);
    if (!ctx) {
        return {
            totalCommissionBonus: 'PKR 0.000',
            totalDepositBonus: 'PKR 0.000',
            setTotalCommissionBonus: () => {},
            setTotalDepositBonus: () => {},
        };
    }
    return ctx;
}
