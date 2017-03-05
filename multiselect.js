"use strict";

$(".multiselect").each (function () {
var $self = $(this);
var $choices = $self.find (".choices");
var $values = $self.find (".values");

var choices_selection = keyboardNavigation ($choices);
var values_selection = keyboardNavigation  ($values);

$choices.on ("click", function (e) {
addValue (choices_selection());
choices_selection().focus();
update ();
return false;
});

$values.on ("click", function (e) {
removeValue (values_selection());
values_selection().focus();
update ();
return false;
});

$self.on ("keydown", ".choices, .values", function (e) {
var key = e.key || e.which || e.keyCode;
var $node;

if (key === "Enter" || key === " ") {
$(e.currentTarget).trigger ("click");
return false;
} // if

return true;
});


/// helpers

function update () {
status ($values.children().length + " items selected");
} // update


function addValue ($node) {
//debug ("addValue: ", $node[0].nodeName, $node.text());
$node = $node.detach();
$values.append ($node);
choices_selection ($choices.children().first());
values_selection ($node);
return $node.text();
} // addValue

function removeValue ($node) {
$node = $node.detach();
$node.removeAttr("tabindex");
$choices.append ($node);
choices_selection ($node);
values_selection ($values.children().first());
return $node.text();
} // removeValue

function update () {
$choices.trigger("change");
$values.trigger("change");
statusMessage ($values.children().length + " items selected");
} // update

function statusMessage (message) {
var $status = $(".status", $self);
if ($status.length === 0) $status = $("#status");

$status.html("").text(message);
} // statusMessage
}); // each .multiselect



function createChoices ($lists) {
$lists.each (function () {
var $list = $(this);
var nodeName = $list[0].nodeName.toLowerCase();
//debug ("create: ", nodeName);
var option = "option";
var $element;
if (nodeName === "ul") option = "li";
else if (nodeName === "div") option = "span";

if (! option) {
alert ($list.nodeName + " is an invalid container; must be 'ul', 'select', or 'div'");
return;
} // if


for (var i=0; i<100; i++) {
$element = $('<' + option + '></' + option + '>\n');
$element.text (i);
$list.append ($element);
} // for
}); // each
} // createChoices


//alert ("multiselect.js loaded");
