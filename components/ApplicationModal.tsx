
import React from 'react';
import { X, ExternalLink } from 'lucide-react';

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-blue-950/90 backdrop-blur-md animate-in fade-in duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-4xl h-[90vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 bg-slate-50">
                    <div>
                        <h3 className="text-2xl font-black text-blue-950 tracking-tighter">Student Application</h3>
                        <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">3rd Batch Intake - 2026</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://forms.gle/fBVoBWv2ZMS7mDM89"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 text-slate-400 hover:text-blue-900 transition-colors"
                            title="Open in new tab"
                        >
                            <ExternalLink className="w-6 h-6" />
                        </a>
                        <button
                            onClick={onClose}
                            className="p-3 bg-white hover:bg-amber-500 hover:text-blue-900 rounded-2xl transition-all shadow-sm border border-slate-100"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Loading State / Iframe */}
                <div className="flex-1 bg-slate-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Loading Form...</p>
                        </div>
                    </div>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScofxYNnXR-yQGXMDL6FPk6zsr4fO2MRbQefWQK-d-EGSRH9A/viewform?usp=header"
                        className="w-full h-full border-none"
                        title="Student Application Form"
                    >
                        Loading…
                    </iframe>
                </div>

                {/* Footer info */}
                <div className="px-8 py-4 bg-blue-950 text-white text-center text-[10px] font-bold uppercase tracking-[0.2em]">
                    Barakah Education Center • Excellence in Skills & Character
                </div>
            </div>
        </div>
    );
};

export default ApplicationModal;
