const publisherController = {
    all_publishers_GET: (req, res) => {
     res.render("publishers", {
      title: "Publishers",
      publishers: publishers,
    });
    },
    add_new_publisher_GET: (req, res) => {
      res.end("Add a new Publisher Page");
    },
    publisher_details_GET: (req, res) => {
      const publisherID = req.params.publisherID;
      res.render("publisher-details", {
        title: "Details",
        publisher: publishers[publisherID],
      });
    },
    publisher_details_POST: (req, res) => {
        res.end("");
      },
  };
  
  module.exports = publisherController;