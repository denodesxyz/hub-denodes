Install or update cli

```
curl -sSfL -O https://github.com/penumbra-zone/penumbra/releases/download/v0.71.0/pcli-x86_64-unknown-linux-gnu.tar.xz
unxz pcli-x86_64-unknown-linux-gnu.tar.xz
tar -xf pcli-x86_64-unknown-linux-gnu.tar
sudo mv pcli-x86_64-unknown-linux-gnu/pcli /usr/local/bin/

pcli --version
```
Make sure that the version used is v0.71.0

Reset the state to avoid conflict with the previous version:
```
pcli view reset
```

Requesting the address to receive the test tokens
```
pcli view address
```

Send the address to the discord channel to receive the test tokens. Wait for the bot to reply in Discord and check the balance:
```
pcli view balance
```

After the tokens have arrived at the address, execute the command (60penumbra minimum bid):
```
pcli ceremony contribute --phase 2 --bid 60penumbra
```

pcli will output your contribution hash after submission. You can post this hash, for example on Twitter or Penumbra Discord, stating your participation and this allows others to verify that your contribution was included in the transcript!



