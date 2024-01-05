# Node Setup Guide (Russian)

Namada: Node Setup Guide in Russian

![An image](/namada-node-setup.svg)

Добро пожаловать в гайд по установке ноды и участию в тестовой сети Namada подготовленный командой [deNodes](http://denodes.xyz/). Следуйте этим пошаговым инструкциям, чтобы начать процесс установки.

## Требования к оборудованию 

Мы рекомендуем следующие минимальные требования к оборудованию для ноды Namada: 
* Оборудование: **8 GB RAM, 6 Cores, 500 SSD**
* ОС: **Ubuntu Linux 20.04 (LTS)**

## Начало процесса

Обновляем систему:
```bash
apt update && sudo apt upgrade -y
apt install jq -y
```

Устанавливаем CometBFT:
```bash
mkdir -p $HOME/cometbft && cd $HOME/cometbft
wget -O cometbft.tar.gz https://github.com/cometbft/cometbft/releases/download/v0.37.2/cometbft_0.37.2_linux_amd64.tar.gz
tar -xvf cometbft.tar.gz
cp cometbft /usr/local/bin
cd $HOME
rm -rf ./cometbft
```

Скачиваем готовые бинарные файлы Namada:
```bash
mkdir -p $HOME/namada && cd $HOME/namada
wget -O namada.tar.gz "$(curl -s "https://api.github.com/repos/anoma/namada/releases/latest" | grep "browser_download_url" | cut -d '"' -f 4 | grep "Linux")"
tar -xzvf namada*.tar.gz --strip-components 1
cp ./namada* /usr/local/bin/
cd $HOME
rm -rf ./namada
```

Задаем переменные окружения:
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

Присоединяемся к сети:
```bash
namada client utils join-network --chain-id $CHAIN_ID
```

Создаем сервисный файл:
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

Включаем сервис и запускаем его:
```bash
systemctl daemon-reload
systemctl enable namadad
systemctl start namadad
```

Создаем новый кошелек:
```bash
namada wallet address gen --alias $NAMADA_WALLET
```

Пополняем созданный кошелек из крана https://faucet.heliax.click/

После этого нужно дождаться полной синхронизации ноды. Для этого контролируем баланс кошелька и статус синхронизации.

#### Проверка баланса
Проверяем баланс следующей командой:

```bash
namada client balance --owner $NAMADA_ALIAS --token NAM
```

#### Статус синхронизации 
Для проверки статуса синхронизации вводим следующую команду:
```bash
curl http://127.0.0.1:26657/status | jq .result.sync_info.catching_up
```

```note
Должно быть значение false.
```

#### Создание валидатора
Когда синхронизация завершилась и токены поступили на баланс, переходим к созданию валидатора. 

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
Комиссию можно указать на свое усмотрение. 
В примере используется комиссия валидатора 5% и возможностью изменения на 1%.
```

Теперь нужно застейкать имеющиеся токены в своего валидатора:

```bash
namada client bond \
  --validator $NAMADA_ALIAS \
  --amount 1000
```

Ждем две эпохи и проверяем стейк:

```bash
namada client bonds --owner $NAMADA_ALIAS
```

Текущую эпоху можно получить следующей командой:

```bash
namada client epoch
```

## Выход из тюрьмы (Jail)

В некоторых случаях активный валидатор может быть отправлен в "тюрьму" и не участвует в консенсусе. Например, если нода потеряла синхронизацию и в течение определенного времени не подписывала блоки.  

После того как проблема с нодой будет решена, чтобы вернуться в активный сет нужно выполнить команду:

```bash
namada client unjail-validator --validator $NAMADA_ALIAS --signing-keys $NAMADA_WALLET
```

## Полезные команды 

Список полезных команд включает способы управления и мониторинга ноды Namada: 

* Просмотр логов

```bash
journalctl -fu namada -o cat
```

* Получить список всех валидаторов и сумму застейканых (самостоятельно и делегированных) токенов

```bash
namada client bonded-stake
```

* Удалить ноду
```bash
sudo systemctl stop namadad
sudo systemctl disable namadad
sudo rm -rf /etc/systemd/system/namadad.service
sudo systemctl daemon-reload
sudo rm /usr/local/bin/namada*
sudo rm -rf $HOME/.local/share/namada
```
