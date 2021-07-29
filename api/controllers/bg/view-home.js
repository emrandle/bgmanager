module.exports = {


  friendlyName: 'View home',


  description: 'Display "Home" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/bg/home'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
