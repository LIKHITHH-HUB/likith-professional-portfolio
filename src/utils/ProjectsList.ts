import {
    HtmlIcon, CssIcon, JsIcon, NodeIcon, MysqlIcon, RestApiIcon
} from "../assets/Icons";

const TechInfo = {
    HTML: { title: "HTML", description: "", icon: HtmlIcon.src },
    CSS: { title: "CSS", description: "", icon: CssIcon.src },
    JavaScript: { title: "JavaScript", description: "", icon: JsIcon.src },
    Node: { title: "Node.js", description: "", icon: NodeIcon.src },
    MySQL: { title: "MySQL", description: "", icon: MysqlIcon.src },
    RESTAPI: { title: "REST API", description: "", icon: RestApiIcon.src }
};

const FeatureList = {
    Responsive: {
        title: "Responsive Design",
        description: "Works across all devices smoothly."
    }
};
import ExpenseImg from "../assets/expense.png";
import DiaryImg from "../assets/diary.png";
import SmartFillImg from "../assets/smartfill.png";

export const ProjectsList: any = [
    {
        Name: "Expense Tracker",
        ShortDesc: "Track and manage personal expenses with real-time balance updates.",
        Desc: "A client-side web application that allows users to manage daily expenses efficiently using localStorage and dynamic DOM updates.",
        Logo: ExpenseImg,
        Shot: ExpenseImg,
        Mockup: ExpenseImg,
        Theme: "#8b5cf6",
        Status: "completed",
        Link: "", //  FIXED
        Source: "https://github.com/LIKHITHH-HUB/expense-Tracker",
        Tech: [
            TechInfo.HTML,
            TechInfo.CSS,
            TechInfo.JavaScript
        ],
        features: [
            {
                title: "Real-Time Calculation",
                description: "Automatically updates balance, income, and expenses instantly."
            },
            {
                title: "Local Storage Persistence",
                description: "Stores user data in browser to prevent data loss."
            },
            FeatureList.Responsive
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },

    {
        Name: "SmartFill AI",
        ShortDesc: "AI-powered system to auto-fill forms and reduce manual effort.",
        Desc: "SmartFill AI is a web application that intelligently fills user input forms using predictive logic and API-based automation.",
        Logo: SmartFillImg,
        Shot: SmartFillImg,
        Mockup: SmartFillImg,
        Theme: "#06b6d4",
        Status: "completed",
        Link: "https://smartfill-ai-form.vercel.app/",
        Source: "https://github.com/LIKHITHH-HUB/smartfill-ai-form",
        Tech: [
            TechInfo.HTML,
            TechInfo.CSS,
            TechInfo.JavaScript,
            TechInfo.RESTAPI
        ],
        features: [
            {
                title: "AI Form Automation",
                description: "Auto-fills user inputs using smart prediction logic."
            },
            {
                title: "Time Optimization",
                description: "Reduces manual form filling effort by up to 60%."
            },
            FeatureList.Responsive
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },

    {
        Name: "EchoNote Diary",
        ShortDesc: "Full-stack diary platform with authentication and CRUD operations.",
        Desc: "EchoNote is a full-stack journaling platform with secure authentication and RESTful APIs using Node.js and MySQL.",
        Logo: DiaryImg,
        Shot: DiaryImg,
        Mockup: DiaryImg,
        Theme: "#22c55e",
        Status: "completed",
        Link: "", 
        Source: "https://github.com/LIKHITHH-HUB/My-Diary",
        Tech: [
            TechInfo.HTML,
            TechInfo.CSS,
            TechInfo.JavaScript,
            TechInfo.Node,
            TechInfo.MySQL
        ],
        features: [
            {
                title: "Authentication System",
                description: "Secure login system with password hashing."
            },
            {
                title: "CRUD Operations",
                description: "Create, edit, delete, and manage diary entries efficiently."
            },
            {
                title: "Dynamic UI Rendering",
                description: "Switches views based on user activity."
            },
            FeatureList.Responsive
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    }
];