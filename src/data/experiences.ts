import {ref} from "vue";

import Experience from "@/types/experience";

const Experiences = ref<Experience[]>([
    {
        id: 1,
        color: "#01a0d2",

        site: "https://www.performance-lab.ru",
        company: "Performance Lab",
        logoUrl: "experience_icons/performance_lab.png",
        location: "Russia / Moscow",

        jobTitle: "Senior Software Quality Engineer",
        description: "Worked as an outsourcer at the bank (VTB) in office Team Lead" +
            "<ul><li>Planning of work on testing releases and patches;\n</li>" +
            "<li>Writing TestCases/Test reports;</li>" +
            "<li>Monitoring the testing team;</li>" +
            "<li>Employee training.</li></ul>",
        start_at: "2013",
        finish_at: "2014",
    },
    {
        id: 2,
        color: "#ffee00",

        site: "https://www.raiffeisen.ru",
        company: "Raiffeisen Bank",
        logoUrl: "experience_icons/raiffeisen_bank.png",
        location: "Russia / Moscow",

        jobTitle: "Senior Quality Control Engineer",
        description: "Team lead on project Siebel CRM\n" +
            "- Planning of work on testing releases and patches;\n" +
            "- Remote control of the testing team;\n" +
            "- Making functional / regression / integration testing;\n" +
            "- Release Planning and controlling deploy processes.",
        start_at: "2014",
        finish_at: "2016",
    },
    {
        id: 3,
        color: "#0277ff",

        site: "https://www.mail.ru",
        company: "VK.com (ex MailRu Group)",
        logoUrl: "experience_icons/vk.png",
        location: "Russia / Moscow",

        jobTitle: "Team lead, DevOps",
        description: "- I solve problematic situations (if you didn’t know who to go, go to me);\n" +
            "- Support and automatization Openstack dev cluster;\n" +
            "- Support CI/CD system (Gitlab CI/CD and Jenkins);\n" +
            "- Scripting and automating of internal processes;\n" +
            "- Integration DevOps practices;\n" +
            "- Release management.",
        start_at: "2016",
        finish_at: "2022",
    },
    {
        id: 4,
        color: "#f81155",

        site: "https://www.ozon.ru",
        company: "Ozon Tech",
        logoUrl: "experience_icons/ozon.png",
        location: "Russia / Moscow",

        jobTitle: "Head of Mobile RE",
        description: "Create processes and architecture for mobile RE.",
        start_at: "2022",
        finish_at: "now",
    }
])
export default Experiences