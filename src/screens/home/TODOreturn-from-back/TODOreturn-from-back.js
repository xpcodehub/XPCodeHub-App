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
    [{"id":1,"title":"Back End Developer Skills","root":[{"title":"Programming Logic","icon":"https://xpcodehub.surge.sh/icons/programming-logic.png","tooltip":{"id":1,"content":"descricao"},"children":[{"title":"Git","icon":"https://xpcodehub.surge.sh/icons/git.png","tooltip":{"id":2,"content":"descricao"},"children":[],"id":"git"},{"title":"Object Oriented Programming","icon":"https://xpcodehub.surge.sh/icons/oop.png","tooltip":{"id":3,"content":"descricao"},"children":[{"title":"Java","icon":"https://xpcodehub.surge.sh/icons/java.png","tooltip":{"id":4,"content":"descricao"},"children":[{"title":"Gradle","icon":"https://xpcodehub.surge.sh/icons/gradle.png","tooltip":{"id":5,"content":"descricao"},"children":[],"id":"gradle"},{"title":"Maven","icon":"https://xpcodehub.surge.sh/icons/maven.png","tooltip":{"id":6,"content":"descricao"},"children":[{"title":"Spring Boot","icon":"https://xpcodehub.surge.sh/icons/springboot.png","tooltip":{"id":7,"content":"descricao"},"children":[{"title":"Heroku","icon":"https://xpcodehub.surge.sh/icons/heroku.png","tooltip":{"id":8,"content":"descricao"},"children":[],"id":"heroku"}],"id":"spring-boot"}],"id":"maven"}],"id":"java"},{"title":"SQL","icon":"https://xpcodehub.surge.sh/icons/sql.jpg","tooltip":{"id":9,"content":"descricao"},"children":[{"title":"PostegreSQL","icon":"https://xpcodehub.surge.sh/icons/postgresql.png","tooltip":{"id":10,"content":"descricao"},"children":[],"id":"postegresql"}],"id":"sql"}],"id":"oop"}],"id":"programming-logic"}]},{"id":2,"title":"Front End Developer Skills","root":[{"title":"HTML","icon":"https://xpcodehub.surge.sh/icons/html.png","tooltip":{"id":11,"content":"HyperText Markup Language (HTML) is the standard markup language used to create web pages. A markup language is your way of making notes in a digital document that can be distinguished from regular text. It’s the most basic building block you’ll need for developing websites."},"children":[{"title":"CSS","icon":"https://xpcodehub.surge.sh/icons/css.png","tooltip":{"id":12,"content":"CSS (Cascading Style Sheets) is the language used to present the document you create with HTML. Where HTML comes first and creates the foundation for your page, CSS comes along next and is used to create the page’s layout, color, fonts, and…well, the style!"},"children":[{"title":"Bootstrap","icon":"https://xpcodehub.surge.sh/icons/bootstrap.png","tooltip":{"id":13,"content":"Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites."},"children":[],"id":"web-bootstrap"}],"id":"web-css"},{"title":"JavaScript","icon":"https://xpcodehub.surge.sh/icons/javascript.png","tooltip":{"id":14,"content":"JavaScript is a programming language used to implement interactive features like audio and video, games, scrolling abilities and page animations."},"children":[{"title":"jQuery","icon":"https://xpcodehub.surge.sh/icons/jquery.png","tooltip":{"id":15,"content":"jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers."},"children":[],"id":"web-jquery"},{"title":"Command Line","icon":"https://xpcodehub.surge.sh/icons/command.png","tooltip":{"id":16,"content":"There are going to be times when you’ll need to open a terminal on your computer where you can enter typed commands (command line) to get what you need."},"children":[{"title":"React","icon":"https://xpcodehub.surge.sh/icons/react.png","tooltip":{"id":17,"content":"React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components."},"children":[],"id":"web-react"}],"id":"web-command"}],"id":"web-javascript"}],"id":"web-html"}]},{"id":3,"title":"Mobile Developer Skills","root":[{"title":"Dart","icon":"https://xpcodehub.surge.sh/icons/dart.png","tooltip":{"id":18,"content":"Dart is a programming language designed for client development, such as for the web and mobile apps. It is developed by Google and can also be used to build server and desktop applications.\n\nDart is an object-oriented, class-based, garbage-collected language with C-style syntax. Dart can compile to either native code or JavaScript. It supports interfaces, mixins, abstract classes, reified generics, and type inference."},"children":[{"title":"Flutter","icon":"https://xpcodehub.surge.sh/icons/flutter.png","tooltip":{"id":19,"content":"Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase."},"children":[],"id":"flutter"}],"id":"dart"}]}];

console.log("presenteee")
console.log(gitIcon)
console.log(gitIcon.toLocaleString())
console.log(gitIcon)
console.log(JSON.stringify(data))



export default data;