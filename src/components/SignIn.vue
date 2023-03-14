<template>
     <div class="login">
        <div class="log-container">
            <div class="log-con">
                <img src="../assets/sale.jpg" alt="" />
            </div>
            <div class="logInfo">
                <h2>Create Account</h2>
                <form>
                <div class="log-details">
                    <div class="name-details">
                        <div class="name-detail">
                            <label>First Name</label>
                            <input type="text" class="form-control" placeholder="First Name" v-model="first_name" required/>
                        </div>
                        <div class="name-detail">
                            <label>Last Name</label>
                            <input type="text" class="form-control" placeholder="Last Name" v-model="last_name" required/>
                        </div>
                    </div>
                </div>
                <div class="log-details">
                    <label>Email</label>
                    <input type="Email" v-model="email" class="form-controls" placeholder="Email" required/>
                </div>
                <div class="log-details">
                    <label>Password</label>
                    <input type="password"  v-model="password" class="form-controls"  placeholder="password" required autocomplete=""/>
                </div>
                <button class="log-btn"  @click="register">Create Account</button>
            </form>
            <h6 class="log-det">Already have an account?<a href="/login">Log in</a></h6>
            </div>
        </div>
    </div> 
</template>
 
<script setup>
import  { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { useRouter } from 'vue-router'
const email = ref('');
const password =ref ('')
const first_name =ref ('')
const last_name =ref ('')
const router = useRouter()

const register =() =>{
    createUserWithEmailAndPassword(getAuth(), email.value, password.value, first_name.value,last_name.value )
    .then((data) => {
        console.log("successfully registered")
        router.push('/user')
    })
    .catch((error) => {
        console.log(error.code); 
        alert(error.message)
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
    flex: 1;   
}
.log-con img{
    width:100%;
    margin-top:120px;
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
    color:rgb(70, 70, 114);
    font-size: 30px;
    margin-bottom: 30px;
    letter-spacing: 1px;
}
.log-details{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}
.name-details{
    display: flex;
    flex-direction: row;
}
.name-detail{
    display: flex;
    flex-direction:column;
}
label{
    font-size: 15px;
    font-weight: 300;
   
}
.form-control{
    width: 200px;
    height: 40px;
    padding-left: 10px;
    margin-right:20px ;
}
.form-control:focus{
    outline: none;
}
.form-controls{
    width: 420px;
    height: 40px;
    padding-left: 10px;
}
.form-controls:focus{
    outline: none;
}
.log-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 5px 5px 0px;
    width: 420px;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    background-color: tomato;
    border: none;
    border-radius: 2px;
    color: rgba(240, 248, 255, 0.833);
    margin-bottom: 10px;
}
.log-btn:hover{
    background-color: rgb(240, 87, 60);
}
.log-det{
    font-size: 12px;
}
.log-det a{
    font-size:14px;
    text-decoration: none;
    margin-left: 5px;
}
/*Responsive */
@media (max-width: 930px) {
.log-con{
    display: none;
}
.logInfo{
    display: flex;
    align-items: center;
    justify-content: center;
}
}
@media (max-width: 466px) {
.log-con{
    display: none;
}
.logInfo{
    display: flex;
    align-items: center;
    justify-content: center;
}
.logInfo h2{
    font-size: 20px;
}
.name-details{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
form{
    margin: 0px 10px;
}
.form-control{
    width: 50vh;
}
.form-controls{
    width:50vh;
}
.log-btn{
    width:50vh;
}
}
@media (max-width: 392px) {
    .logInfo h2{
        margin-right: 60px;
    }
    .form-control{
    width: 250px;
    margin-right: 70px; 
    }
    .form-controls{
    width: 250px;
    margin-right: 30px;
}
.log-btn{
    width:40vh;
}
.log-det{
    margin-right: 100px;
}
}

</style>