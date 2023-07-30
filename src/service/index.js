import { api } from './api';


export const buscarMotorista =  () => {
    const url = '/motorista';
    return api.get(url);    
}

export const buscarTodosVeiculos =  () => {
    const url = '/veiculo';
    return  api.get(url);    
}

export const buscarTodasOrigem =  () => {
    const url = '/origem';
    return  api.get(url);    
}


export const buscarTodasLoja =  () => {
    const url = '/loja';
    return api.get(url);    
}

export const adicionarViagem =  (data) => {
    const url = "/viagem";
    return api.post(url, data);
} 

export const bucsarViagem =  () => {
    const url = "/viagem";
    return api.get(url);
} 

export const bucsarViagemPorData =  (data) => {
        console.log(data)
        const url = `/viagem?data=${data}`;
        return api.get(url);

    
} 

export const bucsarViagemPorId =  (id) => {
    const url = `/viagem/${id}`;
    return api.get(url);
} 

export const iniciarCarregamento =  (id) => {
    const url = `/acoes/inicioCarregamento/${id}?id=${id}`;
    return api.post(url);
}

export const fimCarregamento =  (id) => {
    const url = `/acoes/fimCarregamento/${id}?id=${id}`;
    return api.post(url);
}


export const saidaCD =  (id) => {
    const url = `/acoes/saidaCD/${id}?id=${id}`;
    return api.post(url);
}


export const chegadaLoja =  (id) => {
    const url = `/acoes/chegadaLoja/${id}?id=${id}`;
    return api.post(url);
}


export const saidaLoja =  (id) => {
    const url = `/acoes/saidaLoja/${id}?id=${id}`;
    return api.post(url);
}


export const chegadaCD =  (id) => {
    const url = `/acoes/chegadaCD/${id}?id=${id}`;
    return api.post(url);
}