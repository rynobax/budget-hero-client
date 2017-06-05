const ghpages = require('gh-pages');

ghpages.publish(
  'dist',
  {
    /*repo: '',
    user: {
      name: 'Ryan Baxley',
      email: 'ryan.baxley1@gmail.com'
    }*/
  },
  function(err) {
    console.error(err);
    process.exit(1);
  }
);