import {ref} from "vue";

import Skill from "@/types/skill";

const Skills = ref<Skill[]>([
    {
        id: 1,
        title: "goLang",
        group: "dev",
        content: "Currently my main programming language.<br>Thats what i used it for:" +
            "<ul>" +
                "<li>WebHdfs proxy with ACL for requests rounting;</li>" +
                "<li>Create CI/CD endpoint for ci-actions for process standardization;</li>" +
                "<li>Grid router for routing requests to multiple selenium-grids;</li>" +
                "<li>Create service like 'microsoft AppCenter' for collect mobile artifacts (S3 / Postgres / gRPC);</li>" +
            "</ul>",
    },
    {
        id: 2,
        title: "html",
        group: "dev",
        content: "I can create basic frontend layouts.<br><i>(like this site as example)</i>",
    },
    {
        id: 3,
        title: "ci/cd",
        group: "ops",
        content: "Create and integrate CI/CD standards (as service) for mobile apps and libs.<br><i>(about 15 android/ios projects)</i>",
    },
    {
        id: 4,
        title: "macOS",
        group: "ops",
        content: "Support macStudio/macMini devices farm for mobile CI/CD process.<br><i>(use ansible for it)</i>",
    },
    {
        id: 6,
        title: "selenium",
        group: "etc",
        content: "Create architecture for iOS appium-tests.<br>Use:" +
            "<ul>" +
                "<li>gitlab CI/CD for jobs running;</li>" +
                "<li>ansible for setup macOS devices and create iOS simulators on it;</li>" +
                "<li>multiple selenium grids with appiums for simulators;</li>" +
                "<li>grid-router written in golang for route request to seleniums (round robin checks);</li>" +
                "<li>custom API for manage;</li>" +
            "</ul>",
    },
    {
        id: 7,
        title: "k8s",
        group: "ops",
        content: "Create templates and deploy services.",
    },
    {
        id: 8,
        title: "python",
        group: "dev",
        content: "Use it as needed.<br>From significant projects:" +
            "<ul>" +
                "<li>hooks for subversion;</li>" +
                "<li>custom admin panel (vueJS + Flask + Redis) for statistic and manage openStack instances;</li>" +
                "<li>cli-app for manage openStack instances (create, delete, add volumes and etc...);</li>" +
                "<li>jira automation;</li>" +
            "</ul>",
    },
    {
        id: 9,
        title: "mobile farm",
        group: "etc",
        content: "Support android device farm based in STF project.",
    },
    {
        id: 10,
        title: "docker",
        group: "ops",
        content: "Use for all.",
    },
    {
        id: 11,
        title: "team lead",
        group: "management",
        content: "Team lead of DevOps / RE teams over 5 peoples.<br>Planning and decomposing issues.<br>Definition of areas of responsibility.",
    },
    {
        id: 12,
        title: "linux",
        group: "ops",
        content: "Use linux / macOS in real life.",
    },
    {
        id: 13,
        title: "subversion",
        group: "dev",
        content: "Use svn in VK.com, write hooks for svn in python.",
    },
    {
        id: 14,
        title: "saltStack",
        group: "etc",
        content: "Support salt-states for configure openStack instances",
    },
    {
        id: 15,
        title: "vueJS",
        group: "dev",
        content: "Sometimes i can frontend.",
    },
    {
        id: 16,
        title: "ansible",
        group: "etc",
        content: "Create roles for setup macOS devices for CI/CD process.",
    },
    {
        id: 17,
        title: "bash",
        group: "ops",
        content: "bash scripting, sometimes with google :)",
    },
    {
        id: 18,
        title: "git",
        group: "dev",
        content: "Everybody work with git.",
    },
    {
        id: 19,
        title: "gitLab",
        group: "etc",
        content: "Create CI/CD process (as service) for mobile apps in GitLab CI/CD.",
    },
    {
        id: 20,
        title: "css",
        group: "dev",
        content: "I can create basic css-styles.<br><i>(like this site as example)</i>",
    },
    {
        id: 21,
        title: "jenkins",
        group: "etc",
        content: "Just basic skills.",
    },
    {
        id: 22,
        title: "aws",
        group: "ops",
        content: "I have aws account for personal purposes.",
    },
    {
        id: 23,
        title: "jira",
        group: "management",
        content: "Work with jira/confluence.",
    },
    {
        id: 24,
        title: "redis",
        group: "etc",
        content: "Work with redis in projects.",
    },
    {
        id: 25,
        title: "agile",
        group: "management",
        content: "Every week sprints, planning planning and task prioritization.",
    },
    {
        id: 26,
        title: "sql",
        group: "dev",
        content: "Basic queries with join. Most often use ORM.",
    },
    {
        id: 27,
        title: "postgres",
        group: "etc",
        content: "Work with postgres in projects.",
    },
    {
        id: 28,
        title: "gRPC",
        group: "dev",
        content: "Work with gRPC in projects.",
    },
    {
        id: 29,
        title: "helm",
        group: "ops",
        content: "Write simple charts for k8s.",
    },
    {
        id: 30,
        title: "s3",
        group: "etc",
        content: "<ul>" +
            "<li>Use 'aws-sdk-go' for project where need simple storage service.</li>" +
            "<li>Host this site in AWS S3.</li>" +
            "</ul>",
    },
    {
        id: 31,
        title: "flask",
        group: "dev",
        content: "I prefer use flask for develop simple API's<br><i>(if i haven't opportunity for use goLang)</i>",
    },
    {
        id: 32,
        title: "interviewing",
        group:"management",
        content: "Interviewed about 50 candidates.",
    }
])
export default Skills