import logoDegree from "./degreeLogo.png";
import logoCiti from "./citiLogo.jpg";
import dscLogo from "./dscLogo.jpg";
import uoftLogo from "./uofTLogo.jpg"
import unhcrLogo from "./unhcrLogo.jpg"
import tedxLogo from "./tedxLogo.png"
import thrLogo from "./thrLogo.png"
export const experienceContent = [
  {
    category: "Industry Experiences",
    items: [
      {
        company: "Software Developer (Technology Analyst), Citi Bank, Canada",
        title: "Citi Bank, Canada",
        period: "2020 Aug - 2021 April",
        logo: logoCiti,
        description: "Joined the Treasury Trade and Securties (TTS) team and played integral role through the following:",
        accomplishments: [
          {
            category:"Reconciliation testing",
            content: [
              {
                point: " Reconciliation testing: Coordinated with local & offshore team to replace a manual process of testing reconciliation results for a database migration to an automated process via integration of an existing testing framework. Involved debugging & working with code written in Java and Gherkin. Automation reduced resources required for testing and increased efficiency for testing team. "
              },
              {
                point: "Skills gained: Debugging testing framework written in Java, high level understanding of reconciliation needs & database migration, collaborating with key stakeholders to gain data required, basic version control via Git & Bitbucket, working with Gherkin, using JIRA to track progress and completion of tasks. "
              }
            ]
          },
          {
            category: "Microservices Project",
            content: [
              {
                point: "Worked on a greenfield project involving breaking up of a monolith application into  microservices.  Wrote microservices using Java SpringBoot and exposed application logic via REST API. Maven was used for package management. Postman was used to preliminary test the API routes and SQLDeveloper was used to check that the database systems were updated correctly in DEV environment. Took the initiative to learn to use an internal Citi DevOps tool in order to set up the CI/CD pipeline and customize it to the needs of the project. This involved learning to set up deployment tool Udeploy, and linking this to an existing OpenShift server to successfully host the microservices on pods. Git & Bitbucket were used for version control, and JIRA was used to coordinate with the wider team."
              },
              {
                point:"Skills Gained: Programming in Java, utilization of Java SpringBoot framework, designing REST API routes, testing with Postman,  deploying code onto the cloud (OpenShift), customizing deployment environment on Udeploy, setting up CI/CD pipeline with an internal tool & Jenkins, navigating SQLDeveloper to query the database, Git & Bitbucket for version control, JIRA "
              }

            ]
          },
          {
            category:"Voted on Steering Committee",
            content: [
              {
                point: "Nominated by peers to be one out of the 2 Software Developer analysts on the Steering Committee to represent the class of the 40 newly hired technology analysts. Worked closely with Program manager and the class to communicate concerns and discuss ideas to improve the program. "
              }
            ]
          }
        ]
      },
      {
        company: "Technology Analyst- Production Support Intern, Citi Bank, Canada",
        title: "Citi Bank, Canada",
        period: "2019 June - 2019 August",
        logo: logoCiti,
        description: "Interned in the Global Spread Products team and helped spearhead the efforts in the following 2 areas:",
        accomplishments: [
          {
            category:"Python Selenium Automation",
            content: [
              {
                point: "Automation of daily manual process of checking if web applications were functioning. This was achieved by coding a Python script that uses Selenium to automate this task, which also generates a daily report emailed out to stakeholders. This project helped speed up the web application checkout process and free up resources that were used for the manual process."
              },
              {
                point: "Skills gained: Programming in Python, Selenium webdriver"
              }
            ]
          },
          {
            category: "Web Dashboard",
            content: [
              {
                point: "Creation of a web dashboard based off the ITRS application to provide a visual representation of the important metrics the team would need. Led the efforts in collecting data needed to design the dashboard through collaboration with various stakeholders, quickly learned to navigate ITRS in order to implement the dashboard and succeeded in publishing this onto the web where it is used by the team to aid in health monitoring of web applications. "
              },
              {
                point:"Skills Gained: Familiarity with ITRS software, working together with various stakeholders from Production Support and Development teams in Missisauga, Canada and New York, USA. "
              }

            ]
          },
          
        ]
      },
      {
        company: "UI Testing Team lead, 180 Degree Consulting, Canada",
        title: "180 Degree Consulting University of Toronto, Canada",
        period: "2017 September - 2018 April",
        logo: logoDegree,
        description: "Hired to lead a team of 6 consultants to work on a project that involved conducting GUI (Graphical User Interface) testing for a redesigned web page for a client.",
        accomplishments: [
          {
            category:"GUI Testing Project",
            content: [
              {
                point: "To conduct our studies, a survey was carried out to gather data related to the usability of the web page. The analysis and findings were presented to the developers of the site alongside with our recommendations on how to tackle the improvements. "
              },
              {
                point: "Skills gained:  Managing a project & team, working with client, data gathering and analysis for UI (User Interface) testing, design considerations for a web page"
              }
            ]
          },          
        ]
      }
    ]
  },
  {
    category:"Other Experiences",
    items:[{
      company:"Teaching Assistant (TA), University of Toronto",
      title:"University of Toronto",
      period: "September 2019- December 2019",
      logo: uoftLogo,
      description:"TA for the undergradate computer science class CSC290 Communication Skills for Computer Scientist taught by Professor Lisa Zhang at the University of Toronto Missisauga",
      accomplishments:[
        {
          category:"Responsibilities:",
          content:[
            {
              point: "Responsible for teaching and grading a tutorial class of 40 undergraduate students. communication skills for computer scientists and project management. Student’s end project involved creating an arcade game (mostly using Pygame), making use of version control (Git), and presenting this to the class.",
            },
            {
              point: "Course website: https://www.cs.toronto.edu/~lczhang/290/team.html",
            },
            {
              point: "Skills used/ gained: Coordination with wider teaching team, facilitating tutorials and providing constructive feedback to students, grading using University of Toronto’s marking tool Markus.",
            }
          ]
        }
      ]
    },
      {
        company:"Marketing, Sales and Guest Service Staff, Toronto Heritage Residences",
        title:"Marketing, Sales and Guest Service Staff",
        period: "May 2018- August 2018",
        logo: thrLogo,
        description:"Hired to manage over 30 short-term stay rentals in downtown Toronto and was responsible for ensuring an overall smooth guest experience.",
        accomplishments:[
          {
            category:"Achievements",
            content:[
              {
                point: "Quickly learned to use the Point of Sale and booking system, worked professionally with the wider hospitality team and created an analysis of financial statistics of the project."
              },
              {
                point: "Skills gained / learned: Customer Service, exposure to hospitality industry"
              }
            ]
          }
        ]
      },
      
    ]
  },
  {
    category:"Volunteering / Community Engagement",
    items:[
      {
        company:"Management Lead, Developers Student Club (DSC)",
        title:"Management Lead",
        period: "2019 September - 2020 April",
        logo: dscLogo,
        description:"Acted as the management lead for the Developer’s Student Club(DSC) at the University of Toronto Mississauga in 2019-2020. DSC is a club backed by Google Developers aimed at helping students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community. ",
        accomplishments:[
          {
            category:"Responsibilities",
            content:[
              {
                point:"Worked with the wider team to help organize and facilitate workshops and events to acheive DSC’s goals. "
                
              },
              {
                point:"Skills gained/used: Social media management, event management"
              },
              {
                point:"Website: https://dscutm.com/ "
              }
            ]
          }
        ]
      },
      {
        company:"Co-lead organizer, TEDxYouth",
        title:"Co-lead organizer",
        period: "2015 September - 2016 April",
        logo: tedxLogo,
        description:"Co-led a team of 25 committee members and a total of 51 crew members to organize the first TEDx event held at Sri KDU International School. ",
        accomplishments:[
          {
            category:"Details:",
            content:[
              {
                point:"TEDx event featured 6 distinguish guest speakers ranging from a debater named as the overall best speaker at the Cambridge University Women’s Debate Open, to a multiple award-wining news editor." 
              },
              {
                point:"Successfully pitched and secured sponsorship from telecommunications company ‘DiGi’ and a partnership with ‘TEDxKL’ and ‘Sri KDU Schools’ to finance this event. "
              },
              {
                point:"Skills gained / used: Financial budgetting, event management"
              },
              {
                point:"Link to talks: https://youtube.com/playlist?list=PLsRNoUx8w3rMXMtsZC93fv0xjYPwq39IF "
              }
            ]
          }
        ]
      },
      {
        company:"Volunteer Teacher, UNHCR: Refugee Volunteer Teacher",
        title:"Volunteer Teacher ",
        period: "2014 September - 2015 April",
        logo: unhcrLogo,
        description:"In charge of teaching and creating learning materials for a class of Burmese refugee first graders attending a school managed by the UNHCR (The UN Regufee Agency) Malaysia. ",
        accomplishments:[
          {
            category:"Details:",
            content:[
              {
                point:"Lessons were conducted once a week and were in accordance to the wider syllabus. "
              },
              {
                point:"Skills learned/ gained: Classroom management, experience working with younger children"
              }
            ]
          }
        ]
      }
    ]
  }
];
