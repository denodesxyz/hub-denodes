Install or update cli

```
curl -sSfL -O https://github.com/penumbra-zone/penumbra/releases/download/v0.71.0/pcli-x86_64-unknown-linux-gnu.tar.xz
unxz pcli-x86_64-unknown-linux-gnu.tar.xz
tar -xf pcli-x86_64-unknown-linux-gnu.tar
sudo mv pcli-x86_64-unknown-linux-gnu/pcli /usr/local/bin/

pcli --version
```
Make sure that the version used is v0.71.0

Generate a wallet if this is a new installation
```
pcli init soft-kms generate
```

Reset the state to avoid conflict with the previous version:
```
pcli view reset
```

Requesting the address to receive the test tokens
```
pcli view address
```

Send the address to the discord [channel](https://discord.com/channels/824484045370818580/915710851917439060) to receive the test tokens. Wait for the bot to reply in Discord and wait for the balance:
```
pcli view balance
```

Before we start the ceremony, we start a screen session:
```
screen -S summoning
```

Finally execute the command (60penumbra minimum bid):
```
pcli ceremony contribute --phase 2 --bid 60penumbra
```
The terminal can then be safely closed. To restore the session, execute ```screen -r```

pcli will output your contribution hash after submission. You can post this hash, for example on Twitter or Penumbra Discord, stating your participation and this allows others to verify that your contribution was included in the transcript!



