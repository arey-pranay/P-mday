module.exports = {
  files: ["./src/index.html"],
  server: {
    baseDir: "./src",
  },
  middleware: [
    function (_req, res, next) {
      res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
      res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");

      next();
    },
  ],
};
