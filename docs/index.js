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
      sections:[
        {title:"Work Experience", id:"work_experience", items:[
          {name:"Pizza Express", type: "bullet", start: "01/2025", end: "10/2025", location: "Lexicon", address: "The Lexicon, Unit 6D Eagle Ln, Bracknell RG12 1HB", bullets: [
            {content: "blah."}
          ]},
          {name: "Scouting", type: "bullet", start: "", end: "", location: "1st Easthampstead", address: "", bullets:[
            {content: "blah."}
          ]}
        ]}
      ]
    }
  },
  methods: {
    setActive(title) {
      this.activeItem = title;
    }
  }
})

app.mount('#app')