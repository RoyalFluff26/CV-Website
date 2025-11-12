const about_me_content = "A well-structured and organized individual with past experience of working both on behalf of the customer and also in a technical background. Seven years' voluntary work with the Scouting Association have developed my problem-solving, teamworking, and leadership skills, and working for Pizza Express and BAE has developed my pressure management, time management, and high service and accuracy standards. I am currently seeking a challenging role to apply these skills in a fulfilling career where I can further enhance and contribute to an organisation."

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
        {title:"About Me", id:"about_me", items:[
          {type:"paragraph", paragraphs:[
            {content:about_me_content}
          ]}
        ]},
        {title:"Work Experience", id:"work_experience", items:[
          {name:"BAE Systems", type: "bullet", start: "09/2025", end: "Expected - 02/2026", location: "Frimley", address: "Victory Point, Frimley, Camberley GU16 7EX", bullets: [
            {content: "blah."}
          ]},
          {name: "Scouting", type: "bullet", start: "04/2013", end: "Ongoing", location: "1st Easthampstead Scout Group", address: "Wildridings Rd, Bracknell RG12 7WP", bullets:[
            {content: "blah."}
          ]},
          {name:"Pizza Express", type: "bullet", start: "01/2025", end: "10/2025", location: "Lexicon", address: "The Lexicon, Unit 6D Eagle Ln, Bracknell RG12 1HB", bullets: [
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