module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `        
          @import "@/assets/scss/_variables.scss";        
          @import "@/assets/scss/_modal.scss";
        `
      }        
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        logLevel: "debug",
      },  
    }
  } 
}