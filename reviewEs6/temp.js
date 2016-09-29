var foo = {
  something: function(){
    console.log('tell me something good...');
  }
}

var bar = Object.create(foo);

bar.something();
