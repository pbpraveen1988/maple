import 'whatwg-fetch';


export class ApiResponse {
    public url?: string;
    public status_code?: number;
    public body?: Object;
}


export class WebApi {

    public static checkStatus(resp: ApiResponse): Promise<Object> {

        if (resp.status_code && resp.status_code >= 200 && resp.status_code < 300) {
            return new Promise((resolve, reject) => {
                resolve(resp);
            });
        } else {
            let apiError = {};
            Object.assign(apiError, { error: resp.body });
            throw apiError

        }
    }


    public static readBody(response: Response): Object {
        return new Promise((resolve, reject) => {
            response.text().then((body: string) => {
                const apiResp = new ApiResponse();
                apiResp.url = response.url;
                apiResp.status_code = response.status;

                if (body && Object.keys(body).length > 0) {
                    apiResp.body = JSON.parse(body);
                }

                resolve(apiResp);
            }).catch(reject);
        });
    }

    public static send(url: string, httpMethod: string, body?: Object): Promise<Object> {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        return fetch(url, {
            body: body ? JSON.stringify(body) : undefined,
            credentials: 'include',
            headers: myHeaders,
            method: httpMethod,
        })
            .then(this.readBody)
            .then(this.checkStatus)
            .then((apiResp: ApiResponse) => {
                return new Promise((resolve, reject) => {
                    resolve(apiResp.body);
                });
            });
    }

}
