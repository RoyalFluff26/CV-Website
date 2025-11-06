const app = Vue.createApp({
  data() {
    return {
      nav_items: [
        {title: "About Me", link: "#about_me"},
        {title: "Work Experience", link: "#work_experience"},
        {title: "Education", link: "#education"},
        {title: "Skills", link: "#skills"},
        {title: "Contact Me", link: "#contact_me"},
      ]
    }
  }
})

app.mount('#app')