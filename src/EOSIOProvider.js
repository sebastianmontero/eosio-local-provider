const ecc = require('eosjs-ecc')

class EOSIOProvider {
  constructor ({
    chainId,
    account,
    keys
  }) {
    this.chainId = chainId
    this.account = account
    this.keys = keys
    this.pubKeys = Object.keys(this.keys)
  }

  /**
   * @returns {string}
   */
  async getAccountName () {
    return this.account
  }

  /**
   * @returns {string}
   */
  async getChainId () {
    return this.chainId
  }

  /**
   * @returns {Array}
   */
  async getKeys () {
    return this.pubKeys
  }

  /**
   *
   * @param {string} key
   * @param {string} payload
   * @returns {string}
   */
  async signArbitrary (key, payload) {
    const privateKey = this.keys[key]
    return ecc.sign(payload, privateKey)
  }
}

module.exports = EOSIOProvider
