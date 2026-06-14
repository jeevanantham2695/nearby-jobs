 import { useState } from "react";

const translations = {
  en: {
    appName: "NearBy Jobs",
    tagline: "Local Tamil Nadu Openings",
    jobseeker: "Jobseeker Panel 👨",
    recruiter: "Recruiter Panel 🗂️",
    jobs: "🔍 Jobs",
    saved: "❤️ Saved",
    guide: "🗺️ Guide",
    searchPlaceholder: "Search by job title",
    findNearMe: "📍 FIND JOBS NEAR ME",
    jobCategories: "JOB CATEGORIES",
    allJobTypes: "⚙️ All Job Types",
    minSalary: "MIN SALARY",
    showAllSalaries: "💰 Show All Salaries",
    showingRoles: "Showing active roles",
    fullTime: "FULL TIME",
    partTime: "PART TIME",
    verified: "VERIFIED HR ✅",
    salary: "SALARY:",
    perMonth: "/ month",
    kmAway: "km away",
    save: "Save",
    apply: "Apply Now",
    recruiterDashboard: "📊 Recruiter Dashboard",
    addNewJob: "+ Add New Job Opening",
    portalMetrics: "Portal Metrics Overview",
    totalJobs: "TOTAL JOBS POSTED",
    activeJobs: "ACTIVE JOBS",
    totalCandidates: "TOTAL CANDIDATES",
    hiringSelects: "HIRING SELECTS",
    posts: "posts",
    live: "Live",
    forms: "forms",
    selected: "selected",
    needToHire: "Need to hire quickly?",
    hireDesc: "Publish a new opening under 2 minutes. Fill in details in English and Tamil to maximize local neighborhood attention!",
    publishJob: "Publish a Job",
    login: "Login",
    logout: "LOGOUT",
    phone: "Enter phone number",
    loginBtn: "Send OTP",
    notifications: "Notifications",
    profile: "Profile",
    categories: ["IT / Software", "Sales", "Driver", "Security", "Cook / Chef", "Teacher", "Accountant", "Delivery", "Retail", "Healthcare"],
  },
  ta: {
    appName: "அருகிலுள்ள வேலைகள்",
    tagline: "உள்ளூர் தமிழ்நாடு வேலை வாய்ப்புகள்",
    jobseeker: "வேலை தேடுபவர் 👨",
    recruiter: "ஆட்சேர்ப்பாளர் 🗂️",
    jobs: "🔍 வேலைகள்",
    saved: "❤️ சேமித்தவை",
    guide: "🗺️ வழிகாட்டி",
    searchPlaceholder: "வேலை தலைப்பால் தேடுங்கள்",
    findNearMe: "📍 என் அருகில் வேலை தேடு",
    jobCategories: "வேலை வகைகள்",
    allJobTypes: "⚙️ அனைத்து வேலை வகைகள்",
    minSalary: "குறைந்தபட்ச சம்பளம்",
    showAllSalaries: "💰 அனைத்து சம்பளங்களும்",
    showingRoles: "செயலில் உள்ள வேலைகள்",
    fullTime: "முழு நேரம்",
    partTime: "பகுதி நேரம்",
    verified: "சரிபார்க்கப்பட்ட HR ✅",
    salary: "சம்பளம்:",
    perMonth: "/ மாதம்",
    kmAway: "கி.மீ தொலைவில்",
    save: "சேமி",
    apply: "இப்போது விண்ணப்பி",
    recruiterDashboard: "📊 ஆட்சேர்ப்பு டேஷ்போர்டு",
    addNewJob: "+ புதிய வேலை சேர்",
    portalMetrics: "போர்டல் அளவீடுகள்",
    totalJobs: "மொத்த வேலைகள்",
    activeJobs: "செயலில் உள்ள வேலைகள்",
    totalCandidates: "மொத்த விண்ணப்பதாரர்கள்",
    hiringSelects: "தேர்ந்தெடுக்கப்பட்டவர்கள்",
    posts: "பதிவுகள்",
    live: "நேரடி",
    forms: "படிவங்கள்",
    selected: "தேர்வு",
    needToHire: "விரைவாக ஆட்சேர்க்க வேண்டுமா?",
    hireDesc: "2 நிமிடத்தில் புதிய வேலையை வெளியிடுங்கள். உள்ளூர் கவனத்தை அதிகரிக்க தமிழிலும் பதிவிடுங்கள்!",
    publishJob: "வேலையை வெளியிடு",
    login: "உள்நுழை",
    logout: "வெளியேறு",
    phone: "தொலைபேசி எண் உள்ளிடுங்கள்",
    loginBtn: "OTP அனுப்பு",
    notifications: "அறிவிப்புகள்",
    profile: "சுயவிவரம்",
    categories: ["IT / மென்பொருள்", "விற்பனை", "டிரைவர்", "பாதுகாப்பு", "சமையல்காரர்", "ஆசிரியர்", "கணக்காளர்", "டெலிவரி", "சில்லறை விற்பனை", "சுகாதாரம்"],
  }
};

const sampleJobs = [
  { id: 1, title: "Office Assistant", company: "Sri Murugan Enterprises", location: "Chennai (T. Nagar)", distance: 2.7, minSalary: 15000, maxSalary: 18000, type: "FULL TIME", verified: true, category: "IT / Software" },
  { id: 2, title: "Sales Executive", company: "Raj Traders", location: "Coimbatore (RS Puram)", distance: 1.2, minSalary: 12000, maxSalary: 20000, type: "FULL TIME", verified: true, category: "Sales" },
  { id: 3, title: "Delivery Boy", company: "QuickShip Logistics", location: "Madurai (Anna Nagar)", distance: 3.5, minSalary: 10000, maxSalary: 14000, type: "PART TIME", verified: false, category: "Delivery" },
  { id: 4, title: "Security Guard", company: "SafeGuard Services", location: "Trichy (Thillai Nagar)", distance: 0.8, minSalary: 11000, maxSalary: 13000, type: "FULL TIME", verified: true, category: "Security" },
  { id: 5, title: "Cook / Chef", company: "Hotel Saravana Bhavan", location: "Chennai (Adyar)", distance: 5.1, minSalary: 18000, maxSalary: 25000, type: "FULL TIME", verified: true, category: "Cook / Chef" },
];

function JobCard({ job, t, savedJobs, toggleSave }) {
  const [expanded, setExpanded] = useState(false);
  const [applied, setApplied] = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applySuccess, setApplySuccess] = useState(false);

  const handleApply = () => {
    if (applicantName && applicantPhone.length >= 10) {
      setApplySuccess(true);
      setApplied(true);
      setTimeout(() => { setShowApplyForm(false); setApplySuccess(false); }, 2000);
    }
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hi, I saw your job posting for "${job.title}" at ${job.company} (${job.location}) on NearBy Jobs app. I am interested to apply. Salary: ₹${job.minSalary.toLocaleString()}–₹${job.maxSalary.toLocaleString()}/month.`);
    window.open(`https://wa.me/?text=${msg}`, "_blank");
  };

  const handleShare = () => {
    const text = `🔥 Job Alert!\n\n💼 ${job.title}\n🏢 ${job.company}\n📍 ${job.location}\n💰 ₹${job.minSalary.toLocaleString()}–₹${job.maxSalary.toLocaleString()}/month\n\nFound on NearBy Jobs App!`;
    if (navigator.share) {
      navigator.share({ title: job.title, text });
    } else {
      navigator.clipboard.writeText(text);
      alert("Job details copied! Share it anywhere.");
    }
  };

  return (
    <div style={{ background: "white", borderRadius: 14, padding: 16, marginBottom: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 8 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: "#2563eb", letterSpacing: 1 }}>📅 {job.type}</span>
        <button onClick={() => toggleSave(job.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20 }}>
          {savedJobs.includes(job.id) ? "❤️" : "🤍"}
        </button>
      </div>

      {job.verified && (
        <div style={{ display: "inline-block", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, padding: "4px 10px", fontSize: 11, fontWeight: 700, color: "#15803d", marginBottom: 8 }}>
          🛡️ {t.verified}
        </div>
      )}

      {/* Title + Salary */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 2 }}>{job.title}</div>
          <div style={{ color: "#2563eb", fontWeight: 600, fontSize: 14 }}>🏢 {job.company}</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: 11, color: "#94a3b8" }}>{t.salary}</div>
          <div style={{ color: "#15803d", fontWeight: 700, fontSize: 15 }}>₹{job.minSalary.toLocaleString()} – ₹{job.maxSalary.toLocaleString()}</div>
          <div style={{ fontSize: 11, color: "#64748b" }}>{t.perMonth}</div>
        </div>
      </div>

      {/* Location */}
      <div style={{ fontSize: 12, color: "#64748b", marginTop: 8 }}>
        📍 {job.location} <span style={{ color: "#2563eb", fontWeight: 600 }}>{job.distance} {t.kmAway}</span>
      </div>

      {/* Description (expandable) */}
      {job.description && (
        <div style={{ marginTop: 8 }}>
          <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>
            {expanded ? job.description : job.description.slice(0, 80) + (job.description.length > 80 ? "..." : "")}
          </div>
          {job.description.length > 80 && (
            <button onClick={() => setExpanded(!expanded)} style={{ background: "none", border: "none", color: "#2563eb", fontSize: 12, cursor: "pointer", padding: 0, marginTop: 2 }}>
              {expanded ? "Show less ▲" : "Read more ▼"}
            </button>
          )}
        </div>
      )}

      {/* 4 Action Buttons */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 }}>
        {/* Apply Now */}
        <button
          onClick={() => !applied && setShowApplyForm(true)}
          style={{ padding: "9px 6px", background: applied ? "#f0fdf4" : "#2563eb", color: applied ? "#15803d" : "white", border: applied ? "2px solid #bbf7d0" : "none", borderRadius: 10, cursor: applied ? "default" : "pointer", fontWeight: 700, fontSize: 13 }}>
          {applied ? "✅ Applied!" : "📝 Apply Now"}
        </button>

        {/* Contact HR via WhatsApp */}
        <button
          onClick={handleWhatsApp}
          style={{ padding: "9px 6px", background: "#f0fdf4", color: "#15803d", border: "2px solid #bbf7d0", borderRadius: 10, cursor: "pointer", fontWeight: 700, fontSize: 13 }}>
          💬 WhatsApp HR
        </button>

        {/* Share Job */}
        <button
          onClick={handleShare}
          style={{ padding: "9px 6px", background: "#eff6ff", color: "#1d4ed8", border: "2px solid #bfdbfe", borderRadius: 10, cursor: "pointer", fontWeight: 700, fontSize: 13 }}>
          📤 Share Job
        </button>

        {/* Call HR */}
        <button
          onClick={() => window.open("tel:+919999999999")}
          style={{ padding: "9px 6px", background: "#fef3c7", color: "#92400e", border: "2px solid #fde68a", borderRadius: 10, cursor: "pointer", fontWeight: 700, fontSize: 13 }}>
          📞 Call HR
        </button>
      </div>

      {/* Apply Form Modal */}
      {showApplyForm && (
        <div style={{ marginTop: 14, background: "#f8fafc", borderRadius: 12, padding: 14, border: "2px solid #e2e8f0" }}>
          {applySuccess ? (
            <div style={{ textAlign: "center", padding: 16 }}>
              <div style={{ fontSize: 36 }}>🎉</div>
              <div style={{ fontWeight: 700, color: "#15803d", marginTop: 6 }}>Application Sent!</div>
              <div style={{ fontSize: 13, color: "#64748b" }}>HR will contact you soon.</div>
            </div>
          ) : (
            <>
              <div style={{ fontWeight: 700, marginBottom: 10 }}>📝 Quick Apply — {job.title}</div>
              <input
                placeholder="Your Name"
                value={applicantName}
                onChange={e => setApplicantName(e.target.value)}
                style={{ width: "100%", padding: "10px 12px", border: "2px solid #e2e8f0", borderRadius: 8, fontSize: 14, marginBottom: 8, boxSizing: "border-box" }}
              />
              <input
                placeholder="Your Phone Number"
                value={applicantPhone}
                onChange={e => setApplicantPhone(e.target.value)}
                type="tel"
                style={{ width: "100%", padding: "10px 12px", border: "2px solid #e2e8f0", borderRadius: 8, fontSize: 14, marginBottom: 10, boxSizing: "border-box" }}
              />
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={handleApply} style={{ flex: 1, padding: "10px", background: "#2563eb", color: "white", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" }}>
                  Submit Application
                </button>
                <button onClick={() => setShowApplyForm(false)} style={{ padding: "10px 14px", background: "none", border: "2px solid #e2e8f0", borderRadius: 8, cursor: "pointer", color: "#64748b" }}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function NearByJobsApp() {
  const [lang, setLang] = useState("en");
  const [panel, setPanel] = useState("jobseeker");
  const [tab, setTab] = useState("jobs");
  const [recruiterTab, setRecruiterTab] = useState("dashboard");
  const [search, setSearch] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [phone, setPhone] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [showNotif, setShowNotif] = useState(false);
  const [allJobs, setAllJobs] = useState(sampleJobs);
  const [publishSuccess, setPublishSuccess] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "", company: "", location: "", minSalary: "", maxSalary: "", type: "Full Time", description: ""
  });
  const [formErrors, setFormErrors] = useState({});

  const t = translations[lang];

  const filteredJobs = allJobs.filter(job => {
    const matchSearch = job.title.toLowerCase().includes(search.toLowerCase()) || job.company.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCategory === "All" || job.category === selectedCategory;
    const matchType = selectedType === "All" || job.type === selectedType;
    return matchSearch && matchCat && matchType;
  });

  const toggleSave = (id) => {
    setSavedJobs(prev => prev.includes(id) ? prev.filter(j => j !== id) : [...prev, id]);
  };

  const handleLogin = () => {
    if (phone.length >= 10) { setLoggedIn(true); setShowLoginModal(false); }
  };

  const handlePublish = () => {
    const errors = {};
    if (!newJob.title.trim()) errors.title = "Job title required";
    if (!newJob.company.trim()) errors.company = "Company name required";
    if (!newJob.location.trim()) errors.location = "Location required";
    if (!newJob.minSalary) errors.minSalary = "Min salary required";
    if (!newJob.maxSalary) errors.maxSalary = "Max salary required";
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const job = {
      id: Date.now(),
      title: newJob.title,
      company: newJob.company,
      location: newJob.location,
      distance: (Math.random() * 5 + 0.5).toFixed(1) * 1,
      minSalary: parseInt(newJob.minSalary),
      maxSalary: parseInt(newJob.maxSalary),
      type: newJob.type === "Part Time" ? "PART TIME" : "FULL TIME",
      verified: true,
      category: "IT / Software",
      description: newJob.description,
    };
    setAllJobs(prev => [job, ...prev]);
    setPublishSuccess(true);
    setNewJob({ title: "", company: "", location: "", minSalary: "", maxSalary: "", type: "Full Time", description: "" });
    setTimeout(() => { setPublishSuccess(false); setRecruiterTab("dashboard"); }, 2000);
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#f0f4f8", minHeight: "100vh" }}>
      {/* Top Bar */}
      <div style={{ background: "#0d1b2a", color: "white", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 38, height: 38, background: "#2563eb", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>💼</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 18 }}>{t.appName}</div>
            <div style={{ fontSize: 11, color: "#94a3b8" }}>{t.tagline}</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Language Toggle */}
          <div style={{ background: "#1e293b", borderRadius: 20, display: "flex", overflow: "hidden" }}>
            {["en", "ta"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{ padding: "6px 14px", border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13, background: lang === l ? "#2563eb" : "transparent", color: lang === l ? "white" : "#94a3b8", transition: "all 0.2s" }}>
                {l === "en" ? "English" : "தமிழ்"}
              </button>
            ))}
          </div>
          {/* Notification */}
          <button onClick={() => setShowNotif(!showNotif)} style={{ background: "none", border: "none", cursor: "pointer", position: "relative", color: "white", fontSize: 20 }}>
            🔔<span style={{ position: "absolute", top: -2, right: -2, width: 8, height: 8, background: "#ef4444", borderRadius: "50%" }}></span>
          </button>
          {/* Login/Logout */}
          {loggedIn ? (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 12, color: "#94a3b8" }}>● {phone}</span>
              <button onClick={() => { setLoggedIn(false); setPhone(""); }} style={{ background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontWeight: 700, fontSize: 12 }}>{t.logout}</button>
            </div>
          ) : (
            <button onClick={() => setShowLoginModal(true)} style={{ background: "#2563eb", color: "white", border: "none", borderRadius: 8, padding: "6px 14px", cursor: "pointer", fontWeight: 600, fontSize: 13 }}>{t.login}</button>
          )}
        </div>
      </div>

      {/* Notification Dropdown */}
      {showNotif && (
        <div style={{ position: "fixed", top: 70, right: 20, background: "white", borderRadius: 12, boxShadow: "0 8px 32px rgba(0,0,0,0.15)", padding: 16, zIndex: 100, width: 260 }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>🔔 {t.notifications}</div>
          <div style={{ fontSize: 13, color: "#64748b", padding: "8px 0", borderBottom: "1px solid #f1f5f9" }}>New job near you: Office Assistant in T.Nagar</div>
          <div style={{ fontSize: 13, color: "#64748b", padding: "8px 0" }}>Your application was viewed by Sri Murugan Enterprises</div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200 }}>
          <div style={{ background: "white", borderRadius: 16, padding: 32, width: 320, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>💼 {t.appName}</div>
            <div style={{ color: "#64748b", marginBottom: 20, fontSize: 14 }}>{t.tagline}</div>
            <input
              placeholder={t.phone}
              value={phone}
              onChange={e => setPhone(e.target.value)}
              style={{ width: "100%", padding: "12px 14px", border: "2px solid #e2e8f0", borderRadius: 10, fontSize: 15, boxSizing: "border-box", marginBottom: 12 }}
            />
            <button onClick={handleLogin} style={{ width: "100%", padding: "12px", background: "#2563eb", color: "white", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: "pointer" }}>{t.loginBtn}</button>
            <button onClick={() => setShowLoginModal(false)} style={{ width: "100%", padding: "10px", background: "none", border: "none", color: "#94a3b8", cursor: "pointer", marginTop: 8 }}>Cancel</button>
          </div>
        </div>
      )}

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "16px 12px" }}>
        {/* Panel Toggle */}
        <div style={{ display: "flex", background: "white", borderRadius: 14, padding: 4, marginBottom: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          {[["jobseeker", t.jobseeker], ["recruiter", t.recruiter]].map(([key, label]) => (
            <button key={key} onClick={() => setPanel(key)} style={{ flex: 1, padding: "10px", border: "none", borderRadius: 10, cursor: "pointer", fontWeight: 700, fontSize: 14, background: panel === key ? "#2563eb" : "transparent", color: panel === key ? "white" : "#64748b", transition: "all 0.2s" }}>
              {label}
            </button>
          ))}
        </div>

        {/* JOBS
