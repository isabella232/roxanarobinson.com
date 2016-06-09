var options = {
  valueNames: ['category', 'title', 'date', 'publication']
};
var entryList = new List('entry-list', options);
  // cycle through writing categories to generate filter
{% for link in site.data.writingCats %}
  if (document.getElementById("filter-{{link.catName}}")) {
    document.getElementById("filter-{{link.catName}}").onclick=function(){
        entryList.filter(function(item) {
           if (item.values().category == "{{link.name}}" ) {
             return true;
             } else {
             return false;
          }
      });
    };}
{% endfor %}
  // cycle through media categories to generate filter
{% for link in site.data.mediaCats %}
  if (document.getElementById("filter-{{link.catName}}")) {
    document.getElementById("filter-{{link.catName}}").onclick=function(){
        entryList.filter(function(item) {
           if (item.values().category == "{{link.name}}" ) {
             return true;
             } else {
             return false;
          }
      });
    };}
{% endfor %}
    //and clear the filters
if (document.getElementById("filter-none")) {
 document.getElementById("filter-none").onclick=function(){
     entryList.filter();
    };}    