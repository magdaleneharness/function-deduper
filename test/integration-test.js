const assert = require('assert')
const path = require('path')
const fs = require('fs')

const compare = require('../modules/compare')
const capture = require('../modules/capture')

describe('Input Capture With Dedupe', () => {
  it('should get all the keynames of the class and dedupe', () => {
    const inputFilePath = path.resolve(__dirname, './fixtures/test-input.js')
    return new Promise((resolve, reject) => {
      fs.readFile(inputFilePath, 'utf-8', (err, data) => {
        if (err) {
          reject(err)
        }
        resolve(data)
      })
    }).then(data => {
      let result = capture.parse(data)
      assert(result.length === 6)
      let deduped = compare.dedupe(result)
      assert(deduped.length === 2)
    })
  })
})
