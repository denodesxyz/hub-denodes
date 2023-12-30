# Roller Setup Guide

Dymension: Roller Setup Guide

![An image](/dymension-roller-setup.webp)

Welcome to our guide on setting up your node and participating in the [Dymension testnet](https://medium.com/@dymension/froopyland-is-live-8bf21e9d7046). Follow these step-by-step instructions to get started.

## Hardware Requirements

We recommend the following minimum hardware requirements for deploying a RollApp:
* Machine: **16 GB RAM, Dual Core, 500 SSD**
* Network: **At least 100mbps network bandwidth**
* OS: **Linux AMD64, Linux ARM64, Mac AMD64, Mac ARM64**

## Install Roller

Run the following command:
```bash
curl -L https://dymensionxyz.github.io/roller/install.sh | bash
```

Verify Roller version:
```bash
roller version
```

```output
💈 Roller version v0.1.16-beta
💈 Build time: 2023-10-04T13:38:07+0000"
💈 Git commit: 57994323bdaea039b4ce7449b9f026f0059ba925
```

## Initialize RollApp
<p>
    Initializing the configuration files of the RollApp will create the necessary information to start a new RollApp. This will create a folder <span style="background-color: rgba(43,46,57,1.00); color: white; padding: 2.5px; border-radius: .5rem"> ~/.roller</span> in the root directory of your computer with important files such as the <span style="background-color: rgba(43,46,57,1.00); color: white; padding: 2.5px; border-radius: .5rem">Genesis</span> file.
</p>

```bash
roller config init --interactive
```

* Select your network → **Froopyland (default)**
* Select your execution environment → **EVM RollApp (default)**
* Enter your RollApp ID → **The rollapp ID, should contain only alphabetical characters. Example: denodes**
* Specify your RollApp denom → → **Name of the native token of the RollApp in English letters. Example: BTC, PEPE, DYM**
* Set the genesis token supply → **Initial token supply in the RollApp 1,000,000,000 (default)**
* Choose your data layer → **Celestia: Arabica testnet, Avail: Dymension dedicated devnet**

## Address funding
After initializing the RollApp, addresses to fund should be returned to you:

```bash
🔑 Addresses:

Sequencer <network> | Address used to publish state updates to the Dymension Hub
Relayer   <network> | Address that handles the relaying of IBC packets
DA        <network> | Address used to publish data on-chain to the DA network
```

You can get these addresses at any time by executing the command:
```bash
roller keys list
```

The first two addresses need to be fund through the [froopyland-faucet](https://discord.com/channels/956961633165529098/1143231362468434022) channel in the Dymension discord:
```bash
$request <dym-address>
```

For Celestia and Avail network tokens you may use the [celestia-faucet](https://discord.com/channels/956961633165529098/1128048548999610451) or [avail-faucet](https://discord.com/channels/956961633165529098/1144240033650458685) respectively:
```celestia
$request <celestia-address>
```
```avail
/deposit <avail-address>
```

## Registering the RollApp
Registering the RollApp adds a namespace in the Dymension Hub to account for the newly initalized RollApp.

Instead of managing a multi-sig smart contract, a developer only needs to register the RollApp with a simple command. Registering the RollApp to the Dymension Hub allows a Sequencer to publish state updates on-chain and furthermore facilitates bridging between ecosystems.

The following command utilizes the addresses generated in the [previous step](https://docs.dymension.xyz/build/quick-start/roller-quick/initialize):
```bash
roller tx register
```

```output
💈 Rollapp '<rollapp-id>' has been successfully registered on the hub.
```

## Running the RollApp
There are two ways to run RollApp. In the first case it is enough to execute the command:

```bash
roller run
```

<p>
    During the <span style="background-color: rgba(43,46,57,1.00); color: white; padding: 2.5px; border-radius: .5rem">Run</span> process a RollApp with an IBC connection to the Dymension Hub is started. A status table will appear with information about the RollApp and IBC relayer. Developers should see an output with useful information such as this:
</p>

![An image](/dymension-running-roller.webp)

If you close the terminal, the process execution will be stopped. Therefore, it is recommended to use the following method. It only works on Linux with systemd.

Creating service files:
```bash
roller services load
```

Enable services:
```bash
# Celestia

sudo systemctl enable da-light-client sequencer relayer
```

```bash
# Avail

sudo systemctl enable sequencer relayer
```

Start the services:
```bash
# Celestia

sudo systemctl start da-light-client sequencer relayer
```

```bash
# Avail

sudo systemctl start sequencer relayer
```

Next, check the status of running services:
```bash
# Celestia

sudo systemctl status da-light-client sequencer relayer
```

```bash
# Avail

sudo systemctl status sequencer relayer
```

The status of all services should be active (running).

## IBC Transfer
Fund the Dymension Hub faucet from the created RollApp:
```bash
roller tx fund-faucet
```

Within 30 minutes tokens will become available via faucet in the Dymension Discord [(#froopyland-faucet channel)](https://discord.com/channels/956961633165529098/1143231362468434022). Run the following command to check the balance of your RollApp token:
```bash
$balances dym1g8sf7w4cz5gtupa6y62h3q6a4gjv37pgefnpt5 <rollapp-id>
```

```<rollapp-id>``` can always be found with the command:
```bash
roller config show
```

Once the tokens appear in the faucet balance, users will be able to request them with the following command in Discord:
```bash
$request <user-address> <rollapp-id>
```

## Transfer IBC Tokens
Let's transfer the tokens to the faucet address (for the example) using IBC. First, let's define the source channel of our RollApp:
```bash
roller relayer status
```
![An image](/dymension-transfer-ibc-tokens.webp)

The source channel, in this case ```channel-0```, will be used in the following command and will be referred to as ```<src-channel>```.

In the following command, you must substitute your own values for ```<src-channel>``` and ```<base-denom>```.```<destination-address>``` replace with faucet address (dym1g8sf7w4cz5gtupa6y62h3q6a4gjv37pgefnpt5)
```bash
rollapp_evm tx ibc-transfer transfer transfer <src-channel> <destination-address> 5000000000000000000000000<base-denom> --from rollapp_sequencer --keyring-backend test --home ~/.roller/rollapp --broadcast-mode block
```

For example:
```bash
rollapp_evm tx ibc-transfer transfer transfer channel-0 dym1g8sf7w4cz5gtupa6y62h3q6a4gjv37pgefnpt5 5000000000000000000000000uDEN --from rollapp_sequencer --keyring-backend test --home ~/.roller/rollapp --broadcast-mode block
```

## Export keys

Backup the private keys of your account. Run the following command to display the private keys that are associated with the RollApp.
```bash
roller keys list
```

The following keys can currently be exported: ```hub_sequencer```, ```rollapp_sequencer``` and ```my_celes_key```
```bash
roller keys export my_celes_key
```
```bash
roller keys export hub_sequencer
```
```bash
roller keys export rollapp_sequencer
```
It is recommended to keep the keys in a secure place.

## Portal Listing

Listing on the [Dymension Portal](https://portal.dymension.xyz/) will allow users to discover and interact with the RollApp.

First, you need to make sure the Dymension Hub faucet is funded with tokens from the created RollApp. Earlier we did this in the [IBC transfer](https://hub.denodes.xyz/dymension/roller-setup-guide#ibc-transfer) step. Next, you need to create a PR in the Dymension GitHub with the RollApp configuration so that the project team can list it on the portal. To do this, follow the steps below.

* Fork the RollApp-registry [repo](https://github.com/dymensionxyz/rollapp-registry) into your GitHub account:

![An image](/dymension-github1.webp)

* Clone it:

![An image](/dymension-github2.webp)

```bash
git clone https://github.com/<your-github-username>/rollapp-registry
```

* Create the RollApp directory and prepare config information and logo:

```bash
cd rollapp-registry
```

```bash
export ROLLAPP_ID=$(roller config show | grep RollappID | grep -o '".*"' | sed 's/"//g')
```

```bash
mkdir -p $ROLLAPP_ID/logos && cd $ROLLAPP_ID && touch $ROLLAPP_ID.json
```

Next, place the logo in SVG, PNG, or JPG format in the logos directory. The size should not exceed 50 KB.

Then export the RollApp configuration to the ```<RollApp-ID>.json``` file:

```bash
roller config export 2>&1 | tail -n +2 > $ROLLAPP_ID.json && cat $ROLLAPP_ID.json
```

![An image](/dymension-console.webp)

In the ```<RollApp-ID>.json``` file, change the following fields:

* `rpc` `"http://<your-public-ip-or-domain>:port"` (default port 26657)
* `rest` `"http://<your-public-ip-or-domain>:port"` (default port 1317)
* `rpc` in the `evm` section: `"http://<your-public-ip-or-domain>:port"` (default port 8545)
* `logo` Correct the file extension

Optional:
* `chainName` The RollApp name as it will appear on the Portal
* `description` Description to be displayed on the portal
* `website` Website URL

Then commit your changes:
```bash
git add .
git commit -m "added RollApp"
git push -u origin main
```

And create pull request:

![An image](/dymension-github3.webp)

![An image](/dymension-github4.webp)

Next pair the RollApp on the [Discord channel](https://discord.com/channels/956961633165529098/1140590139022782474) by entering the following command:

```bash
$pair <RollApp-ID>
```

Then create a thread in the post and send a link to the PR.

![An image](/dymension-discord.webp)

You just have to wait for a moderator to check the PR and list it on the portal. After that, you should send a tweet about the listing with the required `@Dymension` tag and a link to RollApp on the portal. The link to the tweet will need to be sent to this same thread.

## Upgrade

Install the most recent version of Roller:
```bash
curl -L https://dymensionxyz.github.io/roller/install.sh | bash
```

Stop the Roller services:
```bash
# Celestia

sudo systemctl stop relayer sequencer da-light-client
```
```bash
# Avail

sudo systemctl stop relayer sequencer
```

Execute the `migrate` command:
```bash
roller migrate
```

Start the Roller services:
```bash
# Celestia

sudo systemctl start da-light-client sequencer relayer
```
```bash
# Avail

sudo systemctl stop sequencer relayer
```

Powered by [deNodes](https://twitter.com/_denodes)

