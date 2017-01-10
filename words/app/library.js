module.exports = {
 words: function(str){
 var stringed = String(str);
 var trim = stringed.replace(/(\t\n|\n|\t|  )/gm," ");
 var split = trim.split(" "),
    obj = {};

for (var i=0; i<split.length; i++){
  if(obj[split[i]]===undefined){
    obj[split[i]]=1;
  }else{
    obj[split[i]]++;
  }
}
return obj;
}
}