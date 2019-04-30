var x = 0

// point A
console.log('A: ', x)

function addOne() {
  // point B
  console.log('B: ', x)
  x++

  // point C
  console.log('C: ', x)
  return x
}

// point D
console.log('D: ', x)

x++
// x += 1
// x = x + 1

x = addOne(x)

// point E
console.log('E: ', x)
