<div class="container-loading">
    <section>
        <div class="loader loader-1">
            <div class="loader-outter"></div>
            <div class="loader-inner"></div>
        </div>
    </section>
</div>
<style>
.container-loading {
    background-color: #000000;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 99999;
    opacity: 0.3;
    display: none;
}

section {
    text-align: center;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 999999;
    top: 50%;
    margin-top: -60px;
}

@media only screen and (max-width: 600px) {
    section {
        min-width: 350px;
    }
}
    
.loader {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 75px;
    display: inline-block;
    vertical-align: middle;
}
/*LOADER-1*/

.loader-1 .loader-outter {
    position: absolute;
    border: 4px solid #ffffff;
    border-left-color: transparent;
    border-bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    -webkit-animation: loader-1-outter 1s cubic-bezier(.42, .61, .58, .41) infinite;
    animation: loader-1-outter 1s cubic-bezier(.42, .61, .58, .41) infinite;
}

.loader-1 .loader-inner {
    position: absolute;
    border: 4px solid #ffffff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    border-right: 0;
    border-top-color: transparent;
    -webkit-animation: loader-1-inner 1s cubic-bezier(.42, .61, .58, .41) infinite;
    animation: loader-1-inner 1s cubic-bezier(.42, .61, .58, .41) infinite;
}

/* ----------------     KEYFRAMES    ----------------- */

@-webkit-keyframes loader-1-outter {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes loader-1-outter {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@-webkit-keyframes loader-1-inner {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(-360deg);
        transform: rotate(-360deg);
    }
}

@keyframes loader-1-inner {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(-360deg);
        transform: rotate(-360deg);
    }
}
</style>