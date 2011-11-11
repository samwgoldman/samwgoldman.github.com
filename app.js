$(function() {
  $("article > h2").each(function(index, elem) {
    var edit_url = "https://github.com/samwgoldman/samwgoldman.github.com/edit/master" + location.pathname;
    $("<a href='" + edit_url + "'>Edit this page</a>").insertAfter(elem);
  });

  $("article .screenshot").each(function(index, elem) {
    var image = $("img", elem)
      .load(function() { image.width(this.width); image.height(this.height); })
      .hide()
      .addClass('modal fade')
      .modal({ "backdrop": true, "keyboard": true });
    $("<a class='btn small'>View screenshot</a>")
      .prependTo(elem)
      .click(function() { image.modal('toggle'); });
  });
});
