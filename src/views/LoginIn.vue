<template>
     <div class="login">
        <div class="log-container">
            <div class="log-con">
                <img src="../assets/sale.jpg" alt="" />
            </div>
            <div class="logInfo">
                <p v-if="errMsg" class="Error"> {{ errMsg }} </p>
                <h2>Login</h2>
                <form >
                <div class="log-details">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="email" placeholder="Email"/>
                </div>
                <div class="log-details">
                    <label>Password</label>
                    <input type="Password" class="form-control" v-model="password" placeholder="Password"/>
                </div>
            </form>
                <div class="log-btns">
                    <button class="log-btn" @click="register"> Login</button>     
                    <span ><a href="" class="log-forget">Forget password</a></span>
                </div>
            </div>
        </div>
    </div>
</template>
  

<script setup>
import  { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
const email = ref('');
const password =ref ('')
const router = useRouter()
const errMsg = ref()

const register =() =>{
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(( data ) => {
        alert("successfully logged  in")
        router.push('/user')
    })
    .catch((error) => {
        console.log(error.code); 
        switch(error.code) {
            case 'auth/invalid-email':
            errMsg.value = 'Invalid email';
            break;
          case "auth/user-not-found":
                errMsg.value ="No Account with that email was found"
            break;
            case 'auth/wrong-password':
                errMsg.value ="Incorrect password"
            break;
            default:
                errMsg.value ="Reload Your Page";
            break;
        }
    })
};

    
</script>

<style scoped>
.login{
    position: relative;
    
}
.log-container{
    display: flex;
    flex-direction: row;
    height: 90vh;
}
.log-con{
    display: flex;
    flex: 1;  
    align-items: center;
    justify-content: center; 
}
.log-con img{
    width:100%;

    padding: 20px;
    object-fit: cover;
}
.logInfo{
    flex: 1;
}
.logInfo{
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    justify-content: center;
}
.logInfo h2{
    width: fit-content;
    color:rgb(53, 53, 135);
    margin-bottom: 30px;
    letter-spacing: 1.5px;
}
.Error{
    margin-bottom: 10px;
    width: fit-content;
    padding: 20px;
    
    border-radius: 2px;
    border-color: red;
    border-style: dotted;
}
.log-details{
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    gap: 10px;
}
label{
    font-size: 15px;
    font-weight: 300;
}
.form-control{
    width: 300px;
    height: 40px;
    padding-left: 10px;
}
.form-control:focus{
    outline: none;
}
.log-btns{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 300px;
}
.log-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
    margin-bottom: 20px;
    background-color:tomato;
    border: none;
    border-radius: 2px;
    color: rgba(240, 248, 255, 0.833);
}
.log-btn:hover{
    background-color: rgb(235, 94, 70);
}
.log-forget{
    text-decoration: none;
}
/*Responsive */
@media (max-width: 920px) {
.log-con{
    display: none;
}
.logInfo{
    display: flex;
    align-items: center;
    justify-content: center;
}
}
/*Responsive */
@media (max-width: 1030px) {
    .log-con img{
    width:100%;
    margin-top:150px;
    padding: 20px;
    object-fit: cover;
}
}
@media (max-width: 392px) {
    .form-control{
    width: 250px;
    margin-right: 30px;
}
.logInfo h2{
    margin-right: 30px;
}
}
</style>