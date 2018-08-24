class GloboAbSdk {
    urlBase: string = 'http://globo.com';

    requestVariations(experimentId: string[], registerImpression: boolean) {
        experimentId.map((experiment: string) => {
            const url = `${this.urlBase}/${registerImpression ? `ab/${experiment}` : `ab/version/${experiment}`}`;

            fetch(url).then((response) => {
                if(response.status === 200) {
                    window.console.log(url, 'Sorteio realizado.');
                } else {
                    window.console.log(`Erro: ${response.status}`);
                }
            }).catch((error) => {
                console.log(error);
            });
        });
    }

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