# csc4001-submission

Repor purpose: Final version of CSC4001 project

Final version of the deployed app can be found at: https://trello-minimal-csc4001.web.app/.  

## Check lists completion:

### Required Project Features
**User Interface**
- [x] Basic UI Design: Implemented with Angular framework and Material UI. 


**Database**
- [x] Database Integration: integrated with Firebase


**User Management**
- [x] User Signup: Handle new user creation via login and Firebase authentication. 
- [x] User Login & Logut: Handled with custom functions that talk to backend databases. 
- [x] Email verification: Handled with Firebase email service. 
- [ ] Profile photo: 
- [x] Password modification: Handled with custom functions and Firebase email services. 


**Admin User**
- [x] Admin User Interface: Created with both @nest/swagger as pure backend code and Firebase Authentication services. 
- [x] Reset user password: Implemented with Firebase Authentication provider and custom CLI tools. 
- [x] List all users: Implemented with Firestore database. 
### Advanced Project Features
- [x] Project Specific Functionalities: Task and board object drag-and-drop that updates backend database real-time, implemented with Angular CDK, Angular dialog that pops up when the user is trying to create a new board or task, and database service that subscribes to the events and databases and serves as middleman between frontend and backend. 
- [x] Deployed on the Cloud: Containerized with Docker and deployed using Firebase Hosting which can be access at [here](https://trello-minimal-csc4001.web.app/).
- [x] Mobile integration: Provided mobile-friendly experiences. 
- [x] Pretty UI: The whole website follows the material ui design and Angular best practices. Also used advanced ui features such as drop-down menus, which shows the redirection url to the admin page. 
- [x] Server Side Rendering: Generates static html files using SSR and prerending strategies with custom build commands. 
- [x] Google Sign-In: Implemented with Firebase Authentication Services. 

## Demo
Check blackboard for gifs for they are too big to upload here. 

## Code Illustration
### File Structure Overview
Although there are many project here, the main project we are submitting is trello-clone. And we will briefly introduce how each part of functionality is impelemented here. 

First, the whole project can be broken down into several parts. Following the Angular pattern, there are modules, components, and services. Following my file sturecutre, most of the front-end and backend logic are abstracted into different modules and services, which looks like this:

```{generated with tree.nathanfriend.io}
.
└── app/
    ├── home-page/
    │   ├── home-page.component.ts
    │   └── homt-page.component.html
    ├── kanban/
    │   ├── board/
    │   │   ├── board.component.ts
    │   │   └── board.component.html
    │   ├── board-list/
    │   │   ├── board-list.component.ts
    │   │   └── board-list.component.html
    │   ├── dialogs/
    │   │   ├── board-dialog.component.ts
    │   │   └── task-dialog.component.ts
    │   ├── kanban-routing.module.ts
    │   ├── kanban.module.ts
    │   ├── board.model.ts
    │   └── board.service.ts
    ├── shared/
    │   ├── delete-button/
    │   │   ├── delete-button.component.ts
    │   │   └── delete-button.component.html
    │   ├── shell/
    │   │   ├── shell.component.ts
    │   │   └── shell.component.html
    │   └── shared.module.ts
    ├── user/
    │   ├── email-login/
    │   │   ├── email.component.ts
    │   │   └── email.component.html
    │   ├── login-page/
    │   │   ├── login-page.component.ts
    │   │   └── login-page.component.html
    │   ├── user.module.ts
    │   ├── user-routing.module.ts
    │   ├── google-signin.directive.ts
    │   └── auth.guard.ts
    ├── services/
    │   └── snack.service.ts
    ├── app.module.ts
    ├── app-routing.module.ts
    ├── app.component.ts
    ├── app.server.module.ts
    └── app.module.html
```
I will briefly explain what these files stand for and what function they serve. The naming of the file follows a `${custom_name}.${conventional_suffix}.ts`, where the conventional suffix stands for the responsibility of the file. For example, the `component` suffix means that this file will serve as a building block that will make up the UI in the future, and the `module` suffix means this file is responsible for modularizing the file so that it could be bound with other files in the same app. 


### Basic Functionality Break-Down
After knowing the naming convention, I will briefly explain what each subfoler to the app folder does. 

#### home-page
The `home-page` directory stores the `home-page` that is rendered at the root `/` URL. This component is basically a welcome note that tells the user how to get started with the app. 

#### kanban
The `kanban` directory is responsible for the core functionality and the most complexy logic of this app. There are four components: the `board` component that renders single task board element, the `board-list` component that renders an array of task boards, the `board-dialog` that pops up to prompt users to enter form information when creating new board, and the `task-dialog` component that asks the user to enter task information when they are trying to create new tasks. The most important service file `board.service.ts` handles CRUD methods that connects drag and drop operations to the database. Other files like the `board.model.ts` defines the interface for the type of `Task` and `Board` which mirrors the database schema, and the `kanban-routing.module.ts` binds the `board` component to the '/kanban' page so that it will be rendered when the logged-in users visite the route. 

#### shared
The `shared` directory implements logic or components that will be reused in other parts of the application. For example the `delete-button` is reused in both the `board` and `task-dialog` components, and the `shell` components defines the navigation bar and the drop down menu that will redirect users to different pages. Finally the `shared.module.ts` inject these custom reusable components along with other default material ui components so that other files need only share the `shared` directory, which avoids repetitive importing and reduces the final bundle size. 

#### user
The `user` directory mainly handles the authentication logic and defines the login page and its components. It's worth nothing that the `google-signin.directive.ts` is reusable in other places as a directive. The `auth.guard.ts` is used to prevent users from accessing pages before they login since these pages will require operations involving the database. 

#### services
The `services` directory defines a `snack` popup that reminds the user to login when they are trying to visit proetected pages. It will redirect the user to the login page once they click on it. 


### Database and Server Configuration
So far for the client-side logic. Let me introduce some Firebase setting, which serves both as my database and server hosting provider. 

#### Database Modeling and Security
Firebase is a document database like mongoDB, and the schema I created for the database looks like this:
<img width="1222" alt="Screen Shot 2022-04-19 at 02 34 24" src="https://user-images.githubusercontent.com/51786539/163856934-eceb6ad1-d6d2-45a0-943d-d35d9b9d3887.png">

As for the database security rule, I abstracted the authorization logic into to functions that checks permission before doing operations like deletion and updata. The security rules are as follows: 
<img width="1263" alt="Screen Shot 2022-04-19 at 02 36 40" src="https://user-images.githubusercontent.com/51786539/163857237-cec0567c-ddc9-42c8-8144-a57b1fd54aa7.png">
The schemas above are mirrored in the `board.service.ts` file, which provides more customized functions for the client to interact with the database. 


It prevents unauthorized user to modify data of other users, and it also prevents database attacks sicne the apiKey is required to be public for the Firebase client to work. 

#### User Authentication
One of the reasons that I use Firebase and Angular together is because Firebase has multiple authentication providers out of the box, and Angular natively supports AngularFireAuth. This natural combination of the to technologies gives very simple and intuitive user authentication. First setup a Firebase app, set up authentication providers in the cloud console, pass the authentication information into `environment.ts`, and then use the `@angular/fire` schematic to inject AngularFireAuth module into the `user` module. The authentication logic is set up. Below is the Authentication function in the Firebase. After further configuring the Firebase server, the cloud functions will be able to handle advanced functionalities like email confirmation and password reset with email confirmation logic. 
<img width="975" alt="Screen Shot 2022-04-19 at 02 51 56" src="https://user-images.githubusercontent.com/51786539/163859716-bf1eba68-7273-4fd8-8899-057dda3b0b5b.png">

This pattern is now know as `serverless`, which mean you run only functions on the server without really setting up one. It will significantly boost up the developement speed and scalability. In the `nestjs-image-template` I implemented the email confirmation logic by hand, it will require hundres of lines of code (including the boilerplate) to define the data schema, the data transfer object, the CRUD methods, and custom logic only to start running locally. With the app grows in complexity the backend codebase will be changed constantly. Wheras in the serverless pattern not only the repetitive logic like CRUD methods in the authentication can be handled out of the box, but also advanced token authentication and two-factor authorization. I'm sure there are some 
libraries like passport.js and nodemail that can offer abstractions to authentication and email confirmation that makes life easier, and there are both express and nestjs implementation in my codebase for other projects. And also, why shouldn't we take a step further now that we are starting to use Firebase. 

#### Admin User Functionality
<img width="1167" alt="Screen Shot 2022-04-19 at 02 33 03" src="https://user-images.githubusercontent.com/51786539/163856746-b199f46a-0173-4d80-9fe5-f906c28c95ed.png">
This is the panel where the admin user can inspect all users and modify their data including the tasks they've made. Note that I've also generated frontend code using the decorators' functionalities from the `@nestjs/swagger` schematic. Similarly they lives a different codebase than the Firebase one. 
<img width="955" alt="Screen Shot 2022-04-19 at 03 10 08" src="https://user-images.githubusercontent.com/51786539/163862134-f444dd08-992c-4d0b-8e0a-3557708247d9.png">
This is how the admin user can manipulate users with operations like password resetting, account disabling, and account deletion. 

### Advanced Funtionality Breakdown
I think the previous sections of the documentation has grasped the main ideas of the implementations. Thus I'll skip until further questions are raise. PS: you can always open up a GitHub issue if my previous descriptions aren't clear enought. 

