<template>
  <footer id='footer'>
    <p>
      <strong>ZengNuo</strong> &copy; 2019 All Rights Reserved.
    </p>
    <p>
      Theme Design by
      <a href='https://github.com/Showfom/Affinity'>Affinity</a>.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="scss" type="text/css">
#footer {
  position: absolute;
  bottom: 0rem;
  color: #aaa;
  padding: 2rem;
  text-align: center;
  @media screen and (max-width: 600px) {
    position: static;
    text-align: center;
  }
  p {
    font-size: 12px;
    line-height: 20px;
    a {
      color: #777;
      :hover {
        color: #aaa;
      }
    }
  }
}
</style>
