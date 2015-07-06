
    var tableJson = angular.module('tableJson', []);
    tableJson.controller('tableJsonCtrl', function($scope){
    $scope.table = [
    {"feature": "Feature/Engine", "FF1": "FF1", "FF2": "FF2", "IE1": "IE1", "IE2": "IE2", "IE3": "IE3",
    "WK1": "WK1", "WK2": "WK2", "WK3": "WK3", "WK4": "WK4", "iOS1": "iOS1", "iOS2": "iOS2"},
    {"feature": "exponentiation", "FF1": "yes", "FF2": "yes", "IE1": "no", "IE2": "no", "IE3": "no", "WK1": "no",
    "WK2": "no", "WK3": "no", "WK4": "no", "iOS1": "no", "iOS2": "no"},
    {"feature": "function.sentc", "FF1": "no", "FF2": "no", "IE1": "no", "IE2": "no", "IE3": "no", "WK1": "no",
    "WK2": "no", "WK3": "no", "WK4": "no", "iOS1": "no", "iOS2": "no"},
    {"feature": "Object.observec", "FF1": "no", "FF2": "no", "IE1": "no", "IE2": "no", "IE3": "no", "WK1": "yes",
    "WK2": "yes", "WK3": "yes", "WK4": "no", "iOS1": "yes", "iOS2": "yes"},
    {"feature": "Array.prototype.includesc", "FF1": "no", "FF2": "yes", "IE1": "partial", "IE2": "yes", "IE3": "no", "WK1": "no",
    "WK2": "partial", "WK3": "no", "WK4": "yes", "iOS1": "no", "iOS2": "no"},
    {"feature": "SIMD", "FF1": "no", "FF2": "no", "IE1": "no", "IE2": "no", "IE3": "yes", "WK1": "yes",
    "WK2": "no", "WK3": "yes", "WK4": "partial", "iOS1": "partial", "iOS2": "no"},
    {"feature": "trailing commas in function syntax", "FF1": "no", "FF2": "yes", "IE1": "no", "IE2": "yes", "IE3": "no", "WK1": "partial",
    "WK2": "partial", "WK3": "yes", "WK4": "partial", "iOS1": "partial", "iOS2": "yes"},
    {"feature": "async functions", "FF1": "no", "FF2": "yes", "IE1": "yes", "IE2": "yes", "IE3": "no", "WK1": "yes",
    "WK2": "no", "WK3": "no", "WK4": "patial", "iOS1": "0/2", "iOS2": "partial"},
    {"feature": "typed objectsc", "FF1": "no", "FF2": "no", "IE1": "partial", "IE2": "no", "IE3": "no", "WK1": "no",
    "WK2": "no", "WK3": "no", "WK4": "no", "iOS1": "no", "iOS2": "no"},
    {"feature": "ArrayBuffer.transferc", "FF1": "no", "FF2": "no", "IE1": "no", "IE2": "no", "IE3": "yes", "WK1": "yes",
    "WK2": "yes", "WK3": "yes", "WK4": "no", "iOS1": "no", "iOS2": "no"},
    {"feature": "class decoratorsc", "FF1": "no", "FF2": "yes", "IE1": "no", "IE2": "partial", "IE3": "no", "WK1": "no",
    "WK2": "partial", "WK3": "no", "WK4": "no", "iOS1": "no", "iOS2": "no"},
    {"feature": "async generatorsc", "FF1": "no", "FF2": "no", "IE1": "no", "IE2": "no", "IE3": "no", "WK1": "no",
    "WK2": "no", "WK3": "no", "WK4": "no", "iOS1": "no", "iOS2": "no"},
    {"feature": "object rest propertiesc", "FF1": "no", "FF2": "yes", "IE1": "yes", "IE2": "no", "IE3": "no", "WK1": "no",
    "WK2": "no", "WK3": "no", "WK4": "no", "iOS1": "no", "iOS2": "no"},
    {"feature": "object spread propertiesc", "FF1": "no", "FF2": "yes", "IE1": "yes", "IE2": "no", "IE3": "no", "WK1": "no",
    "WK2": "no", "WK3": "no", "WK4": "no", "iOS1": "no", "iOS2": "no"},
    ];
    });

   $( document ).ready(function() {
     $(this).find('td').each (function() {
       if ($('this:contains("yes")')) {
         $(this).toggleClass('yes');
       }
       else if ($('this:contains("no")')) {
         $(this).toggleClass('no');
       }
       else if ($('this:contains("partial")')) {
         $(this).toggleClass('partial');
       }
     });
   });
