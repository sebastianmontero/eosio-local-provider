/* eslint-disable no-undef */
const EOSIOProvider = require('../src/EOSIOProvider')

const eosioProvider = new EOSIOProvider({
  chainId: '1eaa0824707c8c16bd25145493bf062aecddfeb56c736f6ba6397f3195f33c9f',
  account: 'testuser1111',
  keys: {
    EOS6uUc8fYoCdyz7TUAXqHvRbU7QnVirFuvcAW6NMQqBabdME6FnL: '5KFFFvKioakMpt8zWnyGKnLaDzzUSqy5V33PHHoxEam47pLJmo2'
  }
})

describe('getKeys', () => {
  test('getKeys', async () => {
    const pubKeys = await eosioProvider.getKeys()

    expect(pubKeys).toEqual([
      'EOS6uUc8fYoCdyz7TUAXqHvRbU7QnVirFuvcAW6NMQqBabdME6FnL'
    ])
  })
})

describe('getAccountName', () => {
  test('getAccountName', async () => {
    const account = await eosioProvider.getAccountName()
    expect(account).toBe('testuser1111')
  })
})

describe('getChainId', () => {
  test('getChainId', async () => {
    const chainId = await eosioProvider.getChainId()
    expect(chainId).toBe('1eaa0824707c8c16bd25145493bf062aecddfeb56c736f6ba6397f3195f33c9f')
  })
})

describe('signArbitrary', () => {
  test('signArbitrary', async () => {
    const signature = await eosioProvider.signArbitrary('EOS6uUc8fYoCdyz7TUAXqHvRbU7QnVirFuvcAW6NMQqBabdME6FnL', 'Test message to sign')
    expect(signature).toBe('SIG_K1_K7LbVjSfYVco8Ca3ACDiWQu9RDXuhe6X36BL7bnCZdoDTgDTcJp6XrbizYCxWVWHNAHefz9QXJnpjFd9HnMoWqV7Mtok8z')
  })
})
