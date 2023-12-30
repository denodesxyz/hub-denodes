# Node Setup Guide

Dymension: Node Setup Guide

![An image](/dymension-node-setup.svg)

Welcome to our guide on setting up your node and participating in the Dymension protocol testnet. Follow these step-by-step instructions to get started.

## Hardware Requirements
We recommend the following minimum hardware requirements for running the Dymension Node:
* Machine: **16 GB RAM, Dual Core, 500 SSD**
* Network: **At least 100mbps network bandwidth**
* OS: **Ubuntu Linux 20.04 (LTS)**

## Setting up a Dymension Node

### Update system and install requirements
```bash
apt update && apt upgrade -y
apt install curl jq wget build-essential clang pkg-config libssl-dev git -y
```

### Install GO
```bash
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.20.10.linux-amd64.tar.gz && rm go1.20.10.linux-amd64.tar.gz
echo "export PATH=$PATH:/usr/local/go/bin" > $HOME/.profile
source $HOME/.profile
```

### Build
```bash
git clone https://github.com/dymensionxyz/dymension.git --branch v1.0.2-beta
cd dymension
make build
cp ./build/dymd /usr/local/bin/
```

Check binary version:
```bash
dymd version --long | grep -E -i "^commit|^version"
```

```note
commit: 74457e007dc802bd9c0be979baa5d83ab4d3226e
version: v1.0.2-beta
```

### Node initialization
```bash
DYMENSION_MONIKER="Your moniker"
DYMENSION_CHAIN_ID="froopyland_100-1"
echo 'export DYMENSION_MONIKER='$DYMENSION_MONIKER >> $HOME/.bash_profile
echo 'export DYMENSION_CHAIN_ID='$DYMENSION_CHAIN_ID >> $HOME/.bash_profile
source $HOME/.bash_profile
dymd init $DYMENSION_MONIKER --chain-id $DYMENSION_CHAIN_ID
dymd config chain-id $DYMENSION_CHAIN_ID
dymd config keyring-backend test
```

### Download genesis
```bash
wget -O $HOME/.dymension/config/genesis.json https://raw.githubusercontent.com/dymensionxyz/testnets/main/dymension-hub/froopyland/genesis.json
```

Check genesis checksum:
```bash
sha256sum $HOME/.dymension/config/genesis.json
```

```note
2c39abf9fd87222fc3b8178763e1c0e250029a445a3775b3507e88140910049e genesis.json
```

### Create or recover existing wallet
```create
dymd keys add wallet
```

```recover
dymd keys add wallet --recover
```

Save the output of the command in a secure place. Fund your address using Dymension's Discord channel [#froopyland-faucet](https://discord.com/channels/956961633165529098/1143231362468434022)

### Node configuration

```bash
sed -i.bak -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0.25udym\"/;" ~/.dymension/config/app.toml
sed -i.bak -e "s/^external_address *=.*/external_address = \"$(curl -s httpbin.org/ip | jq -r .origin):26656\"/" $HOME/.dymension/config/config.toml
peers="e7857b8ed09bd0101af72e30425555efa8f4a242@148.251.177.108:20556,3410e9bc9c429d6f35e868840f6b7a0ccb29020b@46.4.5.45:20556,e7857b8ed09bd0101af72e30425555efa8f4a242@148.251.177.108:20556,3410e9bc9c429d6f35e868840f6b7a0ccb29020b@46.4.5.45:20556,138009ae8a3435eab5df2d58844239077c83c92a@161.97.180.20:16657,cb120ed9625771d57e06f8d449cb10ab99a58225@57.128.114.155:26656"
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$peers\"/" $HOME/.dymension/config/config.toml
seeds="ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@testnet-seeds.polkachu.com:20556,92308bad858b8886e102009bbb45994d57af44e7@rpc-t.dymension.nodestake.top:666,284313184f63d9f06b218a67a0e2de126b64258d@seeds.silknodes.io:26157"
sed -i.bak -e "s/^seeds =.*/seeds = \"$seeds\"/" $HOME/.dymension/config/config.toml
sed -i 's/max_num_inbound_peers =.*/max_num_inbound_peers = 50/g' $HOME/.dymension/config/config.toml
sed -i 's/max_num_outbound_peers =.*/max_num_outbound_peers = 50/g' $HOME/.dymension/config/config.toml
```

### Pruning (optional)
```bash
pruning="custom"
pruning_keep_recent="100"
pruning_keep_every="0"
pruning_interval="10"
sed -i -e "s/^pruning *=.*/pruning = \"$pruning\"/" $HOME/.dymension/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"$pruning_keep_recent\"/" $HOME/.dymension/config/app.toml
sed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \"$pruning_keep_every\"/" $HOME/.dymension/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"$pruning_interval\"/" $HOME/.dymension/config/app.toml
```

### Disable indexer (optional)
```bash
sed -i -e "s/^indexer *=.*/indexer = \"null\"/" $HOME/.dymension/config/config.toml
```

### Creating service file
```bash
tee /etc/systemd/system/dymd.service > /dev/null <<EOF
[Unit]
Description=Dymension Node
After=network-online.target

[Service]
User=$USER
ExecStart=$(which dymd) start
Restart=on-failure
RestartSec=3
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF
```

```bash
systemctl daemon-reload
systemctl enable dymd
systemctl restart dymd
```

Check logs:
```bash
journalctl -u dymd -f -o cat
```

### Waiting for synchronization 
You must wait until the node is fully synchronized before creating the validator. Checking the current status:
```bash
dymd status | jq .SyncInfo
```

<div style="margin-bottom: 1rem;">
    <span style="background-color: rgba(43,46,57,1.00); color: white; padding: 3px; border-radius: .5rem; ">latest_block_height</span> current node height <br/>
</div>
<div style="margin-bottom: 1rem;">
    <span style="background-color: rgba(43,46,57,1.00); color: white; padding: 3px; border-radius: .5rem">catching_up</span> you have to wait for "false"
</div>    



### Create a new validator

```bash
dymd tx staking create-validator \
    --amount=1000000udym \
    --pubkey=$(dymd tendermint show-validator) \
    --moniker="$DYMENSION_MONIKER" \
    --chain-id=froopyland_100-1 \
    --from=wallet \
    --commission-rate="0.10" \
    --commission-max-rate="0.20" \
    --commission-max-change-rate="0.01" \
    --min-self-delegation="1" \
    --fees 50000udym \
    --identity="" \
    --website="" \
    --details=""
```

Powered by [deNodes](https://twitter.com/_denodes)