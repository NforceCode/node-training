class MyMath{
  static sum = (...args)=> args.reduce((a,i)=>a+i,0);
}

exports.MyMath = MyMath;