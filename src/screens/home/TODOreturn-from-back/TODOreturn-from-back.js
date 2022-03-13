const programmingLogicIcon = 'https://xpcodehub.surge.sh/icons/programming-logic.png'
const oopIcon = 'https://xpcodehub.surge.sh/icons/oop.png'
const javaIcon = 'https://xpcodehub.surge.sh/icons/java.png'
const sqlIcon = 'https://xpcodehub.surge.sh/icons/sql.jpg'
const postgresqlIcon = 'https://xpcodehub.surge.sh/icons/postgresql.png'
const gradleIcon = 'https://xpcodehub.surge.sh/icons/gradle.png'
const mavenIcon = 'https://xpcodehub.surge.sh/icons/maven.png'
const springbootIcon = 'https://xpcodehub.surge.sh/icons/springboot.png'
const herokuIcon = 'https://xpcodehub.surge.sh/icons/heroku.png'

const htmlIcon = 'https://xpcodehub.surge.sh/icons/html.png';
const cssIcon = 'https://xpcodehub.surge.sh/icons/css.png';
const javascriptIcon = 'https://xpcodehub.surge.sh/icons/javascript.png';
const jqueryIcon = 'https://xpcodehub.surge.sh/icons/jquery.png';
const bootstrapIcon = 'https://xpcodehub.surge.sh/icons/bootstrap.png';
const commandIcon = 'https://xpcodehub.surge.sh/icons/command.png';
const reactIcon = 'https://xpcodehub.surge.sh/icons/react.png';

const dartIcon = 'https://xpcodehub.surge.sh/icons/dart.png';
const flutterIcon = 'https://xpcodehub.surge.sh/icons/flutter.png';

const gitIcon = 'https://xpcodehub.surge.sh/icons/git.png'

export const data =
    [
        {
                id: "backend",
                title: "Back End Developer Skills",
                root: [
                    {
                        id: 'programming-logic',
                        title: 'Programming Logic',
                        icon: programmingLogicIcon.toString(),
                        tooltip: {
                            content:
                                'descricao', //TODO
                        },
                        children: [
                            {
                                id: 'git',
                                title: 'Git',
                                icon: gitIcon.toString(),
                                tooltip: {
                                    content:
                                        'descricao', //TODO
                                },
                                children: [],
                            },
                            {
                                id: 'oop',
                                title: 'Object Oriented Programming',
                                icon: oopIcon.toString(),
                                tooltip: {
                                    content:
                                        'descricao', //TODO
                                },
                                children: [
                                    {
                                        id: 'java',
                                        title: 'Java',
                                        icon: javaIcon.toString(),
                                        tooltip: {
                                            content:
                                                'descricao', //TODO
                                        },
                                        children: [
                                            {
                                                id: 'gradle',
                                                title: 'Gradle',
                                                icon: gradleIcon.toString(),
                                                tooltip: {
                                                    content:
                                                        'descricao', //TODO
                                                },
                                                children: [],
                                            },
                                            {
                                                id: 'maven',
                                                title: 'Maven',
                                                icon: mavenIcon.toString(),
                                                tooltip: {
                                                    content:
                                                        'descricao', //TODO
                                                },
                                                children: [
                                                    {
                                                        id: 'spring-boot',
                                                        title: 'Spring Boot',
                                                        icon: springbootIcon.toString(),
                                                        tooltip: {
                                                            content:
                                                                'descricao', //TODO
                                                        },
                                                        children: [
                                                            {
                                                                id: 'heroku',
                                                                title: 'Heroku',
                                                                icon: herokuIcon.toString(),
                                                                tooltip: {
                                                                    content:
                                                                        'descricao', //TODO
                                                                },
                                                                children: [],
                                                            }
                                                        ],
                                                    }
                                                ],
                                            }
                                        ],
                                    },
                                    {
                                        id: 'sql',
                                        title: 'SQL',
                                        icon: sqlIcon.toString(),
                                        tooltip: {
                                            content:
                                                'descricao', //TODO
                                        },
                                        children: [
                                            {
                                                id: 'postegresql',
                                                title: 'PostegreSQL',
                                                icon: postgresqlIcon.toString(),
                                                tooltip: {
                                                    content:
                                                        'descricao', //TODO
                                                },
                                                children: [],
                                            }
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ]
        },
        {
                id: "frontend",
                title: "Front End Developer Skills",
                root: [
                    {
                        id: 'web-html',
                        title: 'HTML',
                        icon: htmlIcon.toString(),
                        tooltip: {
                            content:
                                'HyperText Markup Language (HTML) is the standard markup language used to create web pages. A markup language is your way of making notes in a digital document that can be distinguished from regular text. It’s the most basic building block you’ll need for developing websites.',
                        },
                        children: [
                            {
                                id: 'web-css',
                                title: 'CSS',
                                icon: cssIcon.toString(),
                                tooltip: {
                                    content:
                                        'CSS (Cascading Style Sheets) is the language used to present the document you create with HTML. Where HTML comes first and creates the foundation for your page, CSS comes along next and is used to create the page’s layout, color, fonts, and…well, the style!',
                                },
                                children: [
                                    {
                                        id: 'web-bootstrap',
                                        title: 'Bootstrap',
                                        icon: bootstrapIcon.toString(),
                                        tooltip: {
                                            content:
                                                'Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.',
                                        },
                                        children: [],
                                    },
                                ],
                            },
                            {
                                id: 'web-javascript',
                                title: 'JavaScript',
                                icon: javascriptIcon.toString(),
                                tooltip: {
                                    content:
                                        'JavaScript is a programming language used to implement interactive features like audio and video, games, scrolling abilities and page animations.',
                                },
                                children: [
                                    {
                                        id: 'web-jquery',
                                        title: 'jQuery',
                                        icon: jqueryIcon.toString(),
                                        tooltip: {
                                            content:
                                                'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.',
                                        },
                                        children: [],
                                    },
                                    {
                                        id: 'web-command',
                                        title: 'Command Line',
                                        icon: commandIcon.toString(),
                                        tooltip: {
                                            content:
                                                'There are going to be times when you’ll need to open a terminal on your computer where you can enter typed commands (command line) to get what you need.',
                                        },
                                        children: [
                                            {
                                                id: 'web-react',
                                                title: 'React',
                                                icon: reactIcon.toString(),
                                                tooltip: {
                                                    content:
                                                        'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.',
                                                },
                                                children: [],
                                            }
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ]
        },

        {
                id: "mobile",
                title: "Mobile Developer Skills",
                root: [
                    {
                        id: 'dart',
                        title: 'Dart',
                        icon: dartIcon.toString(),
                        tooltip: {
                            content:
                                'Dart is a programming language designed for client development, such as for the web and mobile apps. It is developed by Google and can also be used to build server and desktop applications.\n' +
                                '\n' +
                                'Dart is an object-oriented, class-based, garbage-collected language with C-style syntax. Dart can compile to either native code or JavaScript. It supports interfaces, mixins, abstract classes, reified generics, and type inference.',
                        },
                        children: [
                            {
                                id: 'flutter',
                                title: 'Flutter',
                                icon: flutterIcon.toString(),
                                tooltip: {
                                    content:
                                        'Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase.',
                                },
                                children: [],
                            },
                        ],
                    },
                ]
        }
    ];

console.log("presenteee")
console.log(gitIcon)
console.log(gitIcon.toLocaleString())
console.log(gitIcon)
console.log(JSON.stringify(data))



export default data;