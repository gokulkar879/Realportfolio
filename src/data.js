import Mem from './mem.png';
import Mv from './mv.png';
import Wts from './wts.png';
import Snake from './snake.png';
import Sc from './sc.png';
import Task from './tsk.png';

export default [
    {
        id: 1,
        siteUrl: "https://glittery-piroshki-020ad0.netlify.app",
        frontend: "https://github.com/gokulkar879/chat-app-frontend",
        backend: "https://github.com/gokulkar879/chat-app-backend",
        pic: Wts,
        description: ["Web Chat app that implements real-time messaging functionality using Socket-Io",
                    "Authenticates the User using JWT and lets users share images as well",
                    "The backend is built using Express Js and Node"],
        name: "LetsChat",
        tech_stack: ["ReactJs", "SocketIo", "Cloudinary", "NodeJs", "MongoDB", "NodeJs", "ExpressJs", "JWT"]
    },
    {
        id: 2,
        siteUrl: "https://shimmering-kheer-f4b2de.netlify.app",
        github: "https://github.com/gokulkar879/task-app",
        pic: Task,
        description: ["React app that allows users to create tasks, set due dates, assign priorities, and track the progress of their tasks",
                    "Users can also change the importance of the task by moving the task from one category to another",
                    "Backend has been built using various Appwrite features, an open source organization offering backend as a service"],
        name: "MyTask",
        tech_stack: ["ReactJs", "Appwrite"]
    },
    {
        id: 3,
        siteUrl: "https://cute-empanada-69491a.netlify.app",
        frontend: "https://github.com/gokulkar879/social-site-frontend",
        backend: "https://github.com/gokulkar879/post-app",
        pic: Sc,
        description: ["Utilized React Js to develop a social site where users can post, comment and like.",
                      " Backend built with Node Js and Express",
                      "Developed RESTful APIs to handle data retrieval, storage, and user authentication",
                      "Utilized MongoDB to store and manage user profiles, posts, and other relevant data",
                      "Implemented authentication with JWT (JSON Web Tokens) to secure user data and protect against unauthorized access"
                    ],
        name: "Socialite",
        tech_stack: ["ReactJs", "NodeJs", "Express", "MongoDB", "JWT"]
    },
    {
        id: 4,
        siteUrl: "https://illustrious-horse-d2cb97.netlify.app",
        github: "https://github.com/gokulkar879/movie-clone",
        pic: Mv,
        description: ["React Js movie search app that lets users to browse and search for movies, view movie details.",
                    "Also, lets users toggle between dark and light mode.",
                    "Also, lets users toggle between dark and light mode."],
        name: "MovieSearch",
        tech_stack: ["ReactJs", "ReactContext", "ReactRouter"]
    },
    {
        id: 5,
        siteUrl: "https://delightful-salmiakki-6c758a.netlify.app",
        github: "https://github.com/gokulkar879/memory-app",
        pic: Mem,
        description: ["Memory game using Javascript"],
        name: "MemoryU",
        tech_stack: ["HTML", "CSS", "Javascript"]
    },
    {
        id: 6,
        siteUrl: "https://zingy-dieffenbachia-6abad7.netlify.app",
        github: "https://github.com/gokulkar879/snake-app",
        pic: Snake,
        description: ["Snake game using Javascript"],
        name: "SnakeBite",
        tech_stack: ["HTML", "CSS", "Javascript"]
    },
]