import React from 'react';
import SectionHeader from './SectionHeader';
import { Crown } from 'lucide-react';
import vipBgImage from '../assets/vip-bg.png';

export default function VipTier() {
    const vipLevels = [
        { level: 1, btn: '180,000', dep: '8,000' },
        { level: 2, btn: '180,000', dep: '8,000' },
        { level: 3, btn: '180,000', dep: '8,000' },
        { level: 4, btn: '180,000', dep: '8,000' },
        { level: 5, btn: '180,000', dep: '8,000' },
        { level: 6, btn: '180,000', dep: '8,000' },
    ];

    return (
        <section className="w-full pt-4 relative">
            <SectionHeader
                title="VIP Group"
                icon={<Crown size={22} fill="currentColor" className="text-[#0072BC]" />}
                rightLink="More Details"
            />

            <p className="text-[#004C80] text-xs mb-8 leading-relaxed max-w-[1000px] font-semibold mt-4">
                Join the Riocity9 VIP member group, you will receive many special privileges such as promotion bonus, monthly red envelope bonus, birthday bonus. All of these are special privileges for Riocity9 VIP customers only.
            </p>

            <div className="flex flex-col md:flex-row gap-8 items-center mt-4">

                {/* Left Side VIP Visual */}
                <div className="w-full md:w-1/3 flex justify-center lg:justify-start items-center relative min-h-[250px]">
                    <img
                        src={vipBgImage}
                        alt="VIP Group"
                        className="w-[260px] md:w-[500px] h-auto object-contain select-none"
                    />
                </div>

                {/* Right Side 3x2 Grid */}
                <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:pl-10">
                    {vipLevels.map((vp) => (
                        <div
                            key={vp.level}
                            className="bg-white rounded-xl py-3 px-2 flex flex-col items-center justify-center border border-[#CCEEFF] shadow-[0_2px_8px_rgba(0,174,239,0.08)] hover:border-[#00AEEF] hover:shadow-[0_5px_15px_rgba(0,174,239,0.2)] transition-all cursor-pointer"
                        >
                            {/* Header Box */}
                            <div className="flex items-center gap-1 mb-2">
                                <div className="bg-gradient-to-br from-[#d0f0ff] to-[#f0f8ff] p-1.5 rounded-md text-[#00AEEF] transform -skew-x-[15deg]">
                                    <Crown size={20} fill="currentColor" strokeWidth={1} />
                                </div>
                                <h3 className="text-[#0072BC] text-lg font-black italic tracking-wide">VIP {vp.level}</h3>
                            </div>

                            {/* Rules text */}
                            <div className="text-center w-full border-t border-[#CCEEFF]/50 pt-2 relative">
                                <p className="text-xs text-[#00AEEF] font-bold">
                                    Valid Bet Point &gt; {vp.btn}
                                </p>
                                <p className="text-xs text-[#00AEEF] font-bold">
                                    Deposit Point = {vp.dep}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

