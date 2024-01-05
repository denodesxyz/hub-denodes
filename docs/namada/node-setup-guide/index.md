# Node Setup Guide

Namada: Node Setup Guide

![An image](/namada-node-setup.svg)

Welcome to our guide on setting up your node and participating in the [Namada public testnet](https://docs.namada.net/networks/testnets). Follow these step-by-step instructions to get started.

The guide on how to run a [Namada node](https://hub.denodes.xyz/namada/the-node-guide) is also available in other languages, such as:
* [Russian](https://hub.denodes.xyz/namada/the-node-guide/russian)

## Hardware Requirements

We recommend the following minimum hardware requirements for running the Namada Node:
* Machine: **8 GB RAM, 6 Cores, 500 SSD**
* OS: **Ubuntu Linux 20.04 (LTS)**

## Setting up a Namada node

Update the system:
```bash
apt update && sudo apt upgrade -y
apt install jq -y
```

Install CometBFT:
```bash
mkdir -p $HOME/cometbft && cd $HOME/cometbft
wget -O cometbft.tar.gz https://github.com/cometbft/cometbft/releases/download/v0.37.2/cometbft_0.37.2_linux_amd64.tar.gz
tar -xvf cometbft.tar.gz
cp cometbft /usr/local/bin
cd $HOME
rm -rf ./cometbft
```

Download the binary files Namada:
```bash
mkdir -p $HOME/namada && cd $HOME/namada
wget -O namada.tar.gz "$(curl -s "https://api.github.com/repos/anoma/namada/releases/latest" | grep "browser_download_url" | cut -d '"' -f 4 | grep "Linux")"
tar -xzvf namada*.tar.gz --strip-components 1
cp ./namada* /usr/local/bin/
cd $HOME
rm -rf ./namada
```

Set environment variables:
```bash
# In the following variables, we set the name of the validator, the name of the wallet and your email
echo "export NAMADA_ALIAS="moniker"" >> $HOME/.bash_profile
echo "export NAMADA_WALLET="wallet"" >> $HOME/.bash_profile
echo "export EMAIL="mymail@mydomain.com"" >> $HOME/.bash_profile
# This is left without changes
echo "export PUBLIC_IP=$(wget -qO- eth0.me)" >> $HOME/.bash_profile
echo "export TM_HASH="v0.1.4-abciplus"" >> $HOME/.bash_profile
echo "export CHAIN_ID="public-testnet-14.5d79b6958580"" >> $HOME/.bash_profile
echo "export BASE_DIR="$HOME/.local/share/namada"" >> $HOME/.bash_profile
source $HOME/.bash_profile
```

Join the network:
```bash
namada client utils join-network --chain-id $CHAIN_ID
```

Create a service file:
```bash
sudo tee /etc/systemd/system/namadad.service > /dev/null <<EOF
[Unit]
Description=Namada
After=network-online.target
[Service]
User=$USER
WorkingDirectory=$BASE_DIR
Environment=CMT_LOG_LEVEL=p2p:none,pex:error
Environment=NAMADA_CMT_STDOUT=true
ExecStart=$(which namada) node ledger run 
StandardOutput=syslog
StandardError=syslog
Restart=always
RestartSec=10
LimitNOFILE=65535
[Install]
WantedBy=multi-user.target
EOF
```

Enable and start the service:
```bash
systemctl daemon-reload
systemctl enable namadad
systemctl start namadad
```

Then, create a new wallet:
```bash
namada wallet address gen --alias $NAMADA_WALLET
```

Get some test tokens for your newly created wallet from this faucet: https://faucet.heliax.click/

After that, you need to wait for the node to fully synchronize. To do this, you need to check your wallet balance and synchronization status.

#### Check balance
To check the wallet balance, please use the following command:

```bash
namada client balance --owner $NAMADA_ALIAS --token NAM
```

#### Sync Status
To check the synchronization status, please use the following command:

```bash
curl http://127.0.0.1:26657/status | jq .result.sync_info.catching_up
```
#### Create a validator
When sync is completed and tokens are on the balance, proceed to the creation of a validator.

```bash
namada client init-validator \
  --alias $NAMADA_ALIAS \
  --account-keys $NAMADA_WALLET \
  --signing-keys $NAMADA_WALLET \
  --commission-rate 0.05 \
  --max-commission-rate-change 0.01 \
  --email $EMAIL
```

```note
The validator's fee can be set at your discretion. 
In the example, the validator commission is 5% and can be changed to 1%
```

Now you need to stake the available tokens into your validator:

```bash
namada client bond \
  --validator $NAMADA_ALIAS \
  --amount 1000
```

Wait 2 epochs and check the stakes:

```bash
namada client bonds --owner $NAMADA_ALIAS
```

The current epoch can be obtained with the following command:

```bash
namada client epoch
```

## Getting out of Jail

In some cases, an active validator may be placed in " Jail" and does not participate in the consensus. For example, if a node has lost synchronization and has not signed blocks for a certain period of time. 

After the problem with the node is resolved, to return to the active set you need to run the following command:

```bash
namada client unjail-validator --validator $NAMADA_ALIAS --signing-keys $NAMADA_WALLET
```

## Useful Commands

The list of useful commands includes ways to manage and monitor your namada node:

* View the logs

```bash
journalctl -fu namada -o cat
```

* List of all validators and amount of staked tokens (own and delegated)

```bash
namada client bonded-stake
```

* Delete your node
```bash
sudo systemctl stop namadad
sudo systemctl disable namadad
sudo rm -rf /etc/systemd/system/namadad.service
sudo systemctl daemon-reload
sudo rm /usr/local/bin/namada*
sudo rm -rf $HOME/.local/share/namada
```
