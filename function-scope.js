function parent() {
  var x = 0;

  function child(num) {
    console.log(num);
    num = 8

    return num;
  }

  child(x) // 8
  console.log(x);
}

parent()

// parent()
// x = 0

// child(x) // x = 0
// console.log(x = 0)
// x = 8

// return 8, but it doesn't get stored anywhere
// so x still = 0
// console.log(x = 0)
