<template>
  <div class="area">
    <ul class="circles">
      <li><Icon name="docker" :dev="true" class="text-2xl"/></li>
      <li><Icon name="vuejs" :dev="true" class="text-4xl"/></li>
      <li><Icon name="figma" :dev="true" class="text-xl"/></li>
      <li><Icon name="react" :dev="true" class="text-2xl"/></li>
      <li><Icon name="googlecloud" :dev="true" class="text-xl"/></li>
      <li><Icon name="html5" :dev="true" class="text-3xl"/></li>
      <li><Icon name="css3" :dev="true" class="text-xl"/></li>
      <li><Icon name="javascript" :dev="true" class="text-4xl"/></li>
      <li><Icon name="github" :dev="true" class="text-4xl"/></li>
      <li><Icon name="dev" :dev="true" class="text-2xl"/></li>
    </ul>
  </div>
</template>

<script>
export default {
name: "AnimatedBackground"
}
</script>

<style lang="scss" scoped>
.area {
  width: 100%;
  height: 100%;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: rgba(49,38,62,0.4);
  text-shadow: black;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  /*background: var(--color-primary);*/
  animation: animate 25s ease-in-out infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}


@keyframes animate {

  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }

}
</style>
