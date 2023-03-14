<template> <div class="nav-bar">
    <div class="nav-container">
        <div class="logo">
         <a href="/"><h3>Chris.</h3></a>
        </div>
        <div class="navinfo">
          <a href="/user">Product</a>
          <a href="/login" v-if="!isLoggedIn">Login</a>
          <a href="/signin" v-if="!isLoggedIn">Sign in</a>
          <a href='' @click="handleSignOut" v-if="isLoggedIn">Logout</a>
        </div>
    </div>  
  </div>   
</template>

<script setup>
import { onMounted, ref} from 'vue';
import { getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import { useRouter } from 'vue-router';
const router = useRouter()

const isLoggedIn = ref(false); 
let auth;
onMounted(() =>{
  auth = getAuth()
  onAuthStateChanged(auth, (user) =>{
    if (user) {
      isLoggedIn.value = true;
    }else{
      isLoggedIn.value = false;
    }
  })
})
const handleSignOut = () => {
  signOut(auth).then(()=>{
    router.push('/')
  })
}; 
</script>

<style scoped>
.nav-bar{
  position: relative;
  border-bottom:2px solid #f8f8f8;
  width: 100%;
  height: 65px;
  overflow: hidden;
}
.nav-container{
  display: flex;
  align-items: center;
  margin: 20px 70px;
  justify-content: space-between;
}
.logo a{
  text-decoration: none;
}
.logo h3{
  text-decoration: none;
  color: #2b3b52;
  font-size: 25px;
  cursor:default;
}
.navinfo{
  display: flex;
  justify-content: space-between;
  gap: 40px;
}
.navinfo a{
  position: relative;
  display: flex;
  align-items: center;

  text-decoration: none;
  line-height: 0.5;
  font-weight: 400;
  color: #121212;
  border-bottom: 3px solid transparent;
  transition: .4s;
  font-size: 17px;
}
.navinfo a:nth-child(2){
  width: fit-content;
  padding: 15px;
  border-radius: 5px;
  background-color: tomato;
  border: none;
  color: #f8f8f8;
}
.navinfo a:nth-child(3){
  width: fit-content;
  padding: 15px;
  border-radius: 5px;
  background-color: tomato;
  border: none;
  color: #f8f8f8;
}
.navinfo a:nth-child(3):hover,.navinfo a:nth-child(2):hover{
  background-color: rgb(201, 70, 46);
}
.navinfo a:hover{
  border-color:#121212 ;
}
/*Responsive*/
@media (max-width: 570px) {
  .nav-container{
    margin:20px 20px;
  }
  .navinfo{
    gap: 25px;
  }
}
@media (max-width: 392px) {
  .navinfo a:nth-child(1){
    display: none;
  }
  .nav-container{
    margin: 20px 10px;
  }
  .navinfo{
    gap: 10px;
    font-size: 5px;
  }
}
</style>  