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

        jobTitle: "Software Quality Engineer",
        description: "Worked in a bank (VTB)." +
            "<ul>" +
                "<li>Planed release and pathced testing;</li>" +
                "<li>Writed TestCases and test reports;</li>" +
                "<li>Employee training.</li>" +
            "</ul>",
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
        description: "Work with Siebel CRM." +
            "<ul>" +
                "<li>Planed release and pathced testing;</li>" +
                "<li>Remote management of the testing team;</li>" +
                "<li>Developed functional / regression / integration tests;</li>" +
                "<li>Planned release scopes and participated in deployments process.</li>" +
            "</ul>" +
            "Result: " +
            "<ul>" +
                "<li>Stable Siebel release cycles created;</li>" +
                "<li>Organized the work of the Siebel testing department.</li>" +
            "</ul>",
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
        description: "In the first year of work, I was responsible for releases of search engine." +
            "Create some Jira/Confluence/Gitlab automatization via Python.<br><br>" +
            "In the next step I have been supported OpenStack instances and created cli-tool and admin web-pannel for instances manage.<br><br>" +
            "Last two years I was team leader of devops team for voice assistant (<a href='https://marusia.vk.com'>marusia</a>)." +
            "Developed release cycles, moved services to k8s, automated ci/cd process and etc..." +
            "<ul>" +
                "<li>Created WebHDFS proxy router via GoLang;</li>" +
                "<li>Supported and automate dev environments via OpenStack, SaltStack and OpenStack API;</li>" +
                "<li>Controled release cycles;</li>" +
                "<li>Deployed services in K8S;</li>" +
                "<li>Prototyped cli tool for k8s-manifest generator via go k8s api (the project was never completed);</li>" +
                "<li>Supported custom deploy tool via Perl;</li>" +
                "<li>Created admin service via Python for servers and services inventory.</li>" +
            "</ul>",


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
        description: "I'm leading RE of mobile services. In my responsibility:" +
            "<ul>" +
                "<li>CI/CD as service for all android / ios mobile applications in ozon;</li>" +
                "<li>CI/CD environment such as macOS and android real devices, farm of android emulators and ios simulators for building and testing apps;</li>" +
                "<li>Environment for run browser tests (<a href='https://aerokube.com/moon'>aerokube</a>);</li>" +
                "<li>Automatization for control process.</li>" +
            "</ul>" +
            "For the last year we have done:" +
            "<ul>" +
                "<li>Process for automate macOS devices environment for our CI/CD usage via ansible;</li>" +
                "<li>Create service for saving build artifacts (goLang, s3, postgres);</li>" +
                "<li>Move all external libs to internal Artifactory with Xray;</li>" +
                "<li>Standardized build environment for android / ios apps;</li>" +
                "<li>Create CI/CD process as service for mobile apps;</li>" +
                "<li>Create architecture for ios ui-tests via custom router (written in goLang) / seleniums (on each real macOS device) / appiums and simulators (in total about 100 items)</li>" +
            "</ul>",


        start_at: "2022",
        finish_at: "now",
    }
])
export default Experiences