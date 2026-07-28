import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Financial Analytics", icon: python },
  { title: "Power BI & Tableau", icon: reactjs },
  { title: "SQL & Data Pipelines", icon: nodejs },
  { title: "Financial Reporting", icon: git },
];

export const technologies = [
  { name: "Python", icon: python },
  { name: "SQL", icon: nodejs },
  { name: "Excel (Advanced)", icon: html },
  { name: "Power BI", icon: reactjs },
  { name: "Tableau", icon: tailwind },
  { name: "JavaScript", icon: javascript },
  { name: "CSS 3", icon: css },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Data Analytics Intern",
    company_name: "QIS Academy",
    icon: python,
    iconBg: "#161329",
    date: "April 2026 - Present",
    points: [
      "Analyzed financial and operational data to surface revenue and cost trends using Excel, SQL, and Python.",
      "Improved stakeholder reporting turnaround by 45% by building interactive Power BI and Tableau KPI dashboards.",
      "Reduced manual reporting effort by approximately 40% by automating data cleaning and transformation pipelines in Python.",
      "Improved forecasting reliability by 18% by performing statistical analysis and exploratory data analysis (EDA) across segmented business datasets.",
    ],
  },
  {
    title: "Junior Accountant",
    company_name: "Western Trade Links — Kannur, Kerala, India",
    icon: git,
    iconBg: "#161329",
    date: "December 2024 - March 2026",
    points: [
      "Managed client account billing and vendor invoicing, reducing payment delays by 18% through monthly account reconciliations.",
      "Cut reconciliation discrepancies by 22% by performing monthly bank reconciliations and cross-validating transaction records.",
      "Improved on-time delivery of financial reports to 100% by standardizing Balance Sheet and Profit & Loss reporting templates.",
      "Maintained 100% statutory compliance across GST filings and payroll cycles by proactively tracking regulatory deadlines.",
      "Reduced invoice processing turnaround by 25% by standardizing daily transaction workflows.",
      "Achieved zero material audit findings across annual audit cycles by supporting the annual audit process.",
    ],
  },
];

export const projects = [
  {
    name: "Smart Health Prediction System",
    description:
      "Designed and developed a predictive analytics system using Decision Tree, Naïve Bayes, and Neural Network models with a Django web interface and end-to-end data pipeline.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Django", color: "green-text-gradient" },
      { name: "Machine Learning", color: "pink-text-gradient" },
      { name: "Data Pipeline", color: "yellow-text-gradient" },
    ],
    image: python,
    source_code_link: "https://github.com/Akashshajiap",
  },
  {
    name: "Interactive Power BI & Tableau KPI Dashboards",
    description:
      "Built live self-service KPI dashboards replacing static spreadsheet reports, improving stakeholder reporting turnaround by 45%.",
    tags: [
      { name: "Power BI", color: "blue-text-gradient" },
      { name: "Tableau", color: "green-text-gradient" },
      { name: "SQL", color: "pink-text-gradient" },
      { name: "KPI Reporting", color: "yellow-text-gradient" },
    ],
    image: reactjs,
    source_code_link: "https://github.com/Akashshajiap",
  },
  {
    name: "Financial Reporting & GST Compliance System",
    description:
      "Standardized data consolidation into repeatable reporting templates for Balance Sheets and P&L statements while maintaining 100% statutory compliance.",
    tags: [
      { name: "Excel (Advanced)", color: "blue-text-gradient" },
      { name: "Financial Modeling", color: "green-text-gradient" },
      { name: "GST Compliance", color: "pink-text-gradient" },
    ],
    image: nodejs,
    source_code_link: "https://github.com/Akashshajiap",
  },
  {
    name: "Automated Data Pipeline & Anomaly Detection",
    description:
      "Automated data cleaning and transformation pipelines in Python, improving forecasting reliability by 18% via statistical analysis and EDA.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "pandas / NumPy", color: "green-text-gradient" },
      { name: "EDA & Statistics", color: "pink-text-gradient" },
    ],
    image: git,
    source_code_link: "https://github.com/Akashshajiap",
  },
];

