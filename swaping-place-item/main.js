
function moveUp () {
    $('#btn-up').click(function () {
      $('p:first').before($('p:last'))
    });
}
function moveDown () {
    $('#btn-down').click(function () {
        $('p:last').after($('p:first'))
  });
}
moveDown(); moveUp();