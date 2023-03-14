<template>
    <div class="Home">
        <div class="home_container">
        <div class="home_btn">
            <div class="home-details">
                <h1>Discover Products <br>for a life well lived</h1>
                <button><a href="/login">Get Started</a></button>
                <h6>Limited Qualities available</h6>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
    export default{

    }
</script>

<style scoped>
    .Home{
        background: rgba(76,175,80,0.5) url("../assets/site.jpg");
        height: 90vh;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        color:rgb(61, 56, 56);
        
       
    }
    div.home_container{
        background-color: aliceblue;
        opacity:0.8;
        height: 93vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .home-details{
        font-size: 15px;
        font-weight: 100;
        letter-spacing: 2px;
        line-height: 40px;
        padding: 30px;
        width: fit-content;
    }
    button{
        margin-top: 40px;
        height: 50px;
        border: none;
        width: 290px;
        background-color: tomato;
    }
    button a{
        text-decoration: none;
        font-size: 17px;
        letter-spacing:1.5px;
        color: white;
    }
</style>