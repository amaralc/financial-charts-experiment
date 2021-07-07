module.exports = {
  trailingSlash: true,
  //webpack5: true, // (default)
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
};