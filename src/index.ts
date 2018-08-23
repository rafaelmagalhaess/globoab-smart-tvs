class GloboAbSdk {
    urlBase: string = 'http://globo.com';

    registerImpression(experimentId: string): void {
        if(!experimentId) {
            window.console.log('ID do experimento é obrigatório');
            return;
        }

        const url = `${this.urlBase}/${experimentId}`;
        
        fetch(url).then((response) => {
            if(response.status === 200) {
                window.console.log(url, 'Impressão registrada');
            } else {
                window.console.log(`Erro: ${response.status}`);
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    registerConversion(experimentId: string): void {
        if(!experimentId) {
            window.console.log('ID do experimento é obrigatório');
            return;
        }

        const url = `${this.urlBase}/convert/${experimentId}/2`;
        
        fetch(url).then((response) => {
            if(response.status === 200) {
                window.console.log(url, 'Conversão registrada');
            } else {
                window.console.log(`Erro: ${response.status}`);
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}