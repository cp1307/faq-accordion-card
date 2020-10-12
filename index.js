var count = 1;
var quesId ;
var ansId ;
var prevId;

$(".question").click(function(event) {
  if (count !== 1)
  {toToggle(quesId , ansId);}
  prevId = quesId;
  quesId = this.id;
  if(prevId === quesId) {
    toggle(prevId,ansId);
  }
  ansId = quesId.slice(quesId.length - 1, quesId.length);
  $("#" + quesId).addClass("question-active");
  $("#answer" + ansId).removeClass("answer").addClass("answer-active");
  count = count +1;

});

function toToggle(quesId,ansId) {
  $("#" + quesId).removeClass("question-active");
  $("#answer" + ansId).removeClass("answer-active")
  $("#answer" + ansId).addClass("answer");
}
