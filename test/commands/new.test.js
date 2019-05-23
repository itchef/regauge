const {expect, test} = require('@oclif/test')

describe('new', () => {
  test
  .stdout()
  .command(['new'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })
})
