import programmingLogicIcon from './icons/programming-logic.png'
import gitIcon from './icons/git.png'
import oopIcon from './icons/oop.png'
import javaIcon from './icons/java.png'
import sqlIcon from './icons/sql.jpg'
import postgresqlIcon from './icons/postgresql.png'
import gradleIcon from './icons/gradle.png'
import mavenIcon from './icons/maven.png'
import springbootIcon from './icons/springboot.png'
import herokuIcon from './icons/heroku.png'

import htmlIcon from './icons/html.png';
import cssIcon from './icons/css.png';
import javascriptIcon from './icons/javascript.png';
import jqueryIcon from './icons/jquery.png';
import bootstrapIcon from './icons/bootstrap.png';
import commandIcon from './icons/command.png';
import reactIcon from './icons/react.png';

import dartIcon from './icons/dart.png';
import flutterIcon from './icons/flutter.png';


export const data =
    [
        [
            {
                tree: {
                    id: "backend",
                    title: "Back End Developer Skills"
                },
                id: 'programming-logic',
                title: 'Programming Logic',
                icon: programmingLogicIcon,
                tooltip: {
                    content:
                        'descricao', //TODO
                },
                children: [
                    {
                        id: 'git',
                        title: 'Git',
                        icon: gitIcon,
                        tooltip: {
                            content:
                                'descricao', //TODO
                        },
                        children: [],
                    },
                    {
                        id: 'oop',
                        title: 'Object Oriented Programming',
                        icon: oopIcon,
                        tooltip: {
                            content:
                                'descricao', //TODO
                        },
                        children: [
                            {
                                id: 'java',
                                title: 'Java',
                                icon: javaIcon,
                                tooltip: {
                                    content:
                                        'descricao', //TODO
                                },
                                children: [
                                    {
                                        id: 'gradle',
                                        title: 'Gradle',
                                        icon: gradleIcon,
                                        tooltip: {
                                            content:
                                                'descricao', //TODO
                                        },
                                        children: [],
                                    },
                                    {
                                        id: 'maven',
                                        title: 'Maven',
                                        icon: mavenIcon,
                                        tooltip: {
                                            content:
                                                'descricao', //TODO
                                        },
                                        children: [
                                            {
                                                id: 'spring-boot',
                                                title: 'Spring Boot',
                                                icon: springbootIcon,
                                                tooltip: {
                                                    content:
                                                        'descricao', //TODO
                                                },
                                                children: [
                                                    {
                                                        id: 'heroku',
                                                        title: 'Heroku',
                                                        icon: herokuIcon,
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
                                icon: sqlIcon,
                                tooltip: {
                                    content:
                                        'descricao', //TODO
                                },
                                children: [
                                    {
                                        id: 'postegresql',
                                        title: 'PostegreSQL',
                                        icon: postgresqlIcon,
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
        ],
        [
            {
                tree: {
                    id: "frontend",
                    title: "Front End Developer Skills"
                },
                id: 'web-html',
                title: 'HTML',
                icon: htmlIcon,
                tooltip: {
                    content:
                        'HyperText Markup Language (HTML) is the standard markup language used to create web pages. A markup language is your way of making notes in a digital document that can be distinguished from regular text. It’s the most basic building block you’ll need for developing websites.',
                },
                children: [
                    {
                        id: 'web-css',
                        title: 'CSS',
                        icon: cssIcon,
                        tooltip: {
                            content:
                                'CSS (Cascading Style Sheets) is the language used to present the document you create with HTML. Where HTML comes first and creates the foundation for your page, CSS comes along next and is used to create the page’s layout, color, fonts, and…well, the style!',
                        },
                        children: [
                            {
                                id: 'web-bootstrap',
                                title: 'Bootstrap',
                                icon: bootstrapIcon,
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
                        icon: javascriptIcon,
                        tooltip: {
                            content:
                                'JavaScript is a programming language used to implement interactive features like audio and video, games, scrolling abilities and page animations.',
                        },
                        children: [
                            {
                                id: 'web-jquery',
                                title: 'jQuery',
                                icon: jqueryIcon,
                                tooltip: {
                                    content:
                                        'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.',
                                },
                                children: [],
                            },
                            {
                                id: 'web-command',
                                title: 'Command Line',
                                icon: commandIcon,
                                tooltip: {
                                    content:
                                        'There are going to be times when you’ll need to open a terminal on your computer where you can enter typed commands (command line) to get what you need.',
                                },
                                children: [
                                    {
                                        id: 'web-react',
                                        title: 'React',
                                        icon: reactIcon,
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
        ],
        [
            {
                tree: {
                    id: "mobile",
                    title: "Mobile Developer Skills"
                },
                id: 'dart',
                title: 'Dart',
                icon: dartIcon,
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
                        icon: flutterIcon,
                        tooltip: {
                            content:
                                'Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase.',
                        },
                        children: [],
                    },
                ],
            },
        ]
    ];

export default data;