# Project Overview

Dymension: Project Overview

![An image](/dymension-project-overview-hero.svg)

Welcome to this research, where you will find detailed information about the [Dymension](https://twitter.com/dymension) architecture, team, and backers, resources, and testnet. In the following sections, we will explore each of these aspects in more detail, providing you with a comprehensive understanding of the project.

## What is Dymension
[Dymension](https://dymension.xyz/) introduces a network of modular blockchains known as "RollApps" or app-specific rollups. This innovative approach allows developers to easily create and launch their own RollApps, providing flexibility and eliminating the need for a lengthy roadmap like Ethereum's. Dymension embraces RollApps, enabling developers to build and deploy their applications without the constraints of Ethereum's long-term planning. 

This unique feature sets Dymension apart in terms of agility and adaptability in the blockchain space. These RollApps demonstrate modularity in both data posting and execution. They upload data to a [Data Availability](https://ethereum.org/en/developers/docs/data-availability/) (DA) layer like [Celestia](https://celestia.org/) or [Avail](https://availproject.org/), which involves storing transaction data on a separate blockchain. This approach frees up space on the main chain and enables greater throughput.

Dymension's RollApps will utilize the [RollApp development kit](https://github.com/dymensionxyz/dymension-rdk) (RDK), which is built upon the Cosmos Software development kit (SDK).

<a style="border: 1px solid rgba(43,46,57,1.00); padding: 10px; width: 100%; text-align: left; display: flex; align-items: center;" href="https://namada.net/blog/what-is-namada">
    <div style="display: flex; flex-direction: column; align-items: left; margin-left: 1rem;">
        <p>The Path Forward — Revisited and Updated</p>
        <p style="margin-top: -1rem;">medium.com</p>
    </div>
</a>

## Dymension Components
The Dymension platform is composed of several key components that work together to enhance scalability and functionality. Each component plays a crucial role in enabling the creation and execution of application-specific rollups, facilitating communication between RollApps, ensuring deterministic outputs, and providing shared liquidity and security.

* **RollApp Development Kit (RDK)**<br/>
The RollApp Development Kit (RDK) is a pre-packaged set of generic modules that enables the creation of application-specific rollups in Dymension. It simplifies the process of deploying a RollApp on top of the Dymension Hub by providing functionalities such as creating accounts and token management.

* **Dymension Hub**<br/>
The Dymension Hub is a Cosmos SDK Proof-of-Stake chain that utilizes the Tendermint Core state replication model for networking and consensus. It serves as the optimized settlement layer for rollups in Dymension, housing the rollup servicing logic. The Dymension Hub enables native interoperability between RollApps.

* **Inter-Blockchain Communication (IBC)**<br/>
RollApps in Dymension leverage the Inter-Blockchain Communication (IBC) protocol for secure message transferring. IBC facilitates communication between Dymension RollApps by providing a common communication ground within the Dymension Hub.

* **RollApp Virtual Machine (RVM)**<br/>
Dymension introduces the RollApp Virtual Machine (RVM), which simulates a RollApp execution environment within the Dymension Hub. By feeding the RVM with the exact context of a given transaction, Dymension achieves deterministic outputs and supports various execution environments.

* **Embedded Hub AMM**<br/>
Dymension incorporates a native Automated Market Maker (AMM) into the Dymension Hub to achieve shared liquidity and security. The AMM, designated for RollApp facilitation, serves as essential infrastructure for RollApps. It is not restricted to RollApp usage only and enhances the functionality of the Dymension Hub.

## Froopyland Incentivized Testnet
Dymension's initial testnet, known as 35-C, introduced several innovative features. It was the first fully modular testnet for RollApps, providing app-specific roll-ups. Additionally, it unveiled the first IBC-enabled rollup in blockchain history, named RollApp X, as well as the first EVM IBC-enabled rollup, referred to as EVM RollApp.

Currently, the Dymension network is limited to the core team for RollApp deployment. However, there are plans to transition the testnet into a permission-less deployment testnet, making it accessible to a wider audience. This exciting development aligns with Dymension's broader vision of creating Froopyland, a public test network of networks that aims to explore the potential of a crypto-native internet.

In [Froopyland](https://medium.com/@dymension/froopyland-incentivized-testnet-e407b5f6d4f5), every server and application will be an IBC-enabled instance, capable of demonstrating its validity to all participants. To encourage participation and foster community engagement, Froopyland offers various incentives, including DYM tokens, to different stakeholders such as RollApp deployers, validators, testers, and the creators of the top 10 RollApps. The upcoming launch of Dymension, with its plentiful supply of 1 billion DYM tokens, presents a significant opportunity for builders and enthusiasts to contribute to the project.

Depending on the role, users can participate and earn DYM:

* **RollApp Deployers:** Those with the "RollApp Fam" Discord role have the opportunity to deploy RollApps and earn rewards based on uptime.

* **Validators:** Validator teams can contribute to the security of the Dymension Hub and RollApps, and earn rewards proportional to uptime.

* **Testing Users:** Testers, including "RollApes", will be appreciated for their interactions with the testnet dApps.

* **Top 10 RollApps:** Aim to create one of the top 10 RollApps and receive handsome rewards. Prizes are distributed across three tiers based on performance.

![An image](/dymension-incentives.webp)


## Backers
Dymension successfully concluded a private funding round, raising a total of [$6.7 million](https://www.theblock.co/post/210093/modular-blockchain-dymension-raises-6-7-million-in-private-token-round). The funding round was overseen by Big Brain Holdings and Stratos, and included participation from notable investors such as Shalom Meckenzie of DraftKings and the on-chain gaming DAO Matchbox, among others.

## Resources
Here are official resources related to the [Dymension](https://dymension.xyz/) that you might find useful:

* [Website](https://dymension.xyz/)
* [Twitter](https://twitter.com/dymension)
* [Discord](https://discord.gg/dymension)
* [Blog](https://medium.com/@dymension)
* [Github](https://github.com/dymensionxyz)
* [Docs](https://docs.dymension.xyz/)

Powered by [deNodes](https://twitter.com/_denodes)