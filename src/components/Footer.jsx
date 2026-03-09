import React from 'react';
import { DollarSign, ShieldAlert, MonitorSmartphone } from 'lucide-react';

export default function Footer() {
    const links = ['About Us', 'Live Chat', 'Contact Us', 'Affiliate', 'Terms & Conditions', 'Follow Us'];
    const paymentIcons = ['T', 'B', 'P', 'V', 'F', 'E', 'H'];
    const certs = ['Curacao', 'bmm', 'iTechLabs', 'Godaddy', 'GLI', 'Verify'];

    return (
        <footer className="w-full bg-gradient-to-b from-[#C4EBFC] to-[#99DDF9] pt-12 pb-6 flex flex-col border-t border-[#A8E2FB] relative mt-10">
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 relative z-10 flex flex-col gap-8">

                {/* Huge opaque LOGO in center background of footer content */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
                    <h2 className="text-2xl font-black italic text-white/50 drop-shadow-sm tracking-widest">LOGO</h2>
                </div>

                {/* Top Info & Links Row */}
                <div className="flex flex-col md:flex-row justify-between w-full pt-8 relative z-10 gap-6">
                    {/* Description Left */}
                    <div className="flex-1 max-w-[450px]">
                        <p className="text-[#0072BC] text-xs font-semibold leading-relaxed tracking-wide opacity-90">
                            Riocity9 offer wide range of highest quality gaming products to our players. Our Customer Support Team is available to assist you 24 hours a day. All personal information will be treated and stored at the strictest and most confidential way.
                        </p>
                    </div>
                    {/* Navigation Right */}
                    <div className="flex-1 flex flex-wrap justify-end gap-x-2 gap-y-2 content-start self-start pt-1">
                        {links.map((link, idx) => (
                            <React.Fragment key={idx}>
                                <a href="#" className="text-[#0072BC] font-semibold text-xs hover:text-[#00AEEF] transition-colors">{link}</a>
                                {idx < links.length - 1 && <span className="text-[#00AEEF]/50 select-none text-xs">|</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="w-full flex flex-col items-center gap-3 relative z-10 mt-6">
                    <h4 className="text-[#00AEEF] font-bold text-xs uppercase tracking-wider">Payment Method</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                        {paymentIcons.map((letter, idx) => (
                            <div key={idx} className="w-[30px] h-[30px] bg-[#00AEEF] text-white rounded-full flex items-center justify-center font-bold text-xs shadow-sm shadow-[#00AEEF]/30 italic hover:scale-110 transition-transform cursor-pointer">
                                {letter}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications and Compliance */}
                <div className="w-full flex flex-col md:flex-row justify-center gap-12 md:gap-24 relative z-10 mt-4 border-t border-white/50 pt-8">

                    <div className="flex flex-col items-center gap-3">
                        <h4 className="text-[#00AEEF] font-bold text-xs uppercase tracking-wider">Certificated by</h4>
                        <div className="flex gap-4 items-center">
                            {certs.map((c, i) => (
                                <span key={i} className="text-[#0072BC] font-black italic text-sm opacity-80 mix-blend-color-burn">{c}</span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <h4 className="text-[#00AEEF] font-bold text-xs uppercase tracking-wider">Responsible Gaming</h4>
                        <div className="flex gap-4 items-center text-[#0072BC] opacity-80 mix-blend-color-burn">
                            <div className="w-10 h-10 border-[2px] border-[#0072BC] rounded-full flex items-center justify-center font-bold text-lg">18+</div>
                            <div className="flex items-center gap-1 font-bold text-xs text-center leading-tight">
                                Be<br />Gamble<br />Aware
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="w-full text-center relative z-10 pb-4">
                    <p className="text-xs font-semibold text-[#00AEEF] tracking-wide">
                        Copyright Riocity9 © 2026. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}
