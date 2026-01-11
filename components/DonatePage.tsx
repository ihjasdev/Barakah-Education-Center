import React, { useState } from 'react';
import { Copy, Check, Building2, MapPin, Phone, Mail, Globe, Heart } from 'lucide-react';

const DonatePage: React.FC = () => {
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const donationDetails = {
        iban: "CH23 0900 0000 1527 7376 2",
        bic: "POFICHBEXXX",
        postal: "15-277376-2"
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <Heart className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-pulse" />
                    <h1 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tighter mb-4">
                        Support Our <span className="text-amber-500">Mission</span>
                    </h1>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                        Your generous contributions help us provide education and opportunities to talented youth in Sri Lanka.
                        Swiss Barakah Charity is your tax-exempt Swiss aid organization.
                    </p>
                </div>

                <div className="bg-white rounded-[2.5rem] shadow-xl border border-blue-100 overflow-hidden">
                    <div className="bg-blue-950 p-8 sm:p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <h2 className="text-2xl font-black tracking-widest uppercase mb-8 relative z-10 flex items-center gap-3">
                            <Building2 className="w-6 h-6 text-amber-500" />
                            Bank Account Details
                        </h2>

                        <div className="space-y-6 relative z-10">
                            <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl transition-all cursor-pointer border border-white/5 hover:border-amber-500/50"
                                onClick={() => copyToClipboard(donationDetails.iban, 'iban')}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <label className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-1 block">IBAN</label>
                                        <p className="text-xl sm:text-3xl font-mono text-white tracking-wider">{donationDetails.iban}</p>
                                    </div>
                                    <button className="text-slate-400 group-hover:text-white transition-colors">
                                        {copiedField === 'iban' ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl transition-all cursor-pointer border border-white/5 hover:border-amber-500/50"
                                    onClick={() => copyToClipboard(donationDetails.bic, 'bic')}>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <label className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-1 block">BIC / SWIFT</label>
                                            <p className="text-lg font-mono text-white tracking-wider">{donationDetails.bic}</p>
                                        </div>
                                        <button className="text-slate-400 group-hover:text-white transition-colors">
                                            {copiedField === 'bic' ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>

                                <div className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl transition-all cursor-pointer border border-white/5 hover:border-amber-500/50"
                                    onClick={() => copyToClipboard(donationDetails.postal, 'postal')}>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <label className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-1 block">Postal Account</label>
                                            <p className="text-lg font-mono text-white tracking-wider">{donationDetails.postal}</p>
                                        </div>
                                        <button className="text-slate-400 group-hover:text-white transition-colors">
                                            {copiedField === 'postal' ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 sm:p-12 bg-slate-50/50">
                        <h2 className="text-2xl font-black text-blue-950 tracking-widest uppercase mb-8 flex items-center gap-3">
                            <MapPin className="w-6 h-6 text-amber-500" />
                            Organization Address
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-blue-900">Swiss Barakah Charity</h3>
                                <p className="text-slate-600 font-medium leading-relaxed">
                                    Wattstrasse 3<br />
                                    8050 Zürich<br />
                                    Switzerland
                                </p>
                            </div>

                            <div className="space-y-4">
                                <a href="tel:+41432152347" className="flex items-center gap-3 text-slate-600 hover:text-blue-900 font-bold transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                                        <Phone className="w-5 h-5 text-amber-600 group-hover:text-white" />
                                    </div>
                                    +41 43 215 23 47
                                </a>
                                <a href="mailto:info@barakah.ch" className="flex items-center gap-3 text-slate-600 hover:text-blue-900 font-bold transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                                        <Mail className="w-5 h-5 text-amber-600 group-hover:text-white" />
                                    </div>
                                    info@barakah.ch
                                </a>
                                <div className="flex items-center gap-3 text-slate-600 font-medium">
                                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                                        <Globe className="w-5 h-5 text-amber-600" />
                                    </div>
                                    Tax-exempt Swiss aid organization
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonatePage;
