import nem from 'nem-sdk';
// import TransportU2F from "@ledgerhq/hw-transport-u2f";
// import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";
// import TransportU2F from "@ledgerhq/hw-transport-web-ble";
import NemH from "./hw-app-nem";
// import TransportU2F from "@ledgerhq/hw-transport-http"
// import NemH from 'testnpm-testledger';
import Transport from "@ledgerhq/hw-transport";
import TransportWebUSB from "@ledgerhq/hw-transport-webusb";


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

        // return `44'/${coinType}'/${index}'/0'/0'`;
        return 
        ;
    }

    async createAccount(network, index, label) {
        console.log('HERE 1');
        const transport = await TransportWebUSB.create().catch(err => console.log(err + "av"));
        console.log('transport: ' + transport);
        const nemH = new NemH(transport);
        console.log('HERE 3');
        return nemH.getAddress(this.bip44(network, index));
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
