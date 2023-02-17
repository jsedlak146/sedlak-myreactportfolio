import aboutpic from "./components/Access/mePhoto.jpeg"

const header = {
  homepage: '',
  title: 'Sedlak Portfolio',
}

//refactoring of body, this is all of the information for my portfolio

const about = {
  photo:aboutpic,
  name: 'Joseph Sedlak',
  role: 'Full Stack Developer',
  description:
    'Monmouth University and Rutgers University graduate with a background in finance, pursuing a career in tech',
  resume: 'https://docs.google.com/document/d/18GQmO7Gj5nAm92gq6SlIifxJQIWFw-yW/edit?usp=sharing&ouid=115316355259387561828&rtpof=true&sd=true',
  social: {
    linkedin: 'https://www.linkedin.com/in/joseph-sedlak/',
    github: 'https://github.com/jsedlak146',
  },
}

const projects = [

  {
    name: 'Travel Planner',
    description:
      'This project was uilt to help people plan their trips.  Similar to TripAdvisor, users can search by their vacation destination and view AirBnbs in the area, as well as local attractions.',
    stack: ['localstorage', 'Openweather API', 'Google Map API','Brewery API', 'AirBnb API'],
    sourceCode: 'https://github.com/jsedlak146/group8-vacationplanner',
    livePreview: 'https://jsedlak146.github.io/group8-vacationplanner/',
  },
  {
    name: 'SmokeQuitter',
    description:
      'We decided to build this app to help users quit smoking.  After logging on, the user can track their progress visually, and is able to enter daily forms to further track their habits and their feelings.',
    stack: ['jawsdb','handlebars','express','nodejs'],
    sourceCode: 'https://github.com/jsedlak146/group7-project2',
    livePreview: 'https://group7-smokequitter.herokuapp.com/',
  },
  {
    name: 'Expense Tracker',
    description:
      'This app was built to help people track their expenses.  It breaks down expenses by category, and also offers graphs and charts to visualize spending and see what your money can do.',
    stack: ['React', 'sequelize', 'MongoDB', 'node'],
    sourceCode: 'https://github.com/BillStephens2022/Expense-Tracker-MERN',
    livePreview: 'https://expense-tracker-mern.herokuapp.com/',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Git',
  'MERN',
  'Heroku'
]

const contact = {
  email: 'jssedlak146@gmail.com',
}

export { header, about, projects, skills, contact }
