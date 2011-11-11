$(function() {
  var edit_url = "https://github.com/samwgoldman/samwgoldman.github.com/edit/master" + location.pathname;
  var link = $("<a href='" + edit_url + "'>Edit this page</a>");

  $("article > h2").each(function(index, elem) {
    link.insertAfter(elem);
  });
});
