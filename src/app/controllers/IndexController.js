class IndexController {
  index(req, res) {
    return res.json({
      message: 'Hello from controller',
    });
  }
}

module.exports = new IndexController();
