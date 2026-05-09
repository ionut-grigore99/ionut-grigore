import type {
  ContactInfo,
  ExperienceItem,
  MaterialSection,
  Profile,
  PublicationItem,
  StudyItem,
} from "./types";

const linkedInPublications =
  "https://www.linkedin.com/in/ionut-grigore-711000203/details/publications/";

export const profile: Profile = {
  name: "Ionuț Grigore",
  role: "AI Engineer | Teaching Assistant | PhD Student",
  institution: "Polytechnic University of Timișoara",
  headline:
    "Computer vision researcher building practical AI.",
  about:
    '"I am still learning!" - Inspired by Michelangelo\'s words, I focus on deep learning research for computer vision and on deploying production AI systems.',
};

export const experiences: ExperienceItem[] = [
  {
    title: "AI Engineer",
    organization: "Smilecloud",
    period: "Jul 2025 - Present",
    bullets: [
      "Designing and deploying machine learning models for digital dentistry workflows.",
      "Working on 2D teeth segmentation, 2D-3D alignment between facial images and intraoral scans, and monocular camera parameter estimation (with a particular focus on estimating the camera's focal length).",
      "Researching diffusion-based inpainting and image enhancement methods, including automatic white-balance correction for real user photos.",
    ],
    documents: [
      // { title: "Report: Focal Length Estimation", href: "https://drive.google.com/..." },
    ],
  },
  {
    title: "Teaching Assistant",
    organization: "Polytechnic University of Timișoara",
    period: "Feb 2022 - Present",
    bullets: [
      "Teaching AI Foundations for 3rd-year students: linear models, decision trees, dimensionality reduction, clustering, CNNs, RNNs, attention, and Transformers.",
      "Teaching modern generative AI for 3rd-year students: attention mechanisms, Transformers, Vision Transformers (ViT), image captioning, diffusion models, CLIP, latent diffusion, Stable Diffusion, VQGAN, and DALL-E-style text-to-image generation.",
      "Teaching Computer Assisted Mathematics Laboratory for 1st-year students using MATLAB.",
      "Mentoring students on practical machine learning projects and fundamentals, and coordinating bachelor thesis projects.",
    ],
  },
  {
    title: "AI Research Scientist",
    organization: "Siemens",
    period: "Apr 2024 - Jul 2025",
    bullets: [
      "Contributed to the ProstateAI project: fully automated AI workflow for prostate MRI examination.",
      "Improved the false-positive reduction model within ProstateAI, enhancing lesion-level specificity and overall system reliability.",
    ],
    documents: [
      { title: "ProstateAI Technical Report", href: "https://drive.google.com/file/d/1Wj6hrp3R0indHfM56ux6P_J206TBFKLC/view?usp=drive_link" },
    ],
  },
  {
    title: "Applied Scientist",
    organization: "Amazon (Ring)",
    period: "Nov 2022 - Apr 2024",
    bullets: [
      "Researched and evaluated SOTA methods for depth completion, feature detection/matching, semantic segmentation, and pose estimation.",
      "Developed and improved models for Ring drone perception tasks, including dock segmentation and positional offset estimation.",
      "Advanced SuperPoint-style feature pipelines, leading to acceptance at EEML 2025 for presenting feature detection and matching work.",
    ],
    documents: [
      { title: "Depth Completion Technical Report", href: "https://drive.google.com/file/d/1eHS8gSgSkS3tJmITf95AahfDicxkQIHe/view?usp=drive_link" },
      { title: "Dock Segmentation and Positional Offset Estimation", href: "https://drive.google.com/file/d/1JlYDtDLbJMnjmn-PwLzuqRZaX2rf9m9R/view?usp=drive_link" },
      { title: "Feature Detection/Matching: Loogbook", href: "https://drive.google.com/file/d/18fpmpb1R0agadcaAxSNxq-jHY9YVZj7S/view?usp=drive_link" },
      { title: "Feature Detection/Matching: Technical Report", href: "https://drive.google.com/file/d/1lvuKiKWb6fKpLAuupsN63taRawwDC8xA/view?usp=drive_link" },
    ],
  },
  {
    title: "Junior Software Engineer",
    organization: "Elektrobit (Timișoara, Romania)",
    period: "Feb 2022 - Oct 2022",
    bullets: [
      "Worked on EB Corbos Studio, an Eclipse-based IDE for Adaptive AUTOSAR workflows.",
      "Used Java, EMF, Eclipse API, JUnit, Jenkins, XML, Apache Ant, and Git in an agile setup.",
      "Contributed to tooling quality with static analysis and UI testing (PMD, Checkstyle, SonarLint, QFT).",
    ],
  },
  {
    title: "Mathematics and Informatics Substitute Teacher",
    organization: "Wendy School Timișoara",
    period: "Oct 2021 - Dec 2021",
    bullets: [
      "Taught mathematics and informatics classes as substitute teacher.",
      "Strengthened classroom communication and instructional planning skills.",
    ],
  },
  {
    title: "Intern",
    organization: "ATOSS Software AG (Timișoara, Romania)",
    period: "Jun 2021 - Aug 2021",
    bullets: [
      "Developed a full-stack virtual library application during internship training.",
      "Built backend features with Spring Boot and MySQL, including controllers and tests.",
      "Implemented frontend pages with Vue.js and validated APIs with Postman.",
    ],
  },
];

export const studies: StudyItem[] = [
  {
    degree: "PhD in Deep Learning",
    school: "Polytechnic University of Timișoara",
    years: "2024 - 2028",
    details:
      "Researching self-supervised depth estimation and 3D scene understanding, with focus on representation learning, uncertainty estimation, and state-space modeling. Involved in the national HRIA (Romanian Hub for Artificial Intelligence) research project.",
    note: "Current PhD student (research track)",
  },
  {
    degree: "Master of Engineering (Machine Learning)",
    school: "Politehnica University of Timișoara",
    years: "2022 - 2024",
    details:
      "Dissertation thesis: MambaDepth, integrating state-space modeling ideas for self-supervised monocular depth estimation.",
    note: "Graduated 10/10, Best Poster Award at EEML 2024 (Novi Sad)",
    documents: [
      { title: "Disertation Thesis", href: "https://drive.google.com/file/d/1ujvxuVFEcjwq9WeeyCi7W10O2Io8_O6P/view?usp=drive_link" },
    ],
    image: { title: "Best Poster Award", href: "https://drive.google.com/file/d/1JOxGevzelezQCli0jK3_W9_5AhEL55VW/view?usp=drive_link" },
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "Politehnica University of Timișoara",
    years: "2018 - 2022",
    details:
      "Bachelor thesis: Self-Supervised Monocular Depth Estimation using ManyDepth, with strong focus on deep learning and computer vision fundamentals.",
    note: "Graduated 10/10 (Magna Cum Laude)",
    documents: [
      { title: "Bachelor Thesis", href: "https://drive.google.com/file/d/1Ozw6B45N0hXEpEqxna9C3PfF2GkIWXhd/view?usp=drive_link" },
    ],
    image: { title: "Magna Cum Laude Distinction", href: "https://drive.google.com/file/d/1f5ssOCgrplRUDqyMhUTvqL94tWc4UZSR/view?usp=drive_link" },
  },
  {
    degree: "High School",
    school: '"Grigore Moisil" High School, Timișoara',
    years: "2014 - 2018",
    details:
      "Mathematics and informatics profile with strong foundations in mathematics, science, and digital competencies.",
    note: "Baccalaureate grade: 9.83/10",
  },
];

export const publications: PublicationItem[] = [
  {
    filter: "research",
    venue: "arXiv 2024",
    title:
      "MambaDepth: Enhancing Long-range Dependency for Self-Supervised Fine-Structured Monocular Depth Estimation",
    authors: "I. Grigore, C.A. Popa",
    link: "https://arxiv.org/abs/2406.04532",
  },
  {
    filter: "research",
    venue: "arXiv 2025",
    title:
      "FPC-Net: Revisiting SuperPoint with Descriptor-Free Keypoint Detection via Feature Pyramids and Consistency-Based Implicit Matching",
    authors: "I. Grigore, C.A. Popa, C. Leoveanu-Condrei",
    link: "https://arxiv.org/abs/2507.10770",
  },
  {
    filter: "problems",
    venue: "-",
    title:
      '2 problems published in "Gazeta Matematică din București", number 6-7-8/2015, problem 27085-page 367 and problem 27108-page 370',
    authors: "I. Grigore",
    link: "https://drive.google.com/file/d/1CH9v4tgsLu0hcAEYRMMHWFgxmo4sCdTK/view?pli=1",
  },
  {
    filter: "problems",
    venue: "-",
    title:
      'A problem for lot selection at Junior Balkan Mathematical Olympiad-2016 published in "ROMANIAN MATHEMATICAL COMPETITIONS-RMC 2016", problem 7, page 72',
    authors: "I. Grigore",
    link: "https://pregatirematematicaolimpiadejuniori.files.wordpress.com/2016/07/2016_tests-1234.pdf",
  },
  {
    filter: "problems",
    venue: "Revista de Matematică din Timișoara",
    title: "Numerous problems published",
    authors: "I. Grigore",
    link: "https://drive.google.com/file/d/1izcG4XTveBS6MxGRtNO0VMqhNwQ1vb9-/view",
  },
  {
    filter: "problems",
    venue: "Editura Gil",
    title:
      "Probleme de combinatorică. Evaluare și exemplu - problem 130, page 42",
    authors:
      "Ioan Codreanu, Mircea Lascu, with problem contribution by I. Grigore",
    link: "https://drive.google.com/file/d/1xIcOxE3j9-b3lMp0OE9iXuhrUCwKl6Cz/view",
  },
  {
    filter: "articles",
    venue: "Media Interview",
    title:
      "Discussion about participation in the national mathematics olympiad and academic achievements",
    authors: "I. Grigore",
    link: "https://renasterea.ro/matematicienii-timisoarei-se-pregatesc-de-olimpiada-nationala/",
  },
  {
    filter: "articles",
    venue: "Media Interview",
    title:
      'Discussion about performance at the intercounty mathematics contest "Traian Lalescu"',
    authors: "I. Grigore",
    link: linkedInPublications,
  },
];

export const contact: ContactInfo = {
  email: "ionut.grigore@cs.upt.ro",
  location: "Timișoara, Timiș, Romania",
  intro:
    "Open to research collaborations and applied AI roles in computer vision and production ML systems.",
};

export const materials: MaterialSection[] = [
  {
    section: "Matematici Asistate de Calculator (MAC) labs",
    items: [
      {
        title: "MAC Lab Notes - Week 1",
        href: "https://drive.google.com/file/d/1EXdPOWYRAdLnbI39RyoIua45Yl8UTzJw/view?usp=drive_link",
      },
      {
        title: "MAC Lab Notes - Week 2",
        href: "https://drive.google.com/file/d/1aZ1MgAoTJ31vv92hEV6ufWYfkYW6siYK/view?usp=drive_link",
      },
      {
        title: "MAC Lab Notes - Week 3",
        href: "https://drive.google.com/file/d/1t_MnypJQLYNkG58hjf34beW5gLDFhjnU/view?usp=drive_link",
      },
      {
        title: "MAC Lab Notes - Week 4",
        href: "https://drive.google.com/file/d/1EQpN9pQjVMhn85NdQiISPmF7viAaw2cY/view?usp=drive_link",
      },
      {
        title: "MAC Lab Notes - Week 5",
        href: "https://drive.google.com/file/d/1oGAaUoRynOAoWbz3dvXpx-TVBRIsqdCy/view?usp=drive_link",
      },
      {
        title: "MAC Lab Notes - Week 6",
        href: "https://drive.google.com/file/d/1S7DUv5lgc1EgWbBUJ-ikiVsn8PgshlAB/view?usp=drive_link",
      },
      {
        title: "MAC Lab Notes - Week 7",
        href: "https://drive.google.com/file/d/178xMCEUYoSkiliS__P5z_yhhXsfxS6_E/view?usp=drive_link",
      },
      {
        title: "MAC Lab Notes - Week 8",
        href: "https://drive.google.com/file/d/1H73Z20X3CvU5atvHVMH6Mf7okkfnkqxM/view?usp=drive_link",
      },
      {
        title: "MAC Lab Notes - Week 9",
        href: "https://drive.google.com/file/d/1Nz16flPamnTJRrUqTMmKjhOnMc3TdV9C/view?usp=drive_link",
      },
      {
        title: "MAC Lab Notes - Week 10",
        href: "https://drive.google.com/file/d/19l2pVktoEUhoYCX3TZuGt3W7QLIqP30C/view?usp=drive_link",
      },
    ],
  },
  {
    section: "Bazele Inteligenței Artificiale (BIA) labs",
    items: [
      {
        title: "BIA Lab Notes - Week 1",
        href: "https://drive.google.com/file/d/1bPC4ttP7eejb_3umkkKqaBVK_VRDX35-/view?usp=drive_link",
      },
      {
        title: "BIA Lab Notes - Week 2",
        href: "https://drive.google.com/file/d/1IDpvQf2z_G6Zg2KgIPQt_RgQVMJZAy4y/view?usp=drive_link",
      },
      {
        title: "BIA Lab Notes - Week 3",
        href: "https://drive.google.com/file/d/1TtaJbVkDu42tXUvzEMfDUq9mcAgF3Eed/view?usp=drive_link",
      },
      {
        title: "BIA Lab Notes - Week 4",
        href: "https://drive.google.com/file/d/1GXoHqfJ2BkrqddPpjiInSuKoAVBOdZQU/view?usp=drive_link",
      },
      {
        title: "BIA Lab Notes - Week 5",
        href: "https://drive.google.com/file/d/14S2q61k2HoJIC_h6v9cr6_eFL5mnrivM/view?usp=drive_link",
      },
      {
        title: "BIA Lab Notes - Week 6",
        href: "https://drive.google.com/file/d/1E6qbiKs1K0JuflMg3wUURxA8uNvM8LPd/view?usp=drive_link",
      },
      {
        title: "BIA Lab Notes - Week 7",
        href: "https://drive.google.com/file/d/1bRloW1owTtWlAoGjpr091md4xesWDbyU/view?usp=drive_link",
      },
      {
        title: "BIA Lab Notes - Week 8",
        href: "https://drive.google.com/file/d/14knNHZsIYa5Clj9rbF12foIimEizPpz-/view?usp=drive_link",
      },
      {
        title: "BIA Lab Notes - Week 9",
        href: "https://drive.google.com/file/d/1B7lep4HkA-qLYztzXEHN1Vqlk4AeJqBk/view?usp=drive_link",
      },
      {
        title: "BIA Lab Notes - Week 10",
        href: "https://drive.google.com/file/d/1nmhCox34cuGi2hYcxsyrwyR3Xz4TBtuy/view?usp=drive_link",
      },
      {
        title: "BIA Lab Notes - Week 11",
        href: "https://drive.google.com/file/d/1ZkMBiGZx0pGClG_RqetgRxDK13o8xl-j/view?usp=drive_link",
      },
      {
        title: "BIA Lab Notes - Week 11 auxiliary",
        href: "https://drive.google.com/file/d/1PQviT5kvZGBcSPdQvqkaMOCT5FeMIAl7/view?usp=drive_link",
      },
    ],
  },
  {
    section: "Grafică Asistată de Calculator (GAC) labs",
    items: [
      {
        title: "GAC Lab Notes - Week 1",
        href: "https://drive.google.com/file/d/1QAWHTvIWcHnHjeKL5p-haPF9mVpM2-rO/view?usp=drive_link",
      },
      {
        title: "GAC Lab Notes - Week 2",
        href: "https://drive.google.com/file/d/1vmAsPBzASTmgJubJ7infSSXHGfYVvjPr/view?usp=drive_link",
      },
      {
        title: "GAC Lab Notes - Week 3",
        href: "https://drive.google.com/file/d/1a4vntdEK0SavtpZPRgk0_wI-d2iEVgkP/view?usp=drive_link",
      },
      {
        title: "GAC Lab Notes - Week 4",
        href: "https://drive.google.com/file/d/1tdYATVvWIpBAM3OJFtXoCT--Lhti8PlO/view?usp=drive_link",
      },
      {
        title: "GAC Lab Notes - Week 5",
        href: "https://drive.google.com/file/d/1T74pl-SnuuhXn9W-X30zf6TOlH-7-mnK/view?usp=drive_link",
      },
      {
        title: "GAC Lab Notes - Week 6",
        href: "https://drive.google.com/file/d/1JVQsZbG0Rr9X5-XCMSOq8KrNfqUfFFRc/view?usp=drive_link",
      },
      {
        title: "GAC Lab Notes - Week 7",
        href: "https://drive.google.com/file/d/1jHwaD8TIvnD7wLSGdIoWq0nXvKdQ4qVo/view?usp=drive_link",
      },
      {
        title: "GAC Lab Notes - Week 8",
        href: "https://drive.google.com/file/d/1pqSU47FP7RMqytmS37iXVxuNjhrbJ9Uf/view?usp=drive_link",
      },
      {
        title: "GAC Lab Notes - Week 9",
        href: "https://drive.google.com/file/d/1K2s9qQOmZHnEf3-xfekQW0PhcFUmw42A/view?usp=drive_link",
      },
      {
        title: "GAC Lab Notes - Week 10",
        href: "https://drive.google.com/file/d/1ICBCYnl5apVIQ11h4zkqqyeL-3FvHm2I/view?usp=drive_link",
      },
      {
        title: "GAC Lab Notes - Week 11",
        href: "https://drive.google.com/file/d/1Q71a7jXo-Jopqje-0lpeduN8s1307myA/view?usp=drive_link",
      },
    ],
  },
];

export const portfolioContent = {
  profile,
  experiences,
  studies,
  publications,
  contact,
  materials,
} as const;
