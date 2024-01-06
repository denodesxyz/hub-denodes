# Node Setup Guide (Outdated)

Massa: Node Setup Guide

![An image](/massa-node-setup.svg)

Welcome to our guide on setting up your node and participating in the Testnet Episode 26, Massa Incentivized Testnet. Follow these step-by-step instructions to get started.

```note
Massa's Incentivized Testnet ended in September 2023.
```

## Hardware Requirements
We recommend the following minimum hardware requirements for running the Massa Node:
* Machine: **8 GB RAM, 4 Cores CPU, 100 GB SSD**
* OS: **Ubuntu Linux 20.04 (LTS)**

## Setting up a Massa Node

* Run the following command:
```bash
wget -q -O massa.sh https://raw.githubusercontent.com/bombermine3/massa/main/massa.sh && bash massa.sh install
```

After installing the node, watch the logs and wait for synchronization:
```bash
journalctl -u massa-node -f -o cat
```

Next, you need to [create a wallet](https://hub.denodes.xyz/massa/node-setup-guide#creating-a-wallet) and [register the node in Discord](https://hub.denodes.xyz/massa/the-node-guide#registering-the-node-in-discord).

## Creating a wallet
```bash
source $HOME/.bash_profile &&
massa_client wallet_generate_secret_key
```

Getting the wallet address:
```bash
massa_client wallet_info
```

Enable staking for the address. To do this, copy the address and substitute it into the command:
```bash
massa_client node_start_staking Address
```

Go to Discord to get test tokens.

Checking the balance:
```bash
massa_client wallet_info
```

After tokens have appeared on the balance, buy one ROLL, replacing the Address parameter with your own:
```bash
massa_client buy_rolls Address 1 0
```

## Registering the node in Discord
To register a node in the Incentivized program, you need to go to the #testnet-rewards-registration channel and click on the "👍🏻" emoji. 

![An image](/massa-node-setup-discord.webp)

Next, we receive a private message from MassaBot, send in reply the IP address of your server. 

![An image](/massa-node-setup-discord-another.webp)

The output of the command needs to be sent back to the bot in Discord.

## Node Monitoring
To view logs, use the following command:
```bash
journalctl -u massa-node -f -o cat
```

## Updating
```bash
cd $HOME
systemctl stop massa-node
MASSA_LATEST=`wget -qO- https://api.github.com/repos/massalabs/massa/releases/latest | jq -r ".tag_name"`
wget -qO $HOME/massa.tar.gz "https://github.com/massalabs/massa/releases/download/${MASSA_LATEST}/massa_${MASSA_LATEST}_release_linux.tar.gz"
tar -xvf $HOME/massa.tar.gz
rm -rf $HOME/massa.tar.gz
systemctl start massa-node
```

Then we [re-enable staking](https://hub.denodes.xyz/massa/node-setup-guide#creating-a-wallet) for an address, buy `ROLL`, and [register the node in Discord](https://hub.denodes.xyz/massa/node-setup-guide#registering-the-node-in-discord).

## Useful Commands
* Restart your node: 
```bash
systemctl restart massa-node
```
* Stop your node:
```bash
systemctl stop massa-node
```

* Delete your node:
```bash
systemctl stop massa-node
systemctl disable massa-node
rm /etc/systemd/system/massa-node.service
rm -rf $HOME/massa
```




