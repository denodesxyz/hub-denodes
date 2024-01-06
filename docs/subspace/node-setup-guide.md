# Node Setup Guide

Subspace: Node Setup Guide

![An image](/subspace-node-setup.svg)

Welcome to our guide on setting up your node and participating in the Gemini3, Subspace Incentivized Testnet. Follow these step-by-step instructions to get started.

## Hardware Requirements
We recommend the following minimum hardware requirements for running the Subspace Node:
* Machine: **8 GB+ RAM, CPU 4 Core+, 100GB SSD**
* OS: **Ubuntu Linux 20.04 (LTS)**

## Setting up a Subspace Node
* Run the following command:

```bash
wget -O subspace.sh https://raw.github.com/denodesxyz/denodes-hub/hub/scripts/subspace.sh && chmod +x subspace.sh && ./subspace.sh
```

If the message "Illegal Instruction" appears during installation. It means that the processor is not compatible with this version. You can try adding the "v2" parameter and installing the version for older processors:

```bash
wget -O subspace.sh https://raw.github.com/denodesxyz/denodes-hub/hub/scripts/subspace.sh && chmod +x subspace.sh && ./subspace.sh v2
```

During the installation process, several parameters will be requested, the most important of which are the wallet address, the node name and the volume of the disk allocated for the plot.

* For the first question, enter `Y`:

![An image](/subspace-node-setup-console1.png)

* Your subspace wallet address:

Enter the address that can be taken [here](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-0.gemini-3e.subspace.network%2Fws#/accounts), or install recommended wallet [Subwallet](https://docs.subspace.network/docs/protocol/wallets/subwallet).

![An image](/subspace-node-setup-console2.png)

* Enter a unique node name:

![An image](/subspace-node-setup-console3.png)

* Specify the paths for storing the plot and the node data (you can leave the default values):

![An image](/subspace-node-setup-console4.png)

* Specify the size of the plot:

![An image](/subspace-node-setup-console5.png)

* Leave the default value when selecting the chain:

![An image](/subspace-node-setup-console6.png)

* Installation successfully completed:

![An image](/subspace-node-setup-console7.png)

## Node Monitoring

To view logs, use the following command:
```bash
journalctl -f -u subspace-node -o cat
```
In addition to logs, you can find your node in telemetry. Keep in mind that with a large number of farmers, there is a chance that even a successfully working node will not be seen in telemetry immediately.

[Subspace Telemetry](https://telemetry.subspace.network/#list/0x92e91e657747c41eeabed5129ff51689d2e935b9f6abfbd5dfcb2e1d0d035095)

```note
To search, simply start typing the Node Name. 
Click on the row with the node to pin it to the top of the list.
```

![An image](/subspace-node-setup-telemetry.png)

## Useful Commands

The list of useful commands includes ways to manage and monitor your subspace node:

* View the logs:

```bash
journalctl -f -u subspace-node -o cat
```

* Restart your node:

```bash
journalctl -f -u subspace-node -o cat
```

```bash
systemctl restart subspace-node
```

* Stop your node: 

```bash
systemctl stop subspace-node
```

* Delete your node:

```bash
sudo systemctl stop subspace-node
sudo systemctl disable subspace-node
sudo rm /etc/systemd/system/subspace-node.service
sudo rm /usr/local/bin/subspace
rm -rf $HOME/.local/share/subspace*
rm -rf $HOME/.config/subspace*
```








