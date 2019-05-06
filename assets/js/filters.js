import List from "list.js"

var options = {
  valueNames: ['category', 'title', 'date', 'publication']
};
var entryList = new List('entry-list', options);
  // cycle through writing categories to generate filter

  if (document.getElementById("filter-essays")) {
    document.getElementById("filter-essays").onclick=function(){
        entryList.filter(function(item) {
           if (item.values().category == "Essays" ) {
             return true;
             } else {
             return false;
          }
      });
    };}

  if (document.getElementById("filter-book-reviews")) {
    document.getElementById("filter-book-reviews").onclick=function(){
        entryList.filter(function(item) {
           if (item.values().category == "Book Reviews" ) {
             return true;
             } else {
             return false;
          }
      });
    };}

  if (document.getElementById("filter-anthologies")) {
    document.getElementById("filter-anthologies").onclick=function(){
        entryList.filter(function(item) {
           if (item.values().category == "Anthologies &amp; Collections" ) {
             return true;
             } else {
             return false;
          }
      });
    };}

  if (document.getElementById("filter-travel")) {
    document.getElementById("filter-travel").onclick=function(){
        entryList.filter(function(item) {
           if (item.values().category == "Travel" ) {
             return true;
             } else {
             return false;
          }
      });
    };}

  if (document.getElementById("filter-short-stories")) {
    document.getElementById("filter-short-stories").onclick=function(){
        entryList.filter(function(item) {
           if (item.values().category == "Short Stories" ) {
             return true;
             } else {
             return false;
          }
      });
    };}

  if (document.getElementById("filter-art-history")) {
    document.getElementById("filter-art-history").onclick=function(){
        entryList.filter(function(item) {
           if (item.values().category == "Art History" ) {
             return true;
             } else {
             return false;
          }
      });
    };}

  // cycle through media categories to generate filter

  if (document.getElementById("filter-Interview")) {
    document.getElementById("filter-Interview").onclick=function(){
        entryList.filter(function(item) {
           if (item.values().category == "Interview" ) {
             return true;
             } else {
             return false;
          }
      });
    };}

  if (document.getElementById("filter-Reading")) {
    document.getElementById("filter-Reading").onclick=function(){
        entryList.filter(function(item) {
           if (item.values().category == "Reading" ) {
             return true;
             } else {
             return false;
          }
      });
    };}

    //and clear the filters
if (document.getElementById("filter-none")) {
 document.getElementById("filter-none").onclick=function(){
     entryList.filter();
    };}    


function unhide(divID) {var item = document.getElementById(divID);if (item) {item.style.display=(item.style.display=='none')?'block':'none';}}