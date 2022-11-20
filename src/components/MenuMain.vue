<template>
  <section class="menu-main">
    <div class="menu-main_header">
      <img class="menu-main_header-avatar" src="../assets/avatar.svg" alt="avatar"/>
      <div class="menu-main_header_title">
        <h3 class="menu-main_header_title_lg">Igor Chelyshkin</h3>
        <span class="menu-main_header_title_sm">Software, DevOps engineer</span>
      </div>
    </div>

    <nav class="menu-main_nav">
      <a class="menu-main_nav_txt" v-smooth-scroll href="#about">About</a>
      <a class="menu-main_nav_txt" v-smooth-scroll href="#experience">Experience</a>
      <a class="menu-main_nav_txt" v-smooth-scroll href="#skills">Skills</a>
      <a class="menu-main_nav_txt" v-smooth-scroll href="#contact">Contact</a>
    </nav>

    <nav class="menu-main_social">
      <a class="menu-main_nav_icon" href="https://github.com/mr-chelyshkin">
        <img class="menu-main_social_icon" src="../assets/social_icons/github.svg" alt="github"/>
      </a>
      <a class="menu-main_nav_icon" href="https://twitter.com/mr_chelyshkin">
        <img class="menu-main_social_icon" src="../assets/social_icons/twitter.svg" alt="twitter"/>
      </a>
      <a class="menu-main_nav_icon" href="https://www.linkedin.com/in/mr-chelyshkin">
        <img class="menu-main_social_icon" src="../assets/social_icons/linkedin.svg" alt="linkedin"/>
      </a>
      <a class="menu-main_nav_icon" href="https://leetcode.com/mr_chelyshkin/">
        <img class="menu-main_social_icon" src="../assets/social_icons/leetcode.svg" alt="leetcode"/>
      </a>
      <a class="menu-main_nav_icon" href="https://t.me/mr_igoss">
        <img class="menu-main_social_icon" src="../assets/social_icons/telegram.svg" alt="telegram"/>
      </a>
    </nav>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuMain",
})
</script>

<style>
  .menu-main{
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    display: flex;
    width: 20%;


    background-color: #181818;
    color: #fff;
    height: 100%;
  }
  .menu-main_header {
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    display: flex;
  }
  .menu-main_header-avatar{
    border: 5px solid #f7f7f7;
    border-radius: 100px;

    width: 140px;
    height: 135px;
  }
  .menu-main_header_title{
    flex-direction: column;
    align-items: center;
    text-align: center;
    display: flex;
  }
  .menu-main_header_title_sm{
    text-align: center;
  }
  .menu-main_nav{
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    display: flex;
  }
  .menu-main_nav_txt{
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    color: #f7f7f7;

    padding: 8px;
    width: 100%;
  }
  .menu-main_social{
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    display: flex;
  }
  .menu-main_social_icon{
    width: 32px;
  }
  .menu-main_nav_icon{
    padding: 8px;
  }
  .menu-main_nav_txt:hover{
    color: #f1fd0f;
    transition: .5s;
  }

  @media (max-width: 1200px) {
    .menu-main_header-avatar{
      width: 115px;
      height: 110px;
    }
    .menu-main_social_icon {
      width: 24px;
    }
  }
  @media (max-width: 1024px) {
    .menu-main{
      justify-content: space-between;
      flex-direction: row;

      padding: 12px;
      height: 400px;
      width: calc(100% - 24px);
    }
    .menu-main_header-avatar{
      border: 2px solid #f7f7f7;

      width: 48px;
      height: 48px;
    }
    .menu-main_header_title{
      align-items: flex-start;
      padding-left: 12px
    }
    .menu-main_header_title_lg{
      margin: 0;
    }
    .menu-main_header_title_sm{
      text-align: left;
    }

    .menu-main_header{
      flex-direction: row;
    }
    .menu-main_nav{
      flex-direction: row;
    }
  }

  @media (max-width: 930px) {
    .menu-main_nav{
      display: none;
    }
  }
  @media (max-width: 930px) {
    .menu-main_header{
      display: none;
    }
    .menu-main{
      justify-content: center;
    }
  }
</style>