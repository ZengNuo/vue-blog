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
  name: 'foot'
}
</script>

<style lang="scss" type="text/css">
#footer {
  position: absolute;
  left: 0;
  bottom: 0;
  color: #aaa;
  width: 18rem;
  padding: 2rem 1rem;
  text-align: center;
  @media screen and (max-width: 600px) {
    position: static;
    text-align: center;
    width: 100%;
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
