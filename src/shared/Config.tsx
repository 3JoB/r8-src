declare namespace Config {
    interface API {
        address: string;
        key: string;
    }
}

export let settings: Config.API = {
    address: 'http://127.0.0.1',
    key: '',
  }