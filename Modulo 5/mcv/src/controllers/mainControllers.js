const path = require('path');


let mainController = {
    home: (req, res) => res.render(path.resolve(__dirname,"../views/home.ejs"))
}

module.exports = mainController;