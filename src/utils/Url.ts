export class Url {
    public static BaseUrl = '.inquickerstaging.com';
    public static apiPrefix = 'api';
    public static apiVersion = '/v3';
    public static ServiceUrl = '/winter.inquickerstaging.com/services';
    public static ProviderUrl = '/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&amp;page%5Bnumber%5D=1&amp;page%5Bsize%5D=10'
    public static httpsEnabled = true;

    public static generateUrl(params?: { type: string, filter?: any }) {
        let url = '';
        url += Url.httpsEnabled ? 'https://' : 'http://';
        url += this.apiPrefix + this.BaseUrl + this.apiVersion;
        return url;
    }


    public static generateServiceUrl() {
        let url = this.generateUrl();
        url += this.ServiceUrl;
        return url;
    }

    public static generateProviderUrl() {
        let url = this.generateUrl();
        url += this.ProviderUrl;
        return url;
    }
}