import Mock from "../mock";

const database = {
  information: {
    name: 'Tedros Kiros',
    aboutContent: "Motivated, creative, resourceful, and versatile Software Engineer experienced in Agile software development and systems. With knowledge of various programming languages, I am looking for an opportunity to further utilize my skills in a growth-oriented position within the tech industry.Created web applications from the ground up, including requirements. ",
    phone: '+1 507-329-0167',
    nationality: 'GreenCard',
    language: 'English,Tigrgna, Amharic',
    email: 'teddykiros123@gmail.com',
    address: 'seattle, Washington, USA',
    freelanceStatus: 'Yes',
    socialLinks: {
      facebook: '',
      twitter: '',
      youtube:'',
      pinterest: '',
      behance: '',
      linkedin: '',
      dribbble: '',
      github: 'https://github.com/tedros100'
    },
    brandImage: '/images/teddy.jpg',
    aboutImage: '/images/teddy.jpg',
    aboutImageLg: '/images/teddy.jpg',
    cvfile: ''
  },
  services: [
    {
      title: "Front end Development",
      icon: 'color-pallet',
      details: "Familarity with ReactJs,HTML,CSS,Sass,nextJs...."
    },
    {
      title: "Backend Development",
      icon: 'code',
      details: "Strong understanding of Nodejs| expressJs | Spring boot | .NET | "
    },
    {
      title: "CoreJava",
      icon: 'mobile',
      details: "Strong understing in corejava and oops concepts"
    }
  ],
  reviews: [
    {
      id: 1,
      content: "",
      author: {
        name: '',
        designation: ''
      }
    },
    {
      id: 2,
      content: "",
      author: {
        name: '',
        designation: ''
      }
    },
    {
      id: 3,
      content: "",
      author: {
        name: '',
        designation: ''
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Sass",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "CoreJava",
      value: 90
    },
    {
      title: "ReactJS",
      value: 95
    },
    {
      title: "NodeJS",
      value: 75
    },
    {
      title: "GIT",
      value: 95
    },
    {
      title: "Postman",
      value: 95
    },
    {
      title: "SQL",
      value: 95
    },
    {
      title: "Agile/SCRUM Methodology",
      value: 95
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "",
      subtitle: "",
      imageUrl: "",
      largeImageUrl: [""],
      url: ''
    },
    {
      id: 2,
      title: "Netflix Clone",
      subtitle: "Front end using ReactJS",
      imageUrl: "/images/netflix.PNG",
      largeImageUrl: [
        "/images/netflix.PNG",
        "/images/netflix.PNG"
      ],
      url: 'https://netflix-25d49.web.app'
    },
    {
      id: 3,
      title: "",
      subtitle: "",
      imageUrl: "",
      url: ''
    },
    {
      id: 4,
      title: "",
      subtitle: "",
      imageUrl: "",
      largeImageUrl: [""],
      url: ""
    }
    
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "July 2021 -  Current",
        position: "front end mentor ",
        company: "Insighttech LLC, USA",
        details: "Developed and maintained multiple front-end projects using, React, and trained students."
      },
      {
        id: 2,
        year: "",
        position: "",
        company: "",
        details: " "
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2012 - 2017 evaluated to USA equivalence in 2019 ",
        graduation: " Bachelor's degree",
        university: "Ethiopia Institute of Techonology (Mekelle University)",
        details: " "
      }

    ]
  },
  contactInfo: {
    phoneNumbers: [ '+1 507-329-0167'],
    emailAddress: ['teddykiros123@gmail.com'],
    address: "seattle, Washington, 98125, USA"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});