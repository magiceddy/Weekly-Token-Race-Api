module.exports = {
  get: jest.fn(function () {
    return Promise.resolve({ data: {} })
  }
  )
}
