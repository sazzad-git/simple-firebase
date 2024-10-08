/**
 *           --------------------
 *               INITIAL SETUP
 *          ------------------------
 * 1. visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase: npm i firebase
 * 5. add config file to your project
 * 6. Danger: Do not publish or make firebase config to public by publish those to github
 * -----------------
 * INTEGRATION
 * ------------------
 * 7. visit: Go to docs> Build > Authentication > web > get started
 * 8.export app from the firebase.config.js: export default app
 * 9. Login.jsx: import {getAuth} from 'firebase/auth'
 * 10. create const auth = getAuth(app)
 * ------------------
 * PROVIDER SETUP
 * ----------------
 * 11. import google GoogleAuthProvider and crate a new provider
 * 12. use signInWithProvider and pass auth and provider
 * 13. activate sign-in method (google, facebook, github, etc.)
 * 14. [vite]: change 127.0.0.1 to localhost
 * --------------
 * More Auth Provider
 * ----------------
 * 1. active the auth provider (create app, provide redirect url client it, client secret)
 * 2. 
 * **/
