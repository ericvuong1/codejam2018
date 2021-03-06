const imageController = require("../controllers/ImagesController");
var multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, 'TEMP_FILE');
  }
});
var upload = multer({ storage: storage })


module.exports = function (app) {

  //--------GET QUOTES WITH IMAGE--------//
  app.post("/api/image", upload.single('image'), function (req, res) {
    imageController.getImageCategory(req.params, result => {
      res.send(result);
    });
  });
};

