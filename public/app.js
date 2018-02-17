$("#scrape").on("click", function(event) {

  $.get("/", function(data) {
    if(data) {
      console.log(data);
    } else {
      console.log("Something went wront when scrapping!");
    }
  });

  // $.get("/api/articles", function(data) {

  //   console.log(data);

  // });

});