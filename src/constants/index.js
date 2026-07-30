import {
  western_trade_links,
  qis_academy,
  python,
  sql,
  excel,
  powerbi,
  tableau,
  django,
  git,
  smart_health,
  retail_sales,
  financial_reporting,
  data_pipeline,
  customer_segmentation,
  ap_ar_reconciliation,
  rlang,
  genai,
  budget,
  mongodb,
  reactjs,
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
  {
    title: "Financial Analytics",
    icon: python,
    tags: ["#Python", "#EDA", "#Pandas", "#NumPy"],
  },
  {
    title: "Power BI & Tableau",
    icons: [powerbi, tableau],
    tags: ["#PowerBI", "#Tableau", "#KPI Dashboards", "#Data Viz"],
  },
  {
    title: "SQL & Data Pipelines",
    icon: sql,
    tags: ["#SQL", "#MySQL", "#PostgreSQL", "#ETL"],
  },
  {
    title: "Financial Reporting",
    icon: excel,
    tags: ["#Excel", "#P&L", "#Balance Sheet", "#GST"],
  },
  {
    title: "Budget & Forecasting",
    icon: budget,
    tags: ["#Budgeting", "#Forecasting", "#Variance Analysis"],
  },
  {
    title: "Gen AI & Automation",
    icon: genai,
    tags: ["#GenAI", "#Automation", "#Prompt Eng."],
  },
  {
    title: "R Language & Stats",
    icon: rlang,
    tags: ["#R", "#Statistical Analysis", "#ggplot2"],
  },
];

export const technologies = [
  { name: "Python", icon: python },
  { name: "SQL", icon: sql },
  { name: "Excel (Advanced)", icon: excel },
  { name: "Power BI", icon: powerbi },
  { name: "Tableau", icon: tableau },
  { name: "Django", icon: django },
  { name: "MongoDB", icon: mongodb },
  { name: "React", icon: reactjs },
  { name: "Git", icon: git },
];

export const experiences = [
  {
    title: "Data Analytics Intern",
    company_name: "QIS Academy",
    icon: qis_academy,
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
    icon: western_trade_links,
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
    image: smart_health,
    source_code_link: "https://github.com/Akashshajiap/Akash-A-P",
  },
  {
    name: "Retail Sales Excel Dashboard",
    description:
      "Built an interactive, self-service Excel dashboard to analyze and visualize retail sales data, replacing static reports and significantly improving stakeholder reporting turnaround.",
    tags: [
      { name: "Excel", color: "blue-text-gradient" },
      { name: "Data Analysis", color: "green-text-gradient" },
      { name: "Dashboards", color: "pink-text-gradient" },
      { name: "KPI Reporting", color: "yellow-text-gradient" },
    ],
    image: retail_sales,
    source_code_link: "https://github.com/Akashshajiap/Retail-Sales-Excel-Dashboard",
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
    image: financial_reporting,
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
    image: data_pipeline,
    source_code_link: "https://github.com/Akashshajiap",
  },
  {
    name: "Customer Segmentation & Churn Analysis",
    description:
      "Developed a K-Means clustering model in Python to segment customers and predict churn, visualizing findings in Tableau to drive retention strategies.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Machine Learning", color: "green-text-gradient" },
      { name: "Tableau", color: "pink-text-gradient" },
    ],
    image: customer_segmentation,
    source_code_link: "https://github.com/Akashshajiap",
  },
  {
    name: "Automated AP/AR Reconciliation Tool",
    description:
      "Engineered an automated Python-based tool linking SQL databases with Excel to reconcile Accounts Payable and Receivable, cutting manual matching time by 60%.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "SQL", color: "green-text-gradient" },
      { name: "Excel VBA", color: "pink-text-gradient" },
    ],
    image: ap_ar_reconciliation,
    source_code_link: "https://github.com/Akashshajiap",
  },
];
