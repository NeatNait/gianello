$(function(){
  
  var slogans = ['we <i class="fa fa-heart-o"></i> pizza',
                'yes we pizza',
                'passion for pizza',
                'be pizza my friend',
                'just pizza it',
                'let\'s take it nice\'n pizza',
                'be pizza',
                'pizza time',
                'let there be pizza',
                'to pizza or not pizza'];
  
  
  var rnd = Math.floor(Math.random()*slogans.length);
  $("#slogan").html(slogans[rnd]+'<span>!</span>');

});