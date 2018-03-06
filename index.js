const path = require('path')
const fs = require('fs')

const compare = require('./modules/compare')
const capture = require('./modules/capture')
let processArgs = process.argv
let paramIndex = processArgs.indexOf('-i') > 0 && processArgs.indexOf('-i') + 1

let inputFilePath = path.resolve(processArgs[paramIndex])
;(function autorun () {
  return new Promise((resolve, reject) => {
    fs.readFile(inputFilePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  }).then(data => {
    let functionNames = capture.parse(data)
    let dupes = compare.dedupe(functionNames)
    console.log(dupes)
  })
})()
