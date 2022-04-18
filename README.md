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
- [x] Project Specific Functionalities: Task and board object drag-and-drop that updates backend database real-time, implemented with Angular CDK, Angular dialog that subscribes to the events and databases, and database service that serves as middleman between frontend and backend. 
- [x] Deployed on the Cloud: Containerized with Docker and deployed using Firebase Hosting which can be access at [here](https://trello-minimal-csc4001.web.app/).
- [x] Mobile integration: Provided mobile-friendly experiences. 
- [x] Pretty UI: The whole website follows the material ui design and Angular best practices. Also used advanced ui features such as drop-down menus, which shows the redirection url to the admin page. 
- [x] Server Side Rendering: Generates static html files using SSR and prerending strategies with custom build commands. 
- [x] Google Sign-In: Implemented with Firebase Authentication Services. 

## Demo
Check blackboard for gifs for they are too big to upload here. 

## Code Illustration
Although there are many project here, the main project we are submitting is trello-clone. And we will briefly introduce how each part of functionality is impelemented here.  
First, the whole project can be broken down into several parts. Following the Angular pattern, there are modules, components, and services. Following my file sturecutre, most of the front-end and backend logic are abstracted into different modules and services, which looks like this:

```
.
└── app/
    ├── home-page/
    │   ├── home-page.component.ts
    │   └── homt-page.component.html
    ├── kanban
    ├── shared
    ├── user
    ├── services
    ├── app.module.ts
    ├── app-routing.module.ts
    ├── app.component.ts
    ├── app.server.module.ts
    └── app.module.html
```


