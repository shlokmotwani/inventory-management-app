const publisherController = {
    all_publishers_GET: (req, res) => {
      res.end("Publishers Page");
    },
    add_new_publisher_GET: (req, res) => {
      res.end("Add a new Publisher Page");
    },
    publisher_details_GET: (req, res) => {
      res.end("Single Publisher Page");
    },
    publisher_details_POST: (req, res) => {
        res.end("");
      },
  };
  
  module.exports = publisherController;