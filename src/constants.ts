import { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  name: "Shofi Nurul Aini",
  titles: [
    "Data Scientist",
    "Aspiring Event Professional",
    "Project Manager",
  ],
  location: "Kota Tasikmalaya, Jawa Barat",
  email: "shofinurulaini8@gmail.com",
  phone: "+62 899 0644 065",
  linkedin: "linkedin.com/in/shofinurulaini",
  about: "Information Systems student at Universitas Siliwangi (Semester 6) with an extensive track record in cross-functional coordination: national training program coordination with Kemdiktisaintek, international event management (Global Game Jam) with direct coordination with government agencies, and digital content/web development. Certified IT Project Manager (BNSP). Experienced in high-pressure environments, detail-oriented, communicative, and capable of integrating technical (IT/Data) skills with managerial expertise to produce structured and measurable programs.",
  education: {
    degree: "S1 Sistem Informasi",
    university: "Universitas Siliwangi, Tasikmalaya",
    period: "2022 – Present",
    focus: "Data Engineering, Manajemen Proyek & Perancangan Sistem",
    status: "Mahasiswa Aktif Semester 6"
  },
  experiences: [
    {
      title: "Co-Fasilitator & Koordinator Administrasi",
      organization: "Koding KA (Kemdiktisaintek)",
      period: "2025",
      description: [
        "Managed national teacher training program administration: document preparation, attendance, and participant grade recapitulation.",
        "Ensured active participant engagement and a graduation rate above 94%.",
        "Intensively mentored participants and handled technical difficulties to maintain optimal program completion rates."
      ]
    },
    {
      title: "Koordinator Pelaksana",
      organization: "Global Game Jam, Tasikmalaya Site (Event Internasional)",
      period: "2024",
      description: [
        "Coordinated the organization of an international event, coordinating directly with relevant government departments and the West Java Provincial Government.",
        "Managed logistics, rundown, and participants during a 48-hour non-stop event."
      ]
    },
    {
      title: "Coordinator & Director Project",
      organization: "Video Zona Integritas, Fakultas Teknik UNSIL",
      period: "2025",
      description: [
        "Led institutional video production from concept planning to execution and technical communication.",
        "Served as Scriptwriter, drafting professional and targeted scripts for accreditation/institutional needs."
      ]
    },
    {
      title: "Coordinator Project Video",
      organization: "Canvas by Yayasan Sakata",
      period: "2025",
      description: [
        "Coordinated video content production for external brands, managing timelines and communication between parties."
      ]
    },
    {
      title: "Relawan Aktif",
      organization: "Kegiatan Sosial Pagerasik",
      period: "2024 – Present",
      description: [
        "Actively involved in routine food distribution programs to the community in collaboration with partner foundations.",
        "Field and community coordination."
      ]
    },
    {
      title: "Master of Ceremony (MC)",
      organization: "Berbagai Acara Kampus & Komunitas",
      period: "2024 – Present",
      description: [
        "Hosted formal and informal events: Information Systems Department Anniversary, Preparation TELP by UPA Bahasa, and city-scale community events.",
        "Capable of building atmosphere, maintaining audience attention, and improvising effectively in live situations."
      ]
    },
    {
      title: "Ketua Divisi Penelitian & Pengembangan",
      organization: "Himpunan Mahasiswa UNSIL",
      period: "2025",
      description: [
        "Designed and executed a 4-day intensive training; participant graduation rate reached 97%.",
        "Led team performance evaluation and program accountability reporting to organization leadership."
      ]
    },
    {
      title: "Admin Finance",
      organization: "Pagerasik, Tasikmalaya",
      period: "2025",
      description: [
        "Prepared financial planning and cash flow reports for the organization; maintained transparency of operational budgets.",
        "Coordinated with various parties in the management of routine social event finances."
      ]
    }
  ],
  achievements: [
    {
      title: "Gold Medal + Best Financial Planning + Favorit Poster",
      event: "InspireX Summit Fest 2025",
      date: "Februari 2025",
      details: [
        "Business Case in Technology Field — UPI Bandung x Eduhub Incubator.",
        "Won three awards simultaneously; proving analytical skills, financial planning, and strategic presentation."
      ]
    },
    {
      title: "Juara I + Best Team + Gold Medal + Best Idea",
      event: "Edutalk Fair Competition (EFC)",
      date: "Oktober 2024",
      details: [
        "National Business Plan — Universitas Brawijaya x Eduhub Incubator.",
        "Led the team (Team Leader) to win four awards in a single national-level business competition."
      ]
    }
  ],
  projects: [
    {
      title: "Data Science for Product Sales & Retention",
      description: "Developed a predictive model to enhance product selling strategies and improve content retention rates using Python and advanced data analysis techniques.",
      image: "/images/Data Project.jpeg",
      tags: ["Python", "Data Science", "Machine Learning", "Analytics"],
      link: "#"
    },
    {
      title: "Financial Planning UI/UX Design",
      description: "Designed a comprehensive user interface and experience for a financial planning application, focusing on user-centric design principles and intuitive navigation.",
      image: "/images/Portofolio ui ux.gif",
      tags: ["UI/UX", "Figma", "Design Thinking", "Financial Tech"],
      link: "#"
    }
  ],
  skills: [
    {
      category: "Technical Skills",
      skills: ["Google Workspace (Expert)", "Microsoft Office", "Google Sheets & Data Analysis", "IT Project Management", "JavaScript (Basic-Intermediate)", "HTML & CSS", "Python (Data Science)"]
    },
    {
      category: "Event & Management",
      skills: ["UI/UX Design Thinking", "Event & Rundown Planning", "Stakeholder Coordination", "Budgeting & Cashflow", "Public Speaking & MC", "Crowd Control"]
    },
  ],
  languages: [
    { language: "Indonesia", proficiency: "Native" },
    { language: "English", proficiency: "Professional Working Proficiency (TOEFL 500+)" }
  ],
  activities: [
    {
      title: "Master of Ceremony at Campus Event",
      image: "/images/MC.jpeg",
      category: "Public Speaking"
    },
    {
      title: "Coordinating Global Game Jam",
      image: "/images/Globalgamejam.jpeg",
      category: "Event Management"
    },
    {
      title: "Social Activity - Food Distribution",
      image: "/images/sosial.jpeg",
      category: "Social Work"
    },
    {
      title: "IT Project Management Workshop",
      image: "/images/projectmanagement.jpeg",
      category: "Professional Development"
    },
    {
      title: "Business Plan Competition",
      image: "/images/Goldmedal.jpeg",
      category: "Achievement"
    },
    {
      title: "Digital Poster Design",
      image: "/images/myposter.jpeg",
      category: "Design"
    }
  ]
};
