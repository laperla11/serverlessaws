var express = require('express');
var bodyParser = require('body-parser');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.post('/jobs', function (req, res) {
  const search = req.body.search ? req.body.search : 'react';
  const jobs = [
    {
      id: '010f8467-ceb4-421f-9262-4dc8521644ce',
      type: 'Full Time',
      url:
        'https://jobs.github.com/positions/010f8467-ceb4-421f-9262-4dc8521644ce',
      created_at: 'Fri Apr 24 20:44:12 UTC 2020',
      company: 'Citizens Bank',
      company_url: 'https://www.citizensbank.com/',
      location: 'Johnston, RI',
      title: 'Platform Engineer',
      description:
        "<p>We are looking for a Digital Site Reliability Engineering Leader (Platform Engineer) that will drive a team that transforms the way Citizens Bank implements, deploys, supports and operates our digital platform. The focus is on enabling engineering teams with expert guidance and tools to deliver frequent, high quality and reliable components as part of our digital platform. This role would also set strategy and lead our evolution to a continuous delivery world.</p>\n<p>This person would also manage, guide and educate a fixed and a rotating group of platform developers on security, automation, and cloud architecture/technology. This person will work closely with security, Infrastructure, Risk, Middleware, and other areas of the company to ensure continuous delivery and DevOps are influenced throughout the value chain.</p>\n<p>Primary responsibilities include:</p>\n<p>Software Delivery</p>\n<ul>\n<li>Contribute to application code base and architecture with a focus on optimization for performance, reliability, scalability, security and cost</li>\n<li>Develop and implement solutions for non-functional requirements using with a focus on broad re-use across system components</li>\n<li>Implement CI/CD best practices, deployment pipelines and test automation frameworks to enable frequent, high quality releases</li>\n<li>Define and implement application deployment strategy based on application type</li>\n</ul>\n<p>Operations</p>\n<ul>\n<li>Guide, grow and train agile engineering teams to optimize service quality and ensure adoption of operational best practices</li>\n<li>Ensure the effective capture of application telemetry, logging and monitoring of all aspects of system and application behavior to facilitate fast detection and resolution of issues</li>\n<li>Design and develop operational tools and services needed to effectively operate system components</li>\n<li>Understanding and adherence to operational processes ensuring audit-ability, risk and compliance with ISO and industry standards (includes Incident, Problem and Change Management)</li>\n<li>Continually evaluate service and infrastructure usage to effectively manage performance, capacity and cost – automating solutions wherever possible</li>\n<li>Participate as a member of the SRE community to develop tools and services that enable automated operations</li>\n</ul>\n<p>Support</p>\n<ul>\n<li>Contribute to documentation required to guide on-call engineers and on-board team members</li>\n<li>Maintain system wide health and proactively seek out potential issues, address with component teams</li>\n<li>Proactively and continuously drive system wide quality improvements by undertaking thorough root cause analysis for major incidents with component engineering teams</li>\n<li>Provide training and coaching in a capacity as Subject Matter Expert to other engineers</li>\n</ul>\n<p>Qualifications</p>\n<p>Required Skills/Experience:</p>\n<ul>\n<li>Required experience in a continuous delivery model similar role at an organization that has adopted the SRE model</li>\n<li>Background in production operations and support at scale with a proven track record of maintaining highly available and performant platforms</li>\n<li>Experienced in programming and scripting languages to contribute to application development and automation (e.g., Java, Node.js Python)</li>\n<li>Experienced in AWS Cloud formation and Hashicorp Terraform</li>\n<li>Some practical knowledge of container solutions (e.g., Docker, Kubernetes,)</li>\n<li>Experience with source Control Systems (e.g., GIT/Gerrit)</li>\n<li>Experience with tools and platforms like (e.g., Jenkins, Maven, Nexus)</li>\n<li>Usage of test frameworks like (e.g., JMeter, Cucumber, Selenium)</li>\n<li>Hands on working knowledge of deployment pipelines for languages like (e.g., Node.js, Java, Springboot)</li>\n<li>Security best practices (SSH, Certificate management, or standards such as PCI)</li>\n<li>Excellent debugging / problem solving skills including ability to investigate and remedy software bugs if necessary</li>\n<li>Preferably experienced with Infrastructure as a Service/Cloud computing (e.g., Amazon AWS, Google Compute Engine, etc.)</li>\n</ul>\n<p>Education, Certifications and/or Other Professional Credentials:</p>\n<ul>\n<li>Bachelor's degree required</li>\n</ul>\n<p>Hours &amp; Work Schedule</p>\n<p>Hours per Week:  40\nWork Schedule:  M-F</p>\n<p>Why Work for Us</p>\n<p>At Citizens, you'll find a customer-centric culture built around helping our customers and giving back to our local communities. When you join our team, you are part of a supportive and collaborative workforce, with access to training and tools to accelerate your potential and maximize your career growth.</p>\n<p>Equal Employment Opportunity</p>\n<p>It is the policy of Citizens Bank to provide equal employment and advancement opportunities to all colleagues and applicants for employment without regard to race, color, ethnicity, religion, gender, pregnancy/childbirth, age, national origin, sexual orientation, gender identity or expression, disability or perceived disability, genetic information, citizenship, veteran or military status, marital or domestic partner status, or any other category protected by federal, state and/or local laws.</p>\n<p>Equal Employment and Opportunity Employer/Disabled/Veteran</p>\n<p>Citizens Bank is a brand name of Citizens Bank, N.A. and each of its respective subsidiaries.</p>\n",
      how_to_apply:
        '<p>Apply at <a href="https://jobs.citizensbank.com/job/johnston/platform-engineer/288/16034631">https://jobs.citizensbank.com/job/johnston/platform-engineer/288/16034631</a></p>\n',
      company_logo:
        'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbXlDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--844398340e68d429e675880c6588b46fc33c05b3/Citizens%20Bank%20logo-16735-18280.png',
    },
    {
      id: 'a6ec7302-239b-4149-be8c-8817509c827e',
      type: 'Full Time',
      url:
        'https://jobs.github.com/positions/a6ec7302-239b-4149-be8c-8817509c827e',
      created_at: 'Mon Apr 20 12:49:10 UTC 2020',
      company: 'PwC',
      company_url: 'http:',
      location: 'Amsterdam',
      title: 'Front End Developer',
      description:
        '<h2>Welcome to PwC’s Experience Center</h2>\n<p>As part of an international community of creators, makers and innovators you drive the business of PwC’s digital services from our Experience Center. In cross-functional teams, you design and build innovative solutions for our clients to thrive in the ‘experience age’.</p>\n<p>Many of our clients face significant challenges - expectations of their customers and employees change faster than they can adapt. At the same time, new market entrants cause significant disruption, and steal market share away. To tackle these challenges, our clients require a partner that can help them innovate and accelerate the implementation of solutions that have an immediate and differentiating impact on the experience provided to their customer or employees.</p>\n<p>The Experience Center is part of a multinational European team, closely collaborating with colleagues across offices in Amsterdam, Brussels, Paris, Frankfurt, Berlin and Stockholm to name a few.</p>\n<p>For more information about the Experience Center take a look on the following page.</p>\n<h2><em>Who are you?</em></h2>\n<p>To have a differentiating impact on our clients’ customers and their employees, you will be user-centric in your thinking and approach. You are passionate about designing delightful experiences for humans, to empower and enable them.</p>\n<p>You know how to effectively work in cross-functional, agile teams. You are a digital native, creative in everything you do, you are confident, and you dare to challenge the status quo.</p>\n<p>We would love to hear from you if you meet most of the following expectations:</p>\n<ul>\n<li>You have multiple years of experience in software development and you love to code;</li>\n<li>You’ve been doing responsive web development for years and have an eye for great UI / UX design;</li>\n<li>You have a lot of experience working with frontend technologies like HTML, CSS and JavaScript;</li>\n<li>You have worked with CSS preprocessors like Sass/SCSS and understand CSS naming conventions;</li>\n<li>You work with modern frontend tools and follow industry standard best practices;</li>\n<li>You have knowledge programming using modern JavaScript/ES and frameworks like React;</li>\n<li>You are comfortable working within a node.js environment;</li>\n<li>You have managed code repositories using Git version control;</li>\n<li>You bring an agile mind-set, you are interested in learning to work with CI/CD, Docker;</li>\n<li>You have a proactive, goal-oriented, reliable and self-structured way of working;</li>\n<li>You are a team player, are open-minded, and are highly engaged and invested. You love to learn and try-out new technologies.</li>\n</ul>\n<h2><em>What do we offer?</em></h2>\n<p>Working at PwC means working with a range of customers and inspirational colleagues under extensive employment conditions that have been put together with due consideration for your future growth and a flexible approach to work and life. You will be part of a fast growing and high performing team. We invest heavily in our teams and individuals, and help you develop deep specialist capabilities. Most importantly, we offer you the freedom to pursue your passion, and have an impact on the life of others. Some of our key employee benefits include:</p>\n<ul>\n<li>You’ll be part of an international consulting firm where people are lead by its values and inspired by our purpose;</li>\n<li>An open and collaborative working atmosphere, where we encourage everyone to provide and receive feedback;</li>\n<li>A knowledge-drive organization where you can learn from, and grow into, a top specialist;</li>\n<li>Flexible working arrangements;</li>\n<li>You’ll get great training opportunities;</li>\n<li>The opportunity to contribute to Corporate Responsibility, diversity, innovation and / or recruitment;</li>\n<li>Multicultural team with a strong growth ambition;</li>\n<li>A lot of coaching and an eye for your personal development;</li>\n<li>Excellent primary and secondary employment conditions, including Macbook, iPhone;</li>\n</ul>\n<h2>Apply now!</h2>\n<p>Are you interested in this vacancy and do you meet the requirements? Apply directly by clicking the <a href="https://vonq.io/2wWdKq8">this link!</a></p>\n',
      how_to_apply:
        '<p><a href="https://vonq.io/2wWdKq8">Click here to apply!</a></p>\n',
      company_logo:
        'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDJDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--50811fc061c474af63e330cecb3816fa715049ff/PWC.jpeg',
    },
  ];
  res.json({ success: 'get call succeed!', url: search, jobs });
});

app.get('/coins', function (req, res) {
  const coins = [
    {
      id: '90',
      symbol: 'BTC',
      name: 'Bitcoin',
      nameid: 'bitcoin',
      rank: 1,
      price_usd: '8859.18',
      percent_change_24h: '14.75',
      percent_change_1h: '1.57',
      percent_change_7d: '27.37',
      price_btc: '1.00',
      market_cap_usd: '162519985114.38',
      volume24: 41573740191.4749298095703125,
      volume24a: 24626048647.7288818359375,
      csupply: '18344809.00',
      tsupply: '18344809',
      msupply: '21000000',
    },
    {
      id: '80',
      symbol: 'ETH',
      name: 'Ethereum',
      nameid: 'ethereum',
      rank: 2,
      price_usd: '216.38',
      percent_change_24h: '10.41',
      percent_change_1h: '0.20',
      percent_change_7d: '23.13',
      price_btc: '0.024537',
      market_cap_usd: '23945871499.18',
      volume24: 19441787768.0318603515625,
      volume24a: 13921150003.430450439453125,
      csupply: '110667126.00',
      tsupply: '110667126',
      msupply: '',
    },
    {
      id: '58',
      symbol: 'XRP',
      name: 'XRP',
      nameid: 'ripple',
      rank: 3,
      price_usd: '0.227478',
      percent_change_24h: '7.69',
      percent_change_1h: '0.03',
      percent_change_7d: '22.44',
      price_btc: '0.000026',
      market_cap_usd: '9760973617.46',
      volume24: 2304209340.47113037109375,
      volume24a: 1921755142.407165050506591796875,
      csupply: '42909539227.00',
      tsupply: '99991841593',
      msupply: '100000000000',
    },
    {
      id: '518',
      symbol: 'USDT',
      name: 'Tether',
      nameid: 'tether',
      rank: 4,
      price_usd: '1.00',
      percent_change_24h: '0.12',
      percent_change_1h: '-0.07',
      percent_change_7d: '-0.02',
      price_btc: '0.000114',
      market_cap_usd: '6367227371.84',
      volume24: 54176530663.63460540771484375,
      volume24a: 33052722101.461956024169921875,
      csupply: '6361032509.00',
      tsupply: '6361032509',
      msupply: '',
    },
    {
      id: '2321',
      symbol: 'BCH',
      name: 'Bitcoin Cash',
      nameid: 'bitcoin-cash',
      rank: 5,
      price_usd: '260.54',
      percent_change_24h: '8.96',
      percent_change_1h: '0.71',
      percent_change_7d: '16.79',
      price_btc: '0.029545',
      market_cap_usd: '4791238409.85',
      volume24: 3393581926.1738834381103515625,
      volume24a: 2314140641.920996189117431640625,
      csupply: '18389902.00',
      tsupply: '18389902',
      msupply: '21000000',
    },
    {
      id: '33234',
      symbol: 'BCHSV',
      name: 'Bitcoin SV',
      nameid: 'bitcoin-cash-sv',
      rank: 6,
      price_usd: '208.42',
      percent_change_24h: '6.92',
      percent_change_1h: '0.47',
      percent_change_7d: '11.94',
      price_btc: '0.023634',
      market_cap_usd: '3832484128.99',
      volume24: 1781842240.146403789520263671875,
      volume24a: 1274910286.37128448486328125,
      csupply: '18388590.00',
      tsupply: '21000000',
      msupply: '21000000',
    },
  ];

  res.json({ success: 'get call succeed!', url: req.url, coins });
});

app.get('/people', function (req, res) {
  // Add your code here
  const people = [
    {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      gender: 'male',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/',
        'http://swapi.dev/api/films/6/',
      ],
      species: [],
      vehicles: [
        'http://swapi.dev/api/vehicles/14/',
        'http://swapi.dev/api/vehicles/30/',
      ],
      starships: [
        'http://swapi.dev/api/starships/12/',
        'http://swapi.dev/api/starships/22/',
      ],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      url: 'http://swapi.dev/api/people/1/',
    },
    {
      name: 'C-3PO',
      height: '167',
      mass: '75',
      hair_color: 'n/a',
      skin_color: 'gold',
      eye_color: 'yellow',
      birth_year: '112BBY',
      gender: 'n/a',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/',
        'http://swapi.dev/api/films/4/',
        'http://swapi.dev/api/films/5/',
        'http://swapi.dev/api/films/6/',
      ],
      species: ['http://swapi.dev/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:10:51.357000Z',
      edited: '2014-12-20T21:17:50.309000Z',
      url: 'http://swapi.dev/api/people/2/',
    },
    {
      name: 'R2-D2',
      height: '96',
      mass: '32',
      hair_color: 'n/a',
      skin_color: 'white, blue',
      eye_color: 'red',
      birth_year: '33BBY',
      gender: 'n/a',
      homeworld: 'http://swapi.dev/api/planets/8/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/',
        'http://swapi.dev/api/films/4/',
        'http://swapi.dev/api/films/5/',
        'http://swapi.dev/api/films/6/',
      ],
      species: ['http://swapi.dev/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:11:50.376000Z',
      edited: '2014-12-20T21:17:50.311000Z',
      url: 'http://swapi.dev/api/people/3/',
    },
    {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      hair_color: 'none',
      skin_color: 'white',
      eye_color: 'yellow',
      birth_year: '41.9BBY',
      gender: 'male',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/',
        'http://swapi.dev/api/films/6/',
      ],
      species: [],
      vehicles: [],
      starships: ['http://swapi.dev/api/starships/13/'],
      created: '2014-12-10T15:18:20.704000Z',
      edited: '2014-12-20T21:17:50.313000Z',
      url: 'http://swapi.dev/api/people/4/',
    },
    {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '19BBY',
      gender: 'female',
      homeworld: 'http://swapi.dev/api/planets/2/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/',
        'http://swapi.dev/api/films/6/',
      ],
      species: [],
      vehicles: ['http://swapi.dev/api/vehicles/30/'],
      starships: [],
      created: '2014-12-10T15:20:09.791000Z',
      edited: '2014-12-20T21:17:50.315000Z',
      url: 'http://swapi.dev/api/people/5/',
    },
    {
      name: 'Owen Lars',
      height: '178',
      mass: '120',
      hair_color: 'brown, grey',
      skin_color: 'light',
      eye_color: 'blue',
      birth_year: '52BBY',
      gender: 'male',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/5/',
        'http://swapi.dev/api/films/6/',
      ],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:52:14.024000Z',
      edited: '2014-12-20T21:17:50.317000Z',
      url: 'http://swapi.dev/api/people/6/',
    },
    {
      name: 'Beru Whitesun lars',
      height: '165',
      mass: '75',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'blue',
      birth_year: '47BBY',
      gender: 'female',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/5/',
        'http://swapi.dev/api/films/6/',
      ],
      species: [],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:53:41.121000Z',
      edited: '2014-12-20T21:17:50.319000Z',
      url: 'http://swapi.dev/api/people/7/',
    },
    {
      name: 'R5-D4',
      height: '97',
      mass: '32',
      hair_color: 'n/a',
      skin_color: 'white, red',
      eye_color: 'red',
      birth_year: 'unknown',
      gender: 'n/a',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: ['http://swapi.dev/api/films/1/'],
      species: ['http://swapi.dev/api/species/2/'],
      vehicles: [],
      starships: [],
      created: '2014-12-10T15:57:50.959000Z',
      edited: '2014-12-20T21:17:50.321000Z',
      url: 'http://swapi.dev/api/people/8/',
    },
    {
      name: 'Biggs Darklighter',
      height: '183',
      mass: '84',
      hair_color: 'black',
      skin_color: 'light',
      eye_color: 'brown',
      birth_year: '24BBY',
      gender: 'male',
      homeworld: 'http://swapi.dev/api/planets/1/',
      films: ['http://swapi.dev/api/films/1/'],
      species: [],
      vehicles: [],
      starships: ['http://swapi.dev/api/starships/12/'],
      created: '2014-12-10T15:59:50.509000Z',
      edited: '2014-12-20T21:17:50.323000Z',
      url: 'http://swapi.dev/api/people/9/',
    },
    {
      name: 'Obi-Wan Kenobi',
      height: '182',
      mass: '77',
      hair_color: 'auburn, white',
      skin_color: 'fair',
      eye_color: 'blue-gray',
      birth_year: '57BBY',
      gender: 'male',
      homeworld: 'http://swapi.dev/api/planets/20/',
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/',
        'http://swapi.dev/api/films/4/',
        'http://swapi.dev/api/films/5/',
        'http://swapi.dev/api/films/6/',
      ],
      species: [],
      vehicles: ['http://swapi.dev/api/vehicles/38/'],
      starships: [
        'http://swapi.dev/api/starships/48/',
        'http://swapi.dev/api/starships/59/',
        'http://swapi.dev/api/starships/64/',
        'http://swapi.dev/api/starships/65/',
        'http://swapi.dev/api/starships/74/',
      ],
      created: '2014-12-10T16:16:29.192000Z',
      edited: '2014-12-20T21:17:50.325000Z',
      url: 'http://swapi.dev/api/people/10/',
    },
  ];
  res.json({ success: 'get call succeed!', url: req.url, people });
});

/**********************
 * Example get method *
 **********************/

app.get('/item', function (req, res) {
  // Add your code here
  res.json({ success: 'get call succeed!', url: req.url });
});

app.get('/item/*', function (req, res) {
  // Add your code here
  res.json({ success: 'get call succeed!', url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post('/item', function (req, res) {
  // Add your code here
  res.json({ success: 'post call succeed!', url: req.url, body: req.body });
});

app.post('/item/*', function (req, res) {
  // Add your code here
  res.json({ success: 'post call succeed!', url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put('/item', function (req, res) {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body });
});

app.put('/item/*', function (req, res) {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete('/item', function (req, res) {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url });
});

app.delete('/item/*', function (req, res) {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url });
});

app.listen(3000, function () {
  console.log('App started');
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
