# REACT INTERACTIVE DASHBOARD STATIC

### OVERVIEW

React Interactive Dashboard Static is a static reboot of React Interactive Dashboard. The main feature of the app is a dashboard where admin users can view mock analytics data for users, comments, and hashtags. Later I plan to add user authentication and CRUD for commenting.

Why the reboot? Building the full-stack version was taking way too long. Before deciding to reboot the project, I spent 3 months on the backend (learning everything from scratch) and I wasn't even close to finishing.

As my primary goal is to level up my frontend skills ASAP, I decided to reboot the project using JSON server so I can immediately start working on the frontend. 

Despite having to pause development on the full-stack version, I'm incredibly happy I attempted. I learned how to configure a monorepo with yarn workspaces as well as node.js, Express (routing, middleware, error handling), REST API design, CORs, MySQL, access control, and more.

I'm definitely going to revisit the full-stack of version of React Interactive Dashboard to continue leveling up my backend skills. For now, I need to focus on frontend because my goal is to land my second professional frontend role.

Shoutouts to my friends and former Aperto / IBM iX team leads that are helping me out with advice and code reviews:

1. [@sebastian-fitzner](https://github.com/Sebastian-Fitzner)
2. [@giuseppeminnella](https://github.com/giuseppeminnella)

Seriously, thanks guys!

### THE PROJECT STACK

Bold items are required. The other items are interesting technologies I would like to explore if time permits, but they are "nice to haves" as opposed to requirements. 

- **HTML** (Structure, semantics)
- **CSS** (Layout, styling, transitions, animations)
- **Emotion** (CSS in JS library)
- **React** (UI library)
- **React Router** (Routing)
- **Redux** (State management)
- Formik (Form handling)
- Redux Form (Form handling)
- TBD Redux Async Library (Async data handling)
- GraphQL (Data handling)
- ~~**node.js + Express** (Server)~~ **JSON Server**
- ~~**MySQL** (Storage)~~ **JSON Server**
- **ESLint** (Linting)
- **Prettier** (Formatting)
- **TypeScript** (Type checking)
- **Jest + React Testing Library** (Unit Testing)
- Cypress (Integration and E2E testing)
- Circle CI (Continuous integration)

> ⚠️ Warning: The project uses husky and lint-staged to prevent people
> committing code that doesn't pass validation (i.e. formatting, linting,
> type checking, and testing).

### SETUP IS SIMPLE 👇

##### Step 1:

```bash
git clone git@github.com:georgebullock/react-interactive-dashboard-static.git
```

##### Step 2:

```bash
yarn install
```

##### Step 3:

```bash
yarn start
```

> ⚠️ Warning: **The project requires node v12.6.0**.

> 💡 Tip: If you're using nvm, you can run `nvm use` to automatically switch to
> v12.6.0.

> 💡 Tip: Check out the `scripts` object (inside the `package.json`) for
> additional commands.

### ADDITIONAL INFORMATION

#### Project Motivation:

I'm doing this project to level up my "back of the frontend", testing, and React skills.

#### Project Status:

Active. Work in progress.

#### Project Roadmap:

1. ~~Node server~~ JSON Server
1. ~~MySQL database~~
1. ~~Node API~~
1. Static React app
1. Stateful React app
1. Server communication
1. GraphQL proxy?

#### Known Issues:

None that I'm aware of. If you find something feel free to create an issue or
send me a pull request.
