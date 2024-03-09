import React from 'react';
import { CardInfoType } from '../../types/cardInfoTypes';

const InfoCard = ({ card }: { card: CardInfoType }) => {
    return (
        <div className="bg-white w-full border border-gray-200 rounded-lg shadow">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 border-b">
                <div className='p-5'>
                    {card.title}
                </div>
            </h5>

            <p className="mb-3 p-5 font-normal text-gray-700">
                <h5 className='text-2xl'>
                    {card.value}
                </h5>
            </p>
            <div className='flex'>
                {
                    card.success === true ? (
                        <div className='p-3 rounded-l-lg flex gap-5'>
                            <span className='bg-green-500 text-white rounded-xl text-sm px-2'>{card.revenue}</span>
                            <p>From Last Period</p>
                        </div>
                    ) : (
                        <div className='p-3 rounded-l-lg flex gap-5'>
                            <span className='bg-red-500 text-white rounded-xl text-sm px-2'>{card.revenue}</span>
                            <p>From Last Period</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default InfoCard