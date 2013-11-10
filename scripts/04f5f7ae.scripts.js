(function(){"use strict";angular.module("PersonalWebsiteAngularApp",["ngResource"]).config(["$routeProvider",function(a){return a.when("/",{templateUrl:"views/homeView.html",controller:"HomeViewCtrl"}).when("/resume",{templateUrl:"views/resumeView.html",controller:"ResumeViewCtrl"}).when("/contact",{templateUrl:"views/contactView.html",controller:"ContactViewCtrl"}).when("/video",{templateUrl:"views/videoView.html",controller:"VideoViewCtrl"}).when("/photo",{templateUrl:"views/photoView.html",controller:"PhotoViewCtrl"}).when("/blog",{templateUrl:"views/blogView.html",controller:"BlogViewCtrl"}).otherwise({redirectTo:"/"})}])}).call(this),function(){"use strict";angular.module("PersonalWebsiteAngularApp").controller("HomeViewCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}])}.call(this),function(){"use strict";angular.module("PersonalWebsiteAngularApp").controller("ContactViewCtrl",["$scope",function(){return console.log("Contact Page")}])}.call(this),function(){"use strict";angular.module("PersonalWebsiteAngularApp").controller("ResumeViewCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}])}.call(this),function(){angular.module("PersonalWebsiteAngularApp").controller("navigationCtrl",["$scope","$location",function(a,b){return a.isActive=function(a){return a===b.$$path}}])}.call(this),function(){"use strict";angular.module("PersonalWebsiteAngularApp").directive("navigation",function(){return{restrict:"E",scope:{},templateUrl:"views/navigation.html"}})}.call(this),function(){"use strict";angular.module("PersonalWebsiteAngularApp").controller("VideoViewCtrl",["$scope",function(){}])}.call(this),function(){"use strict";angular.module("PersonalWebsiteAngularApp").controller("PhotoViewCtrl",["$scope","photoService",function(a,b){return a.doneLoading=!1,a.photos=b.query(function(){return console.log("success"),a.doneLoading=!0},function(){return alert("Could not load photos"),a.doneLoading=!0})}]).directive("photoblock",function(){return{templateUrl:"views/photoBlock.html",restrict:"E"}})}.call(this),function(){"use strict";angular.module("PersonalWebsiteAngularApp").factory("photoService",["$resource",function(a){return a("http://zhihaomai.herokuapp.com/photos.json")}]),angular.module("PersonalWebsiteAngularApp").config(["$httpProvider",function(a){return a.defaults.useXDomain=!0,delete a.defaults.headers.common["X-Requested-With"]}])}.call(this),function(){angular.module("PersonalWebsiteAngularApp").controller("BlogViewCtrl",["$scope","blogService",function(a,b){return a.doneLoading=!1,a.blogPosts=b.list(function(b){var c,d,e,f;for(a.doneLoading=!0,f=[],c=d=0,e=b.length-1;e>=d;c=d+=1)f.push(b[c].body=a.adjustBodyText(b[c].body));return f},function(){return alert("Could not load blog posts"),a.doneLoading=!0}),a.adjustBodyText=function(a){var b,c,d,e,f;for(d=a.split("\n"),c="",e=0,f=d.length;f>e;e++)b=d[e],c+="<div>"+b+"<br></div>";return c},a.likeClicked=function(b){return b.likes+=1,a.updateDB(b)},a.dislikeClicked=function(b){return b.dislikes+=1,a.updateDB(b)},a.updateDB=function(a){return b.update({id:a.id,likes:a.likes,dislikes:a.dislikes})}}]).directive("blogpost",function(){return{templateUrl:"views/blogPost.html",restrict:"E"}}).filter("reverse",function(){return function(a){return a.slice().reverse()}})}.call(this),function(){"use strict";angular.module("PersonalWebsiteAngularApp").factory("blogService",["$resource",function(a){return a("http://zhihaomai.herokuapp.com/blogs/:id",{id:"@id",likes:"@likes",dislikes:"@dislikes"},{list:{method:"GET",isArray:!0},update:{method:"PUT",headers:{"Content-Type":"application/json"}}})}]),angular.module("PersonalWebsiteAngularApp").config(["$httpProvider",function(a){return a.defaults.useXDomain=!0,a.defaults.headers.common["X-CSRF-Token"]=$("meta[name=csrf-token]").attr("content"),delete a.defaults.headers.common["X-Requested-With"]}])}.call(this);