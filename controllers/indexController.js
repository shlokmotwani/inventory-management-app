const indexController = {
    home_page_GET : (req, res) => {
        res.render("index", {title: "Home"});
    }
};

module.exports = indexController;
