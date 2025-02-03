import axios, {AxiosInstance} from 'axios';

export class HttpService {
    private readonly baseUrl: string;
    private readonly instance: AxiosInstance;

    constructor(baseURL = 'http://localhost:5050/record/') {
        this.baseUrl = baseURL;
        this.instance = axios.create({ baseURL: this.baseUrl });
    }

    get defaultHeaders() {
        return {
            'Content-Type': 'application/json',
        };
    }

    request(method: string, url: any, data = null, customHeaders = {}) {
        const headers = { ...this.defaultHeaders, ...customHeaders };
        const source = axios.CancelToken.source();

        const config: any = {
            method,
            url,
            headers,
            cancelToken: source.token
        };

        if (data) {
            config.data = data;
        }

        return {
            request: this.instance(config),
            cancel: source.cancel
        };
    }

    get(url: string, customHeaders = {}) {
        return this.request('get', url, null, customHeaders);
    }

    post(url: string, data: any, customHeaders = {}) {
        return this.request('post', url, data, customHeaders);
    }

    put(url: string, data: any, customHeaders = {}) {
        return this.request('put', url, data, customHeaders);
    }

    delete(url: string, customHeaders = {}) {
        return this.request('delete', url, null, customHeaders);
    }
}