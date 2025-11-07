const app = Vue.createApp({
  data() {
    return {
      activeItem: "About Me",
      nav_items: [
        {title: "About Me", link: "#about_me"},
        {title: "Work Experience", link: "#work_experience"},
        {title: "Education", link: "#education"},
        {title: "Skills", link: "#skills"},
        {title: "Contact Me", link: "#contact_me"},
      ],
    }
  },
  methods: {
    setActive(title) {
      this.activeItem = title;
    }
  }
})

app.mount('#nav')