var common = {};
//生成某个区间的随机数
common.makeRandom = function(min,max){
   return  Math.floor(Math.random()*(max-min+1)+min);
};


//获取当前时间戳(单位是s)
common.time = function(){
    return parseInt(new Date().getTime()/1000);
};
