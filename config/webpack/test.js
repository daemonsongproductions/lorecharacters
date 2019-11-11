const environment = require('./environment')

module.exports = environment.toWebpackConfig()

describe('useless', function(){
  test('why does this need to be here', function() {
    expect(1).toBe(1)
  })
});