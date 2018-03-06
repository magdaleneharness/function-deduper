function parse (data) {
  // console.log("data is ", data);
  let result = []
  let regexArray
  const regx = /static\s[a-z|\d]*/gi

  while ((regexArray = regx.exec(data)) !== null) {
    result.push(regexArray[0])
  }
  // console.log("result is ", result);
  return result
}

module.exports = {
  parse: parse
}
