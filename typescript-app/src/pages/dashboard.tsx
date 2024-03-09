import React from 'react';
import InfoCard from '../components/dashboard/infoCard';
import { CardInfoType } from '../types/cardInfoTypes';

const cardInfo: CardInfoType[] = [
    {
        title: "Net Income",
        value: "$20.178.00",
        revenue: "23.5",
        success: true
    },
    {
        title: "Avr. Order Value",
        value: "$896.00",
        revenue: "23.5",
        success: false
    },
    {
        title: "Orders",
        value: "7,563",
        revenue: "12.5",
        success: true
    }
]

const Dashboard = () => {
    return (
        <div className='flex flex-col'>
            <div className='w-full ml-5 mt-5'>
                <div className='flex gap-4'>
                    {
                        cardInfo.map((card, index) => (
                            <InfoCard key={index} card={card} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard;