import nem from 'nem-sdk';
import TransportU2F from "@ledgerhq/hw-transport-u2f";
import NemH from "./hw-app-nem";

/** Service storing Trezor utility functions. */
class Ledger {

    /**
     * Initialize dependencies and properties
     *
     * @params {services} - Angular services to inject
     */
    constructor() {
        'ngInject';

        // Service dependencies region //

        // End dependencies region //

        // Service properties region //

        // End properties region //
    }

    // Service methods region //

    createWallet(network) {
        return this.createAccount(network, 0, "Primary");
    }

    bip44(network, index) {
        const coinType = network == -104 ? 1 : 43;

        return `m/44'/${coinType}'/${index}'/0'/0'`;
    }

    async createAccount(network, index, label) {
        const transport = await TransportU2F.create();
        const nemH = new NemH(transport);
        return nemH.getAddress(bip44(network, index));
    }

    deriveRemote(account, network) {
    }

    serialize(transaction, account) {
    }

    showAccount(account) {
    }

    // End methods region //

}

export default Ledger;
