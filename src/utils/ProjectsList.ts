import { HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, ViteIcon, TailwindIcon } from "../assets/Icons"

import { ArmsLogo, OrbitLogo, ExamNotesAILogo, InterviewAceLogo } from "../assets/Logos"

import { LmsShot, OrbitShots, ExamNotesAIShots, InterviewAceShots } from "../assets/Shots"

import { ARMSv3Mockup, OrbitMockup } from "../assets/Mockup"


type ProjectsListType = {
    Name: string,
    ShortDesc: string,
    Desc: string,
    Logo: ImageMetadata,
    Shot: ImageMetadata,
    Mockup: ImageMetadata,
    Theme: string,
    Status: string,
    Link: string,
    Source: string,
    Demo?: {
        email: string,
        password: string
    },
    Tech: {
        title: string,
        description: string,
        icon: ImageMetadata
    }[],
    features: {
        title: string,
        description: string
    }[],
    hideProject: boolean,
    LogoSize: number,
    versions: {
        title: string,
        version: string
    }[]
}[]

// -- PROJECTS TEMPLATE --
// {
//     Name: "TITLE",
//     ShortDesc: "SHORT_DESCRIPTION",
//     Desc: "DESCRIPTION",
//     Logo: LOGO_URL,
//     Shot: SCREENSHOT_URL,
//     Mockup: MOCKUP_URL,
//     Theme: "PROJECT_THEME_COLOR_HEX",
//     Status: "completed OR development",
//     Link: "PROJECT_URL",
//     Source: "GITHUB_URL",
//     Demo?: { 
//         email: "DEMO_EMAIL", 
//         password: "DEMO_PASSWORD" 
//     },
//     Tech: [TECH_ICONS_URL],
//     features: [{
//         title: "FEATURE_TITLE",
//         description: "FEATURE_DESCRIPTION"
//     }],
//     hideProject: false,
//     LogoSize: 50,
//     versions: [{ 
//         title: "PREV_PROJECT_TITLE", 
//         version: "VERSION_NO" 
//     }]
// },

const TechInfo = {
    HTML: {
        title: "HTML",
        description: "HyperText Markup Language for creating the structure of web pages.",
        icon: HtmlIcon
    },
    CSS: {
        title: "CSS",
        description: "Cascading Style Sheets for styling the presentation of HTML documents.",
        icon: CssIcon
    },
    JavaScript: {
        title: "JavaScript",
        description: "High-level scripting language for adding interactivity to web pages.",
        icon: JsIcon
    },
    React: {
        title: "React",
        description: "JavaScript library for building user interfaces with reusable components.",
        icon: ReactIcon
    },
    Node: {
        title: "Node.js",
        description: "JavaScript runtime for server-side applications, enabling scalable and event-driven architecture.",
        icon: NodeIcon
    },
    Vite: {
        title: "Vite",
        description: "Modern build tooling for web development with rapid startup and hot module replacement.",
        icon: ViteIcon
    },
    TailwindCSS: {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework providing pre-designed, atomic-level utility classes for rapid UI development with minimal CSS code.",
        icon: TailwindIcon
    }
};

// Common Features List
const FeatureList = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines. From keyword-rich content to streamlined meta tags and efficient site architecture."
    }
}

export const ProjectsList: ProjectsListType = [
    {
        Name: "InterviewAce",
        ShortDesc: "An AI-powered mock interview platform that provides personalized feedback and real-time performance insights to help users master their next interview.",
        Desc: "InterviewAce is a state-of-the-art platform designed to elevate interview preparation. Featuring AI-powered mock interviews, resume analysis, comprehensive analytics, leaderboards, and personalized feedback, it helps job seekers build confidence and master every interview scenario.",
        Logo: InterviewAceLogo,
        Shot: InterviewAceShots,
        Mockup: OrbitMockup,
        Theme: "#4f46e5",
        Status: "completed",
        Link: "https://interview-ace-hazel.vercel.app/",
        Source: "https://interview-ace-hazel.vercel.app/",
        Tech: [TechInfo.React, TechInfo.TailwindCSS],
        features: [
            {
                title: "AI-Powered Mock Interviews",
                description: "Conduct realistic mock interviews tailored to your target job profile and get instant feedback."
            },
            {
                title: "Resume Analyzer",
                description: "Analyze your resume against job requirements to receive personalized improvement suggestions."
            },
            {
                title: "Detailed Analytics",
                description: "Track your performance and communication skills over time with detailed visual metrics."
            },
            {
                title: "Interactive Leaderboard",
                description: "Compare scores and learn from top answers to gauge your preparation level."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Online LMS",
        ShortDesc: "A complete Learning Management platform designed to offer an immersive, modern, and engaging educational experience.",
        Desc: "Online LMS is a full-stack learning platform perfectly suited for instructors and students. It seamlessly handles video streaming, secure payments with Stripe, and real-time progress tracking.",
        Logo: ArmsLogo,
        Shot: LmsShot,
        Mockup: ARMSv3Mockup,
        Theme: "#1e293b",
        Status: "completed",
        Link: "https://online-lms-kohl.vercel.app/",
        Source: "https://github.com/ChaithanyaReddy322/online-lms",
        Tech: [TechInfo.React, TechInfo.TailwindCSS, TechInfo.Node, TechInfo.Vite],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "ExamNotes AI",
        ShortDesc: "AI-powered exam notes generator with a live preview interface for fast revision.",
        Desc: "ExamNotes AI is an intelligent study tool that generates concise exam notes and provides a live preview of the generated content. It’s designed to help students revise quickly and efficiently across subjects.",
        Logo: ExamNotesAILogo,
        Shot: ExamNotesAIShots,
        Mockup: OrbitMockup,
        Theme: "#0d0f19",
        Status: "completed",
        Link: "https://examnotesai-phi.vercel.app",
        Source: "https://examnotesai-phi.vercel.app",
        Tech: [TechInfo.React, TechInfo.TailwindCSS],
        features: [
            {
                title: "Live Preview",
                description: "See notes being generated in real-time as you type prompts."
            },
            {
                title: "AI-Powered Summaries",
                description: "Generate concise and structured notes from large text inputs for faster revision."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    },
    {
        Name: "Orbit Music App",
        ShortDesc: "Discover, play, and experience music like never before with a beautifully designed app built for smooth listening and endless exploration.",
        Desc: "Orbit is a cutting-edge music application that transforms how you discover and play your favorite tunes. Designed with a deep focus on a premium user experience, it features smooth listening and endless exploration. Trusted by 100,000+ music lovers, Orbit offers seamless playback, curated downloads, and an intuitive interface that makes every listening session memorable.",
        Logo: OrbitLogo,
        Shot: OrbitShots,
        Mockup: OrbitMockup,
        Theme: "#000000",
        Status: "completed",
        Link: "https://orbitmusicapp.framer.website/",
        Source: "https://orbitmusicapp.framer.website/",
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript, TechInfo.React, TechInfo.TailwindCSS],
        features: [
            {
                title: "Seamless Audio Playback",
                description: "Enjoy uninterrupted, high-quality music streaming with a beautifully designed player."
            },
            {
                title: "Music Downloads",
                description: "Easily download your favorite tracks for offline listening anytime, anywhere."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: []
    }
]