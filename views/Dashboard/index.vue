<template>
  <div class="dashboard-container">
    <div class="welcome">Welcome</div>
    <div class="illustrations">
      <img class="one" src="../../assets/img/cloud_sync_2aph.svg" alt />
      <img class="two" src="../../assets/img/swipe_profiles1_i6mr.svg" alt />
      <img class="three" src="../../assets/img/mobile_prototyping_grmd.svg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>
<style lang="scss" scoped>
.dashboard-container {
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .welcome {
    margin-top: 30px;
    font-size: 30px;
  }
  .illustrations {
    margin-top: 100px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    img {
      width: 26%;
    }
    .one {
      transform: rotateZ(-10deg);
    }
    .three {
      transform: rotateZ(10deg);
    }
  }
}
</style>
