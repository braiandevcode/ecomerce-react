import { configApiHead, configUrlAPI } from '../config/config';

// API CPNVERSION DE MONEDAS
export const queryConvert = async ({ toMoney, fromMoney, amount }) => { 
  const OPTIONS_CONFIG = configApiHead();
  // URL API
  const { URL_API, PATH_CONVERT, TO, FROM, AMOUNT, DATE }= configUrlAPI({ toMoney, fromMoney, amount });
  const URL = `${URL_API}${PATH_CONVERT}${TO}${FROM}${AMOUNT}${DATE}`;
  try {
    const result = await fetch(URL, {...OPTIONS_CONFIG });
    if(!result.ok){
      throw new Error('Ocurrió un error');
    }
    const resultJson = await result.json();
    return resultJson.result;
  } catch (e) {
    return e.message;
  }
};
  