import React, { useMemo, useState } from 'react';
import { AlertCircle, Award, BadgeCheck, CalendarDays, FileSearch, GraduationCap, Search, UserSquare2 } from 'lucide-react';
import studentsData from '../assets/data/students.json';
import { StudentCertificateRecord } from '../types';

const certificateFiles = import.meta.glob('../assets/certificate/*.{png,jpg,jpeg,pdf}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const students = studentsData as StudentCertificateRecord[];

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

const normalizeCertificateId = (value: string) => value.trim().toUpperCase();

const StudentVerificationPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [submittedQuery, setSubmittedQuery] = useState('');

  const matchedStudent = useMemo(() => {
    if (!submittedQuery) {
      return null;
    }

    return students.find(
      (student) => normalizeCertificateId(student.certificateId) === submittedQuery
    ) ?? null;
  }, [submittedQuery]);

  const certificateUrl = matchedStudent
    ? certificateFiles[`../assets/certificate/${matchedStudent.certificateFile}`]
    : undefined;

  const hasAttemptedSearch = submittedQuery.length > 0;
  const isExactMatch = Boolean(matchedStudent && matchedStudent.verificationStatus === 'verified');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedQuery(normalizeCertificateId(query));
  };

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.16),_transparent_28%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_42%,_#eff6ff_100%)] pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-amber-600 shadow-sm">
              <BadgeCheck className="h-4 w-4" />
              Student Certificate Verification
            </span>
            <h1 className="mt-8 max-w-3xl text-5xl font-black tracking-tighter text-blue-950 sm:text-6xl">
              Verify a Barakah certificate with the exact unique ID.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-slate-600">
              Enter the certificate ID exactly as issued. We only reveal the student record and certificate preview when the ID is correct.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
              <label htmlFor="certificate-id" className="text-sm font-black uppercase tracking-[0.24em] text-blue-950">
                Certificate Unique ID
              </label>
              <div className="mt-4 flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    id="certificate-id"
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Example: BEC-2026-WEB-001"
                    className="h-16 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-5 text-base font-bold uppercase tracking-[0.12em] text-blue-950 outline-none transition focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-100"
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-16 items-center justify-center rounded-2xl bg-blue-950 px-8 text-sm font-black uppercase tracking-[0.22em] text-white transition hover:bg-blue-900"
                >
                  Verify Now
                </button>
              </div>
              <p className="mt-4 text-sm font-medium text-slate-500">
                Verification is case-insensitive, but the certificate ID must match a valid issued record.
              </p>
            </form>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ['Secure Lookup', 'Only exact issued IDs return a record.'],
                ['Certificate Ready', 'Supports image and PDF certificate files.'],
                ['Easy to Update', 'Add new students by editing one JSON file.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-lg shadow-slate-200/40 backdrop-blur">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-950">{title}</p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.25rem] border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-300/20 sm:p-8">
            {!hasAttemptedSearch && (
              <div className="flex min-h-[520px] flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-slate-300 bg-slate-50 px-8 text-center">
                <FileSearch className="h-14 w-14 text-amber-500" />
                <h2 className="mt-6 text-2xl font-black tracking-tighter text-blue-950">Waiting for certificate lookup</h2>
                <p className="mt-4 max-w-md text-base font-medium leading-relaxed text-slate-500">
                  Search with a valid certificate ID to display the student details and certificate preview here.
                </p>
              </div>
            )}

            {hasAttemptedSearch && !isExactMatch && (
              <div className="flex min-h-[520px] flex-col items-center justify-center rounded-[1.75rem] border border-rose-200 bg-rose-50 px-8 text-center">
                <AlertCircle className="h-14 w-14 text-rose-500" />
                <h2 className="mt-6 text-2xl font-black tracking-tighter text-blue-950">Certificate not found</h2>
                <p className="mt-4 max-w-md text-base font-medium leading-relaxed text-slate-600">
                  We could not verify the ID <span className="font-black text-blue-950">{submittedQuery}</span>. Check the certificate number and try again.
                </p>
              </div>
            )}

            {isExactMatch && matchedStudent && (
              <div className="space-y-6">
                <div className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-5">
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-8 w-8 text-emerald-600" />
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Certificate Verified</p>
                      <h2 className="text-2xl font-black tracking-tighter text-blue-950">{matchedStudent.fullName}</h2>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-slate-50 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Certificate ID</p>
                    <p className="mt-3 text-lg font-black text-blue-950">{matchedStudent.certificateId}</p>
                  </div>
                  <div className="rounded-[1.5rem] bg-slate-50 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Student ID</p>
                    <p className="mt-3 text-lg font-black text-blue-950">{matchedStudent.studentId}</p>
                  </div>
                </div>

                <div className="space-y-4 rounded-[1.75rem] border border-slate-200 p-6">
                  <div className="flex items-center gap-3">
                    <UserSquare2 className="h-5 w-5 text-amber-600" />
                    <p className="text-sm font-bold text-slate-600">Student: <span className="text-blue-950">{matchedStudent.fullName}</span></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-amber-600" />
                    <p className="text-sm font-bold text-slate-600">Course: <span className="text-blue-950">{matchedStudent.courseName}</span></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-amber-600" />
                    <p className="text-sm font-bold text-slate-600">Batch / Grade: <span className="text-blue-950">{matchedStudent.batch} - {matchedStudent.grade}</span></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-amber-600" />
                    <p className="text-sm font-bold text-slate-600">Issued on: <span className="text-blue-950">{formatDate(matchedStudent.issueDate)}</span></p>
                  </div>
                </div>

                {certificateUrl ? (
                  certificateUrl.toLowerCase().endsWith('.pdf') ? (
                    <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
                      <iframe
                        src={certificateUrl}
                        title={`${matchedStudent.fullName} certificate`}
                        className="h-[520px] w-full"
                      />
                    </div>
                  ) : (
                    <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
                      <img
                        src={certificateUrl}
                        alt={`${matchedStudent.fullName} certificate`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )
                ) : (
                  <div className="rounded-[1.75rem] border border-dashed border-amber-300 bg-amber-50 p-6">
                    <p className="text-sm font-bold leading-relaxed text-slate-700">
                      The record is verified, but the certificate file <span className="font-black text-blue-950">{matchedStudent.certificateFile}</span> is not currently available in <span className="font-black text-blue-950">assets/certificate</span>.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentVerificationPage;
