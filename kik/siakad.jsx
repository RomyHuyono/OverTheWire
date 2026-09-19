import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Users, 
  GraduationCap, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  AlertCircle, 
  BookOpen, 
  Calendar, 
  FileText, 
  Printer, 
  Send, 
  Bell, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Award, 
  TrendingUp, 
  BarChart2, 
  Settings, 
  LogOut, 
  UserCheck, 
  Mail, 
  Phone, 
  Zap,
  Filter,
  Check,
  Download,
  Info
} from 'lucide-react';

// Mock Data Siswa
const INITIAL_STUDENTS = [
  { id: 'S001', nisn: '0051234561', name: 'Ahmad Rizky Pratama', class: 'X-IPA-1', email: 'ahmad.rizky@example.com', parentPhone: '+6281234567890', parentName: 'Bambang Pratama' },
  { id: 'S002', nisn: '0051234562', name: 'Siti Nurhaliza', class: 'X-IPA-1', email: 'siti.nur@example.com', parentPhone: '+6281234567891', parentName: 'Rahmat Hidayat' },
  { id: 'S003', nisn: '0051234563', name: 'Budi Santoso', class: 'X-IPA-2', email: 'budi.s@example.com', parentPhone: '+6281234567892', parentName: 'Joko Santoso' },
  { id: 'S004', nisn: '0051234564', name: 'Dewi Lestari', class: 'X-IPA-2', email: 'dewi.l@example.com', parentPhone: '+6281234567893', parentName: 'Sri Wahyuni' },
  { id: 'S005', nisn: '0051234565', name: 'Eko Prasetyo', class: 'XI-IPA-1', email: 'eko.p@example.com', parentPhone: '+6281234567894', parentName: 'Agus Prasetyo' }
];

// Mock Data Guru
const INITIAL_TEACHERS = [
  { id: 'G001', nip: '198501152010011001', name: 'Drs. Supriyadi, M.Pd', subject: 'Matematika', status: 'Hadir' },
  { id: 'G002', nip: '198803222012012002', name: 'Rina Wijaya, S.Pd', subject: 'Bahasa Indonesia', status: 'Hadir' },
  { id: 'G003', nip: '199007102015011003', name: 'Hendrik Kurniawan, M.Si', subject: 'Fisika', status: 'Izin' },
  { id: 'G004', nip: '199211052018012004', name: 'Nani Sumarni, S.Pd', subject: 'Bahasa Inggris', status: 'Hadir' }
];

// Mock Data Mata Pelajaran
const SUBJECTS = ['Matematika', 'Bahasa Indonesia', 'Bahasa Inggris', 'Fisika', 'Kimia', 'Biologi', 'Sejarah'];

// Mock Data Nilai
const INITIAL_GRADES = [
  { id: 1, studentId: 'S001', subject: 'Matematika', harian: [85, 90, 88], uts: 85, uas: 90, month: 'Agustus' },
  { id: 2, studentId: 'S001', subject: 'Bahasa Indonesia', harian: [90, 85, 92], uts: 88, uas: 91, month: 'Agustus' },
  { id: 3, studentId: 'S001', subject: 'Bahasa Inggris', harian: [78, 80, 85], uts: 82, uas: 85, month: 'Agustus' },
  { id: 4, studentId: 'S002', subject: 'Matematika', harian: [70, 75, 80], uts: 78, uas: 82, month: 'Agustus' },
  { id: 5, studentId: 'S002', subject: 'Bahasa Indonesia', harian: [88, 90, 85], uts: 85, uas: 88, month: 'Agustus' },
  { id: 6, studentId: 'S003', subject: 'Matematika', harian: [95, 92, 98], uts: 94, uas: 96, month: 'Agustus' }
];

// Mock Data Absensi Murid
const INITIAL_ATTENDANCE = [
  { id: 1, studentId: 'S001', date: '2026-09-01', subject: 'Matematika', status: 'Hadir' },
  { id: 2, studentId: 'S001', date: '2026-09-02', subject: 'Bahasa Indonesia', status: 'Hadir' },
  { id: 3, studentId: 'S001', date: '2026-09-03', subject: 'Fisika', status: 'Izin' },
  { id: 4, studentId: 'S002', date: '2026-09-01', subject: 'Matematika', status: 'Hadir' },
  { id: 5, studentId: 'S002', date: '2026-09-02', subject: 'Bahasa Indonesia', status: 'Sakit' },
  { id: 6, studentId: 'S003', date: '2026-09-01', subject: 'Matematika', status: 'Alpha' },
];

export default function App() {
  // State Peran / Role: 'admin' | 'guru' | 'murid'
  const [role, setRole] = useState('admin');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // States Dynamic Data
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [teachers, setTeachers] = useState(INITIAL_TEACHERS);
  const [grades, setGrades] = useState(INITIAL_GRADES);
  const [attendance, setAttendance] = useState(INITIAL_ATTENDANCE);

  // State Modal & Filter
  const [selectedStudentForRapor, setSelectedStudentForRapor] = useState('S001');
  const [selectedClassFilter, setSelectedClassFilter] = useState('X-IPA-1');
  const [selectedMonthFilter, setSelectedMonthFilter] = useState('Agustus');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState('Matematika');

  // State Cron Simulation Modal
  const [cronModalOpen, setCronModalOpen] = useState(false);
  const [cronLog, setCronLog] = useState([]);
  const [isCronRunning, setIsCronRunning] = useState(false);

  // Quick Notification Toast
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const runCronJobSimulation = () => {
    setIsCronRunning(true);
    setCronLog([]);
    setCronModalOpen(true);

    const logs = [];
    logs.push('[CRON TASK] Inisialisasi Job Otomatis Tanggal 1 Pukul 07:00:00 AM...');

    setTimeout(() => {
      logs.push('[1/3] Kalkulasi rata-rata nilai bulanan untuk seluruh siswa...');
      setCronLog([...logs]);
    }, 1000);

    setTimeout(() => {
      logs.push('[2/3] Menyusun rekap persentase kehadiran siswa...');
      setCronLog([...logs]);
    }, 2000);

    setTimeout(() => {
      logs.push(`[3/3] Mengirimkan ${students.length} Notifikasi otomatis via WhatsApp API & Email Wali Murid...`);
      students.forEach(st => {
        logs.push(`   ✓ Broadcast dikirim ke ${st.parentName} (${st.parentPhone}): "Laporan Nilai Bulan ${selectedMonthFilter} Siswa: ${st.name}"`);
      });
      logs.push('[SELESAI] Tugas terjadwal berhasil dieksekusi dengan sukses!');
      setCronLog([...logs]);
      setIsCronRunning(false);
    }, 3500);
  };

  // Function Menghitung Rapor Siswa
  const calculateRaporData = (studentId) => {
    const student = students.find(s => s.id === studentId);
    if (!student) return null;

    const studentGrades = grades.filter(g => g.studentId === studentId);
    
    // Perhitungan Kehadiran
    const studentAtt = attendance.filter(a => a.studentId === studentId);
    const totalAtt = studentAtt.length;
    const hadirCount = studentAtt.filter(a => a.status === 'Hadir').length;
    const sakitCount = studentAtt.filter(a => a.status === 'Sakit').length;
    const izinCount = studentAtt.filter(a => a.status === 'Izin').length;
    const alphaCount = studentAtt.filter(a => a.status === 'Alpha').length;
    const attPercentage = totalAtt > 0 ? Math.round((hadirCount / totalAtt) * 100) : 100;

    // Kalkulasi Rekap Nilai per Mapel
    const processedSubjects = SUBJECTS.map(subj => {
      const g = studentGrades.find(item => item.subject === subj);
      let avgHarian = 0;
      let uts = 0;
      let uas = 0;
      let finalGrade = 0;

      if (g) {
        const sumH = g.harian.reduce((a, b) => a + b, 0);
        avgHarian = g.harian.length ? sumH / g.harian.length : 0;
        uts = g.uts || 0;
        uas = g.uas || 0;
        // Formula: 40% Harian + 30% UTS + 30% UAS
        finalGrade = Math.round((avgHarian * 0.4) + (uts * 0.3) + (uas * 0.3));
      } else {
        // Fallback dummy score jika belum dimasukkan
        avgHarian = 80; uts = 82; uas = 85;
        finalGrade = 82;
      }

      let predikat = 'C';
      let deskripsi = 'Memenuhi capaian pembelajaran minimal.';
      if (finalGrade >= 90) {
        predikat = 'A';
        deskripsi = 'Sangat baik dalam menguasai seluruh kompetensi dasar.';
      } else if (finalGrade >= 80) {
        predikat = 'B';
        deskripsi = 'Baik dalam menguasai kompetensi dasar dan aktif.';
      } else if (finalGrade >= 70) {
        predikat = 'C';
        deskripsi = 'Cukup memahami kompetensi dasar, perlu peningkatan.';
      } else {
        predikat = 'D';
        deskripsi = 'Perlu bimbingan intensif pada materi dasar.';
      }

      return {
        subject: subj,
        avgHarian: Math.round(avgHarian),
        uts,
        uas,
        finalGrade,
        predikat,
        deskripsi
      };
    });

    const sumFinal = processedSubjects.reduce((acc, curr) => acc + curr.finalGrade, 0);
    const overallAvg = Math.round(sumFinal / processedSubjects.length);

    return {
      student,
      attendanceStats: { totalAtt, hadirCount, sakitCount, izinCount, alphaCount, attPercentage },
      subjectsData: processedSubjects,
      overallAvg
    };
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-bounce">
          <Zap className="w-5 h-5 text-amber-400" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-30 shadow-md">
        <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-sky-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/30">
                SK
              </div>
              <div>
                <h1 className="font-bold text-lg leading-tight tracking-tight text-white">SIAKAD Smart</h1>
                <p className="text-[11px] text-cyan-400 font-medium hidden sm:block">SMA Negeri 1 Nusa Bangsa</p>
              </div>
            </div>
          </div>

          {/* Role Switcher Controls */}
          <div className="flex items-center gap-3">
            <div className="bg-slate-800/80 p-1 rounded-xl flex items-center border border-slate-700">
              <span className="text-xs text-slate-400 px-2 font-medium hidden lg:inline">Peran Preview:</span>
              <button
                onClick={() => { setRole('admin'); showToast('Mode diganti: Admin'); }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  role === 'admin' ? 'bg-cyan-500 text-white shadow-md' : 'text-slate-300 hover:text-white'
                }`}
              >
                Admin
              </button>
              <button
                onClick={() => { setRole('guru'); showToast('Mode diganti: Guru'); }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  role === 'guru' ? 'bg-cyan-500 text-white shadow-md' : 'text-slate-300 hover:text-white'
                }`}
              >
                Guru
              </button>
              <button
                onClick={() => { setRole('murid'); showToast('Mode diganti: Murid / Wali'); }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  role === 'murid' ? 'bg-cyan-500 text-white shadow-md' : 'text-slate-300 hover:text-white'
                }`}
              >
                Murid/Wali
              </button>
            </div>

            {/* Profile Pill */}
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-slate-700">
              <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-200">
                {role === 'admin' ? 'AD' : role === 'guru' ? 'GR' : 'MR'}
              </div>
              <div className="text-left text-xs">
                <p className="font-semibold text-slate-200 leading-tight">
                  {role === 'admin' ? 'Administrator' : role === 'guru' ? 'Rina Wijaya, S.Pd' : 'Ahmad Rizky (Wali)'}
                </p>
                <p className="text-[10px] text-slate-400 capitalize">{role}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar + Content Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <aside 
          className={`fixed md:static inset-y-0 left-0 z-20 w-64 bg-slate-900 text-slate-300 border-r border-slate-800 transition-transform duration-300 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          } flex flex-col justify-between`}
        >
          <div className="p-4 space-y-6">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-3">
              Menu Utama ({role})
            </div>
            
            <nav className="space-y-1">
              <button
                onClick={() => { setActiveTab('dashboard'); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition ${
                  activeTab === 'dashboard' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <BarChart2 className="w-5 h-5" />
                Dashboard Utama
              </button>

              {(role === 'admin' || role === 'guru') && (
                <button
                  onClick={() => { setActiveTab('absensi'); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition ${
                    activeTab === 'absensi' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <UserCheck className="w-5 h-5" />
                  Kelola Absensi
                </button>
              )}

              {(role === 'admin' || role === 'guru') && (
                <button
                  onClick={() => { setActiveTab('nilai'); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition ${
                    activeTab === 'nilai' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <BookOpen className="w-5 h-5" />
                  Penilaian & Rekap
                </button>
              )}

              <button
                onClick={() => { setActiveTab('erapor'); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition ${
                  activeTab === 'erapor' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Award className="w-5 h-5" />
                E-Rapor Digital
              </button>

              {role === 'admin' && (
                <button
                  onClick={() => { setActiveTab('master'); setSidebarOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition ${
                    activeTab === 'master' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Users className="w-5 h-5" />
                  Data Master Siswa/Guru
                </button>
              )}
            </nav>

            {/* Quick Automation Trigger Section */}
            <div className="pt-4 border-t border-slate-800">
              <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                  <Zap className="w-4 h-4" />
                  Otomatisasi Sistem
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Simulasi Cron Job Tanggal 1 (07:00 AM) Kirim WhatsApp/Email Rekap Bulanan.
                </p>
                <button
                  onClick={runCronJobSimulation}
                  className="w-full mt-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs py-2 px-3 rounded-lg border border-amber-500/30 font-medium transition flex items-center justify-center gap-2"
                >
                  <Clock className="w-3.5 h-3.5" />
                  Jalankan Cron Job
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-slate-800 text-xs text-slate-500 text-center">
            SIAKAD v2.5 - Build 2026
          </div>
        </aside>

        {/* Main Workspace Container */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <DashboardView 
              students={students} 
              teachers={teachers} 
              role={role}
              onNavigate={setActiveTab}
            />
          )}

          {/* Absensi Tab */}
          {activeTab === 'absensi' && (
            <AbsensiView 
              teachers={teachers} 
              setTeachers={setTeachers} 
              students={students}
              attendance={attendance}
              setAttendance={setAttendance}
              showToast={showToast}
            />
          )}

          {/* Penilaian Tab */}
          {activeTab === 'nilai' && (
            <PenilaianView 
              students={students} 
              grades={grades} 
              setGrades={setGrades}
              showToast={showToast}
              runCronJobSimulation={runCronJobSimulation}
            />
          )}

          {/* E-Rapor Tab */}
          {activeTab === 'erapor' && (
            <ERaporView 
              students={students}
              selectedStudentId={selectedStudentForRapor}
              setSelectedStudentId={setSelectedStudentForRapor}
              calculateRaporData={calculateRaporData}
              role={role}
            />
          )}

          {/* Data Master Tab */}
          {activeTab === 'master' && (
            <DataMasterView 
              students={students}
              setStudents={setStudents}
              teachers={teachers}
              setTeachers={setTeachers}
              showToast={showToast}
            />
          )}
        </main>
      </div>

      {}
      {cronModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden">
            <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-800/40">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <h3 className="font-semibold text-lg">Simulasi Scheduled Cron Job</h3>
              </div>
              <button 
                onClick={() => setCronModalOpen(false)}
                className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-5 space-y-4">
              <div className="bg-black/50 p-4 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 h-60 overflow-y-auto space-y-2">
                {cronLog.map((log, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-slate-600">&gt;</span>
                    <span>{log}</span>
                  </div>
                ))}
                {isCronRunning && (
                  <div className="flex items-center gap-2 text-amber-400 animate-pulse pt-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    <span>Memproses kalkulasi & gateway notifikasi...</span>
                  </div>
                )}
              </div>

              <div className="bg-sky-950/40 border border-sky-800/50 rounded-xl p-3 text-xs text-sky-200 flex items-start gap-3">
                <Info className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <p>
                  Sistem otomatis ini berjalan setiap **Tanggal 1 Pukul 07:00 Pagi** melalui Job Queue (BullMQ/Celery) di server produksi untuk merekapitulasi performa bulanan dan mengirim broadcast WA/Email kepada seluruh orang tua siswa.
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-800/20 flex justify-end">
              <button
                onClick={() => setCronModalOpen(false)}
                disabled={isCronRunning}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold transition disabled:opacity-50"
              >
                Tutup Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DashboardView({ students, teachers, role, onNavigate }) {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-950 text-white p-6 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-2">
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full text-xs font-semibold">
            Sistem Informasi Akademik Terpadu
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Selamat Datang di SIAKAD Smart!
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Platform pengelolaan absensi real-time, rekapitulasi nilai berkala, notifikasi wali murid otomatis, dan penerbitan E-Rapor sekolah modern.
          </p>
        </div>
        <div className="absolute right-4 bottom-0 opacity-10 hidden lg:block">
          <GraduationCap className="w-64 h-64 text-cyan-400" />
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500">Total Siswa Active</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{students.length}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <p className="text-[11px] text-emerald-600 font-medium mt-3 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> 100% Terdaftar Aktif
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500">Kehadiran Hari Ini</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">94.8%</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>
          <p className="text-[11px] text-slate-500 mt-3">Persentase kehadiran gabungan</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500">Rata-Rata Nilai Sekolah</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">86.4</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
          </div>
          <p className="text-[11px] text-cyan-600 font-medium mt-3 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" /> +2.3% dibanding bulan lalu
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500">Tenaga Pengajar</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">{teachers.length}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
          </div>
          <p className="text-[11px] text-slate-500 mt-3">Guru & Pembina Akademik</p>
        </div>
      </div>

      {/* Visual Analytics / Charts Mock */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Rekapitulasi Kehadiran & Performa Bulanan</h3>
              <p className="text-xs text-slate-500">Tren kehadiran dan rerata nilai per kelas semester ini</p>
            </div>
            <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 rounded-lg text-slate-600">
              Tahun Ajaran 2026/2027
            </span>
          </div>

          {/* Bar Chart Visualization */}
          <div className="space-y-4 pt-2">
            {[
              { label: 'Kelas X-IPA-1', attendance: 96, grade: 88, color: 'bg-cyan-500' },
              { label: 'Kelas X-IPA-2', attendance: 92, grade: 84, color: 'bg-sky-500' },
              { label: 'Kelas XI-IPA-1', attendance: 94, grade: 87, color: 'bg-indigo-500' },
              { label: 'Kelas XII-IPA-1', attendance: 98, grade: 91, color: 'bg-teal-500' },
            ].map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-700">{item.label}</span>
                  <span className="text-slate-500">Kehadiran: {item.attendance}% | Nilai Rerata: {item.grade}</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
                  <div 
                    className={`h-full ${item.color} rounded-full transition-all duration-500`}
                    style={{ width: `${item.attendance}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Action Widget */}
        <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-cyan-400">
              <Zap className="w-5 h-5" />
              <h3 className="font-bold text-base text-white">Aksi Cepat Sistem</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Navigasi langsung ke modul utama sesuai peran aktif Anda ({role.toUpperCase()}).
            </p>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => onNavigate('erapor')}
                className="w-full py-2.5 px-4 bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs rounded-xl transition text-left flex items-center justify-between"
              >
                <span>Cetak / Unduh E-Rapor</span>
                <Award className="w-4 h-4" />
              </button>

              {(role === 'admin' || role === 'guru') && (
                <button
                  onClick={() => onNavigate('absensi')}
                  className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs rounded-xl transition text-left flex items-center justify-between"
                >
                  <span>Input Absensi Harian</span>
                  <UserCheck className="w-4 h-4" />
                </button>
              )}

              {(role === 'admin' || role === 'guru') && (
                <button
                  onClick={() => onNavigate('nilai')}
                  className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs rounded-xl transition text-left flex items-center justify-between"
                >
                  <span>Input Nilai Harian & UTS/UAS</span>
                  <BookOpen className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-slate-800 text-[11px] text-slate-400">
            Status Server: <span className="text-emerald-400 font-semibold">Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AbsensiView({ teachers, setTeachers, students, attendance, setAttendance, showToast }) {
  const [activeSubTab, setActiveSubTab] = useState('murid'); // 'murid' | 'guru'
  const [selectedClass, setSelectedClass] = useState('X-IPA-1');
  const [selectedSubject, setSelectedSubject] = useState('Matematika');
  const [attendanceDate, setAttendanceDate] = useState('2026-09-10');

  // Filter siswa berdasarkan kelas
  const filteredStudents = students.filter(s => s.class === selectedClass);

  // Toggle status kehadiran murid
  const handleMarkStudentAttendance = (studentId, status) => {
    const existingIndex = attendance.findIndex(a => a.studentId === studentId && a.date === attendanceDate && a.subject === selectedSubject);
    
    if (existingIndex >= 0) {
      const updated = [...attendance];
      updated[existingIndex].status = status;
      setAttendance(updated);
    } else {
      setAttendance([
        ...attendance,
        { id: Date.now(), studentId, date: attendanceDate, subject: selectedSubject, status }
      ]);
    }
    showToast(`Status absensi diperbarui menjadi ${status}`);
  };

  // Toggle status kehadiran guru
  const handleTeacherStatusChange = (teacherId, newStatus) => {
    setTeachers(teachers.map(t => t.id === teacherId ? { ...t, status: newStatus } : t));
    showToast(`Status guru diperbarui menjadi ${newStatus}`);
  };

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveSubTab('murid')}
            className={`px-4 py-2 font-semibold text-sm rounded-xl transition ${
              activeSubTab === 'murid' ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Absensi Murid
          </button>
          <button
            onClick={() => setActiveSubTab('guru')}
            className={`px-4 py-2 font-semibold text-sm rounded-xl transition ${
              activeSubTab === 'guru' ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Absensi Guru
          </button>
        </div>
        <div className="text-xs text-slate-500 font-medium">
          Tanggal Terpilih: <input type="date" value={attendanceDate} onChange={(e) => setAttendanceDate(e.target.value)} className="bg-white border rounded-lg px-2 py-1 text-xs font-semibold text-slate-700" />
        </div>
      </div>

      {activeSubTab === 'murid' ? (
        <div className="space-y-4">
          {/* Controls Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <div>
                <label className="text-[11px] font-semibold text-slate-500 block mb-1">Pilih Kelas</label>
                <select 
                  value={selectedClass} 
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="X-IPA-1">X-IPA-1</option>
                  <option value="X-IPA-2">X-IPA-2</option>
                  <option value="XI-IPA-1">XI-IPA-1</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-500 block mb-1">Mata Pelajaran</label>
                <select 
                  value={selectedSubject} 
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  {SUBJECTS.map((s, idx) => (
                    <option key={idx} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-xs text-slate-500">
              Total Siswa di Kelas: <span className="font-bold text-slate-800">{filteredStudents.length}</span> Siswa
            </div>
          </div>

          {/* Table Absensi Murid */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-4">NISN / Nama Siswa</th>
                    <th className="p-4">Kelas</th>
                    <th className="p-4 text-center">Status Kehadiran</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredStudents.map(st => {
                    const rec = attendance.find(a => a.studentId === st.id && a.date === attendanceDate && a.subject === selectedSubject);
                    const currentStatus = rec ? rec.status : 'Hadir';

                    return (
                      <tr key={st.id} className="hover:bg-slate-50/80 transition">
                        <td className="p-4">
                          <p className="font-bold text-slate-900">{st.name}</p>
                          <p className="text-[10px] text-slate-400">NISN: {st.nisn}</p>
                        </td>
                        <td className="p-4 font-medium text-slate-600">{st.class}</td>
                        <td className="p-4">
                          <div className="flex items-center justify-center gap-1.5">
                            {['Hadir', 'Izin', 'Sakit', 'Alpha'].map(status => (
                              <button
                                key={status}
                                onClick={() => handleMarkStudentAttendance(st.id, status)}
                                className={`px-3 py-1.5 rounded-lg font-semibold transition text-xs ${
                                  currentStatus === status
                                    ? status === 'Hadir' ? 'bg-emerald-500 text-white shadow-sm'
                                    : status === 'Izin' ? 'bg-amber-500 text-white shadow-sm'
                                    : status === 'Sakit' ? 'bg-sky-500 text-white shadow-sm'
                                    : 'bg-rose-500 text-white shadow-sm'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                              >
                                {status}
                              </button>
                            ))}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        /* Absensi Guru SubTab */
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
            <h3 className="font-bold text-slate-800 text-sm">Pencatatan Kehadiran Guru Harian</h3>
            <span className="text-xs text-slate-500 font-medium">Total: {teachers.length} Guru</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider">
                <tr>
                  <th className="p-4">NIP / Nama Guru</th>
                  <th className="p-4">Mata Pelajaran</th>
                  <th className="p-4 text-center">Status Presensi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {teachers.map(t => (
                  <tr key={t.id} className="hover:bg-slate-50/80 transition">
                    <td className="p-4">
                      <p className="font-bold text-slate-900">{t.name}</p>
                      <p className="text-[10px] text-slate-400">NIP: {t.nip}</p>
                    </td>
                    <td className="p-4 font-medium text-slate-600">{t.subject}</td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-1.5">
                        {['Hadir', 'Izin', 'Sakit', 'Alpha'].map(status => (
                          <button
                            key={status}
                            onClick={() => handleTeacherStatusChange(t.id, status)}
                            className={`px-3 py-1.5 rounded-lg font-semibold transition text-xs ${
                              t.status === status
                                ? status === 'Hadir' ? 'bg-emerald-500 text-white shadow-sm'
                                : status === 'Izin' ? 'bg-amber-500 text-white shadow-sm'
                                : status === 'Sakit' ? 'bg-sky-500 text-white shadow-sm'
                                : 'bg-rose-500 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function PenilaianView({ students, grades, setGrades, showToast, runCronJobSimulation }) {
  const [selectedSubject, setSelectedSubject] = useState('Matematika');
  const [selectedMonth, setSelectedMonth] = useState('Agustus');

  const handleGradeChange = (studentId, field, value, harianIdx = null) => {
    const numericValue = Math.min(100, Math.max(0, Number(value) || 0));
    const existingIndex = grades.findIndex(g => g.studentId === studentId && g.subject === selectedSubject);

    if (existingIndex >= 0) {
      const updated = [...grades];
      if (field === 'harian') {
        updated[existingIndex].harian[harianIdx] = numericValue;
      } else {
        updated[existingIndex][field] = numericValue;
      }
      setGrades(updated);
    } else {
      const newGradeObj = {
        id: Date.now(),
        studentId,
        subject: selectedSubject,
        harian: [80, 80, 80],
        uts: 80,
        uas: 80,
        month: selectedMonth
      };
      if (field === 'harian') {
        newGradeObj.harian[harianIdx] = numericValue;
      } else {
        newGradeObj[field] = numericValue;
      }
      setGrades([...grades, newGradeObj]);
    }
    showToast('Nilai berhasil disimpan');
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <label className="text-[11px] font-semibold text-slate-500 block mb-1">Mata Pelajaran</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {SUBJECTS.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-500 block mb-1">Bulan Evaluasi</label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {['Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'].map((m, i) => (
                <option key={i} value={m}>{m}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Cron Job Trigger Button */}
        <button
          onClick={runCronJobSimulation}
          className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-2 transition"
        >
          <Zap className="w-4 h-4" />
          Simulasi Cron Job Tanggal 1 (Broadcast Nilai)
        </button>
      </div>

      {/* Tabel Input Nilai Harian & Semester */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
          <h3 className="font-bold text-slate-800 text-sm">Input & Rekap Nilai Siswa ({selectedSubject})</h3>
          <span className="text-xs text-slate-500 font-medium">Bobot: Harian (40%) | UTS (30%) | UAS (30%)</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100/70 text-slate-700 font-bold uppercase tracking-wider">
              <tr>
                <th className="p-4">Nama Siswa</th>
                <th className="p-4 text-center">Tugas 1</th>
                <th className="p-4 text-center">Tugas 2</th>
                <th className="p-4 text-center">Kuis/PR</th>
                <th className="p-4 text-center">Rerata Harian</th>
                <th className="p-4 text-center">UTS</th>
                <th className="p-4 text-center">UAS</th>
                <th className="p-4 text-center">Nilai Akhir</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map(st => {
                const g = grades.find(item => item.studentId === st.id && item.subject === selectedSubject);
                const h1 = g ? g.harian[0] || 0 : 80;
                const h2 = g ? g.harian[1] || 0 : 80;
                const h3 = g ? g.harian[2] || 0 : 80;
                const uts = g ? g.uts || 0 : 80;
                const uas = g ? g.uas || 0 : 80;

                const avgHarian = Math.round((h1 + h2 + h3) / 3);
                const finalGrade = Math.round((avgHarian * 0.4) + (uts * 0.3) + (uas * 0.3));

                return (
                  <tr key={st.id} className="hover:bg-slate-50 transition">
                    <td className="p-4 font-bold text-slate-900">
                      {st.name}
                      <span className="block text-[10px] text-slate-400 font-normal">{st.class}</span>
                    </td>
                    <td className="p-3 text-center">
                      <input 
                        type="number" 
                        value={h1} 
                        onChange={(e) => handleGradeChange(st.id, 'harian', e.target.value, 0)}
                        className="w-14 text-center border rounded-lg py-1 bg-slate-50 focus:bg-white font-semibold"
                      />
                    </td>
                    <td className="p-3 text-center">
                      <input 
                        type="number" 
                        value={h2} 
                        onChange={(e) => handleGradeChange(st.id, 'harian', e.target.value, 1)}
                        className="w-14 text-center border rounded-lg py-1 bg-slate-50 focus:bg-white font-semibold"
                      />
                    </td>
                    <td className="p-3 text-center">
                      <input 
                        type="number" 
                        value={h3} 
                        onChange={(e) => handleGradeChange(st.id, 'harian', e.target.value, 2)}
                        className="w-14 text-center border rounded-lg py-1 bg-slate-50 focus:bg-white font-semibold"
                      />
                    </td>
                    <td className="p-3 text-center font-bold text-slate-700 bg-slate-50/50">
                      {avgHarian}
                    </td>
                    <td className="p-3 text-center">
                      <input 
                        type="number" 
                        value={uts} 
                        onChange={(e) => handleGradeChange(st.id, 'uts', e.target.value)}
                        className="w-14 text-center border rounded-lg py-1 bg-slate-50 focus:bg-white font-semibold text-sky-700"
                      />
                    </td>
                    <td className="p-3 text-center">
                      <input 
                        type="number" 
                        value={uas} 
                        onChange={(e) => handleGradeChange(st.id, 'uas', e.target.value)}
                        className="w-14 text-center border rounded-lg py-1 bg-slate-50 focus:bg-white font-semibold text-indigo-700"
                      />
                    </td>
                    <td className="p-3 text-center">
                      <span className="px-2.5 py-1 rounded-lg font-extrabold bg-emerald-100 text-emerald-800 text-xs">
                        {finalGrade}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ERaporView({ students, selectedStudentId, setSelectedStudentId, calculateRaporData, role }) {
  const printRef = useRef();
  const data = calculateRaporData(selectedStudentId);

  const handlePrint = () => {
    window.print();
  };

  if (!data) return null;

  return (
    <div className="space-y-6">
      {/* Control Panel / Student Switcher */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-wrap items-center justify-between gap-4 print:hidden">
        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-slate-600">Pilih Siswa:</label>
          <select 
            value={selectedStudentId} 
            onChange={(e) => setSelectedStudentId(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold px-3 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {students.map(s => (
              <option key={s.id} value={s.id}>{s.name} ({s.class})</option>
            ))}
          </select>
        </div>

        <button
          onClick={handlePrint}
          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-lg flex items-center gap-2 transition"
        >
          <Printer className="w-4 h-4" />
          Cetak E-Rapor (PDF Resmi)
        </button>
      </div>

      {/* E-RAPOR PRINT CONTAINER */}
      <div ref={printRef} className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xl max-w-4xl mx-auto space-y-8 text-slate-900 print:shadow-none print:border-none print:p-0">
        {/* Kop Surat Sekolah */}
        <div className="border-b-4 border-slate-900 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-bold text-2xl">
              SMA
            </div>
            <div>
              <h2 className="text-xl font-extrabold uppercase tracking-tight text-slate-900">SMA NEGERI 1 NUSA BANGSA</h2>
              <p className="text-xs text-slate-600">Jl. Pendidikan No. 45, Jakarta Selatan | Telp: (021) 7890123</p>
              <p className="text-xs text-slate-500 font-medium">NSS: 101026001002 | NPSN: 20101234</p>
            </div>
          </div>
          <div className="text-right">
            <span className="px-3 py-1 bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold rounded-md">
              E-RAPOR RESMI
            </span>
            <p className="text-[11px] text-slate-500 mt-1">Semester Ganjil 2026/2027</p>
          </div>
        </div>

        {/* Identitas Siswa */}
        <div className="grid grid-cols-2 gap-4 text-xs font-medium bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="space-y-1">
            <p><span className="text-slate-500">Nama Siswa:</span> <strong className="text-slate-900">{data.student.name}</strong></p>
            <p><span className="text-slate-500">NISN / ID:</span> <strong className="text-slate-900">{data.student.nisn}</strong></p>
            <p><span className="text-slate-500">Kelas:</span> <strong className="text-slate-900">{data.student.class}</strong></p>
          </div>
          <div className="space-y-1">
            <p><span className="text-slate-500">Nama Orang Tua/Wali:</span> <strong className="text-slate-900">{data.student.parentName}</strong></p>
            <p><span className="text-slate-500">Tahun Ajaran:</span> <strong className="text-slate-900">2026 / 2027</strong></p>
            <p><span className="text-slate-500">Status Capaian:</span> <strong className="text-emerald-700">Tuntas</strong></p>
          </div>
        </div>

        {/* Tabel Nilai Capaian Kompetensi */}
        <div className="space-y-3">
          <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-1">
            A. Capaian Hasil Belajar (Akademik)
          </h4>
          <table className="w-full text-left text-xs border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
                <th className="p-2.5 border border-slate-300 w-10 text-center">No</th>
                <th className="p-2.5 border border-slate-300">Mata Pelajaran</th>
                <th className="p-2.5 border border-slate-300 text-center w-16">Harian</th>
                <th className="p-2.5 border border-slate-300 text-center w-16">UTS</th>
                <th className="p-2.5 border border-slate-300 text-center w-16">UAS</th>
                <th className="p-2.5 border border-slate-300 text-center w-20">Nilai Akhir</th>
                <th className="p-2.5 border border-slate-300 text-center w-16">Predikat</th>
                <th className="p-2.5 border border-slate-300">Deskripsi Capaian</th>
              </tr>
            </thead>
            <tbody>
              {data.subjectsData.map((subj, idx) => (
                <tr key={idx} className="border-b border-slate-200">
                  <td className="p-2.5 border border-slate-300 text-center font-semibold">{idx + 1}</td>
                  <td className="p-2.5 border border-slate-300 font-bold text-slate-800">{subj.subject}</td>
                  <td className="p-2.5 border border-slate-300 text-center">{subj.avgHarian}</td>
                  <td className="p-2.5 border border-slate-300 text-center">{subj.uts}</td>
                  <td className="p-2.5 border border-slate-300 text-center">{subj.uas}</td>
                  <td className="p-2.5 border border-slate-300 text-center font-extrabold text-slate-900">{subj.finalGrade}</td>
                  <td className="p-2.5 border border-slate-300 text-center font-bold text-slate-800">{subj.predikat}</td>
                  <td className="p-2.5 border border-slate-300 text-[11px] text-slate-600">{subj.deskripsi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Rekap Kehadiran & Catatan */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wide">B. Rekapitulasi Kehadiran</h4>
            <table className="w-full text-xs border border-slate-300">
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-2 bg-slate-50 font-medium border-r border-slate-300">Sakit</td>
                  <td className="p-2 text-center font-bold">{data.attendanceStats.sakitCount} Hari</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 bg-slate-50 font-medium border-r border-slate-300">Izin</td>
                  <td className="p-2 text-center font-bold">{data.attendanceStats.izinCount} Hari</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 bg-slate-50 font-medium border-r border-slate-300">Tanpa Keterangan (Alpha)</td>
                  <td className="p-2 text-center font-bold text-rose-600">{data.attendanceStats.alphaCount} Hari</td>
                </tr>
                <tr>
                  <td className="p-2 bg-slate-100 font-bold border-r border-slate-300">Persentase Kehadiran</td>
                  <td className="p-2 text-center font-extrabold text-emerald-700">{data.attendanceStats.attPercentage}%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wide">C. Catatan Wali Kelas</h4>
            <div className="border border-slate-300 p-3 rounded-lg text-xs text-slate-700 h-28 bg-slate-50/50 leading-relaxed italic">
              "Ananda {data.student.name} menunjukkan semangat belajar yang sangat memuaskan semester ini. Pertahankan konsistensi pada mata pelajaran MIPA dan tingkatkan keaktifan diskusi kelompok."
            </div>
          </div>
        </div>

        {/* Tanda Tangan */}
        <div className="pt-8 grid grid-cols-3 gap-4 text-center text-xs text-slate-800">
          <div>
            <p>Orang Tua / Wali Siswa</p>
            <div className="h-16"></div>
            <p className="font-bold underline">{data.student.parentName}</p>
          </div>
          <div>
            <p>Jakarta, 10 September 2026<br />Wali Kelas</p>
            <div className="h-12"></div>
            <p className="font-bold underline">Rina Wijaya, S.Pd</p>
            <p className="text-[10px] text-slate-500">NIP. 198803222012012002</p>
          </div>
          <div>
            <p>Kepala Sekolah</p>
            <div className="h-16"></div>
            <p className="font-bold underline">Dr. H. Ahmad Fauzi, M.Pd</p>
            <p className="text-[10px] text-slate-500">NIP. 197505101999031001</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DataMasterView({ students, setStudents, teachers, setTeachers, showToast }) {
  const [activeTab, setActiveTab] = useState('siswa');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudents = students.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredTeachers = teachers.filter(t => t.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('siswa')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition ${
              activeTab === 'siswa' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Data Master Siswa ({students.length})
          </button>
          <button
            onClick={() => setActiveTab('guru')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition ${
              activeTab === 'guru' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Data Master Guru ({teachers.length})
          </button>
        </div>

        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Cari nama..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 pr-3 py-1.5 border rounded-xl text-xs bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 w-48"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        {activeTab === 'siswa' ? (
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 font-bold uppercase text-slate-600">
              <tr>
                <th className="p-4">NISN / ID</th>
                <th className="p-4">Nama Lengkap Siswa</th>
                <th className="p-4">Kelas</th>
                <th className="p-4">Nama Wali</th>
                <th className="p-4">No. HP Wali (WhatsApp)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredStudents.map(st => (
                <tr key={st.id} className="hover:bg-slate-50">
                  <td className="p-4 font-mono font-semibold text-slate-600">{st.nisn}</td>
                  <td className="p-4 font-bold text-slate-900">{st.name}</td>
                  <td className="p-4">{st.class}</td>
                  <td className="p-4">{st.parentName}</td>
                  <td className="p-4 font-mono text-cyan-700">{st.parentPhone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 font-bold uppercase text-slate-600">
              <tr>
                <th className="p-4">NIP</th>
                <th className="p-4">Nama Guru</th>
                <th className="p-4">Mata Pelajaran</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTeachers.map(t => (
                <tr key={t.id} className="hover:bg-slate-50">
                  <td className="p-4 font-mono font-semibold text-slate-600">{t.nip}</td>
                  <td className="p-4 font-bold text-slate-900">{t.name}</td>
                  <td className="p-4">{t.subject}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full font-semibold text-[10px]">
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}