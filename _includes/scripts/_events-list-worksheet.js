---
layout: page
title: Appearances
event-name: Appearances
permalink: /events/
---
<div id="calendar">
</div>
<h2 class="entry-title text-center" style="margin-top:3em;">- Past Appearances - </h2>
<div id="calendar-past">
</div>


<script src="{{site.baseurl}}assets/js/moment.min.js"></script>
<script>

var timing = function(start, end) {
  // this can be improved another time
  return moment(start).format('MM/DD/YYYY h:mma') + ' - ' + moment(end).format('MM/DD/YYYY h:mma');
};

$(document).ready(function() {
  $.getJSON('/api/cal.json', null, function(response) {
    var groups = _.groupBy(response.events, function(event) { return moment(event.start).format('YYYY-MM-DD'); }); 
    days = _.sortBy(Object.keys(groups), function(day) { return day });
    days.forEach(function(day) {
      if (moment(day).isAfter(moment().subtract('days', 1))) {
        $('<h6><time class="dt-start dtstart">' + moment(day).format('MMMM Do, YYYY') + '</time></h6>').appendTo('#calendar');
        groups[day].forEach(function(event) {
          $('<div class="event"><div class="title"><h4><a href="' + event.url + '">' + event.citystate + '</a></h4></div><div class="p-location location h-card vcard"><p class="location">' + event.venue + '  ' + event.starttime + '</small><br />' + event.address + '<br /><a href="' + event.website + '" class="small">' + event.website + '</a></p></div><br /><span class="p-name summary">' + event.summary + '</span></div><hr />').appendTo('#calendar');
        });
      }
    });    
  });
});
    
    
    
$(document).ready(function() {
  $.getJSON('/api/cal.json', null, function(response) {
    var groups = _.groupBy(response.events, function(event) { return moment(event.start).format('YYYY-MM-DD'); }); 
    days = _.sortBy(Object.keys(groups), function(day) { return day });
    days.forEach(function(day) {
      if (moment(day).isBefore(moment().subtract('days', 1))) {
        $('<h6><time class="dt-start dtstart">' + moment(day).format('MMMM Do, YYYY') + '</time></h6>').appendTo('#calendar-past');
        groups[day].forEach(function(event) {
          $('<div class="event"><div class="title"><h4><a href="' + event.url + '">' + event.citystate + '</a></h4></div><div class="p-location location h-card vcard"><p class="location">' + event.venue + '  ' + event.starttime + '</small><br />' + event.address + '<br /><a href="' + event.website + '" class="small">' + event.website + '</a></p></div><br /><span class="p-name summary">' + event.summary + '</span></div><hr />').appendTo('#calendar-past');
        });
      }
    });    
  });
});    
    
</script>
