import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginIn from "../views/LoginIn.vue"
import SignIn from "../components/SignIn.vue"
import User from "../components/User.vue"
import { getAuth,onAuthStateChanged } from 'firebase/auth'
import Error from "../components/Error.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)',
      name:'error',
      component:Error,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    }, 
    {
      path:"/login", 
      name:"LoginIn",
      component:LoginIn,

    }, 
    {
      path:"/signin",
      name:"signin",
      component:SignIn
    },
    {
      path:"/user",
      name:"User",
      component:User,
      meta:{
        requiresAuth:true,
      },
    }, 
  ],
});
const getCurrentUser =() =>{
  return new Promise ((resolve,reject) =>{
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) =>{
        removeListener();
        resolve(user);
      },
      reject
    )
  })
}
 router.beforeEach(async(to,from,next) => {
  if (to.matched.some((record)=>record.meta.requiresAuth)){
     if(await getCurrentUser()){
       next();
    }else{
     alert("you don't have access");
      next('/')
  }
 }else{
  next();
 }
})

export default router
