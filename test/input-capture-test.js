const assert = require('assert')
const capture = require('../modules/capture')
const path = require('path')
const fs = require('fs')

describe('Input Capture', () => {
  it('should get all the keynames of the class', () => {
    const inputFilePath = path.resolve(__dirname, './fixtures/test-input.js')
    return new Promise((resolve, reject) => {
      fs.readFile(inputFilePath, 'utf-8', (err, data) => {
        if (err) {
          reject(err)
        }
        resolve(data)
      })
    }).then(data => {
      assert(capture.parse(data).length === 6)
    })
  })
})
