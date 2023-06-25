import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    aws,
    elasticsearch,
    go,
    java,
    kafka,
    kotlin,
    kubernetes,
    postgres,
    python,
    scala,
    spring_boot,
    sqlite,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    teletrace,
    opentelemetry,
    vmclarity,
    threejs,
    hapoalim,
    one_zero,
    cisco
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    
    {
      id: "work",
      title: "Work",
    },
    {
      id: "media",
      title: "Media",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Engineer",
      icon: web,
    },
    {
      title: "Speaker",
      icon: mobile,
    },
    {
      title: "Mentor",
      icon: creator,
    },
  ];

  const media = [
    {
      title: "NDC Oslo 2023",
      subtitle: "Efficient Learning for Developers: Tips and Strategies",
      src: "https://www.youtube.com/embed/msNjvbKlWRE"
    },
    {
      title: "PlaceIL Volunteering",
      subtitle: "Promotional LinkedIn Video",
      src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7077291748363767808"
    }
  ]
  
  const technologies = [
    // {
    //   name: "git",
    //   icon: git,
    // },
    {
      name: "docker",
      icon: docker,
    },
    // {
    //   name: "aws",
    //   icon: aws,
    // },
    {
      name: "elasticsearch",
      icon: elasticsearch,
    },
    {
      name: "go",
      icon: go,
    },
    {
      name: "java",
      icon: java,
    },
    // {
    //   name: "kotlin",
    //   icon: kotlin,
    // },
    // {
    //   name: "scala",
    //   icon: scala,
    // },
    // {
    //   name: "spring_boot",
    //   icon: spring_boot,
    // },
    {
      name: "kafka",
      icon: kafka,
    },
    {
      name: "kubernetes",
      icon: kubernetes,
    },
    {
      name: "postgres",
      icon: postgres,
    },
    // {
    //   name: "sqlite",
    //   icon: sqlite,
    // },
    // {
    //   name: "python",
    //   icon: python,
    // },
  ];
  
  const experiences = [
    {
      title: "Software engineer",
      company_name: "Cisco",
      icon: cisco,
      iconBg: "#383E56",
      date: "Jan 2022 - Today",
      points: [
        "Led the design and implementation of a highly scalable data pipeline using Kafka, Java, and Scala. Implemented gRPC services in Python and owned the full CI/CD pipeline for Java applications.",
        "Took on a variety of challenges, including quickly learning Golang and React. Refactored the front-end's entire state management to Zustand, resulting in improved reliability and maintainability. Designed and implemented an optimized relational schema for the application's embedded database.",
        "Beyond technical contributions, Had several opportunities to educate and inspire others. by mentoring an intern from an underrepresented group through the 'PlaceIL' project, instructed groups of new employees in the tools and platforms used at the company and delivered several lectures on topics such as Reactive Programming and Learning Strategies"
      ],
    },
    {
      title: "Backend Developer",
      company_name: "One Zero",
      icon: one_zero,
      iconBg: "#E6DEDD",
      date: "June 2021 - January 2022",
      points: [
        "Helped in bringing the bank's massive system to life by developing and owning an important layer implemented in a complex and modern technology stack (Spring Webflux, Kotlin, GraphQL, etc...) deployed on AWS EKS while providing professional and kind assistance to front-end developers and QA",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Hapoalim Bank",
      icon: hapoalim,
      iconBg: "#383E56",
      date: "April 2019 - June 2021",
      points: [
        "2019-2020 - Improved the quality of the bank's new primary application by developing and owning the back-end system while assisting front-end developers passionately and professionally",
        "2020-2021 - Took part in deploying a high quality micro-service cluster that served an important feature of the 'Bit' application by designing, developing and owning modern Java-Spring applications on top of an on-prem Kubernetes cluster while mentoring and assisting fellow developers",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Teletrace",
      description:
        "Teletrace is an open-source distributed tracing system that helps developers monitor and troubleshoot complex distributed systems by providing end-to-end transaction monitoring and tracing across various microservices. Teletrace is built from the ground up for modern applications. It relies on open standards like OpenTelemetry. It is an easy-to-deploy scalable solution, that supports multiple storage options.",
      tags: [
        {
          name: "GoLang",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Elasticsearch",
          color: "pink-text-gradient",
        },
      ],
      image: teletrace,
      source_code_link: "https://github.com/teletrace/teletrace",
    },
    {
      name: "OpenTelemetry",
      description:
        "OpenTelemetry is an observability framework – an API, SDK, and tools that are designed to aid in the generation and collection of application telemetry data such as metrics, logs, and traces",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "gRPC",
          color: "green-text-gradient",
        },
        {
          name: "gradle",
          color: "pink-text-gradient",
        },
      ],
      image: opentelemetry,
      source_code_link: "https://github.com/open-telemetry/opentelemetry-java",
    },
    {
      name: "VMClarity",
      description:
        "VMClarity is an open source tool for agentless detection and management of Virtual Machine Software Bill Of Materials (SBOM) and security threats such as vulnerabilities, exploits, malware, rootkits, misconfigurations and leaked secrets",
      tags: [
        {
          name: "GoLang",
          color: "blue-text-gradient",
        },
        {
          name: "EC2",
          color: "green-text-gradient",
        },
        {
          name: "ClamAV",
          color: "pink-text-gradient",
        },
      ],
      image: vmclarity,
      source_code_link: "https://github.com/openclarity/vmclarity",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, media };