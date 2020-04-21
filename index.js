function takeANumber(l, n) {

}

function nowServing(l) {
  if (l.length > 0) {
    serving = l[0]
    l.unshift()
    return serving
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(l) {
  if (l.length > 0) {
    result = 'The line is currently :'

    for (var i = 0; i < l.length; i++) {
      result += l[i]
    }

    return result
  }
  else {
    return "The line is currently empty."
  }
}
