$(init);
function init()
{
    $("#resize").resizable();
    $("#tabs").tabs();

    $("div").addClass("ui-widget").addClass("ui-corner-all");
    $(":header").addClass("ui-widget-header").addClass("ui-corner-all");
}

$( function() {
    $( "#drag" ).draggable({ revert: "valid" });
    $( "#drop" ).droppable({
      classes: {
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this );
      }
    });
  });
