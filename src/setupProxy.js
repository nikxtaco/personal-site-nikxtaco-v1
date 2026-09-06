const path = require("path");

// Local-dev mirror of the Netlify rewrite in netlify.toml:
//   /resume.pdf  ->  /resume.html  (status 200 / rewrite)
// so the clean /resume.pdf URL works the same on `npm start` as in production.
module.exports = function (app) {
  app.get("/resume.pdf", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "public", "resume.html"));
  });
};
