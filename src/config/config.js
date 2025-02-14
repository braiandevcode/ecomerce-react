export const configUrlAPI = ({toMoney, fromMoney, amount })=>{
  const today = new Date();
  const formatDate = today.toISOString().split('T');
  return {
    URL_API :import.meta.env.VITE_URL_API,
    PATH_CONVERT:import.meta.env.VITE_PATH_CONVERT,
    TO: `to=${toMoney}&`,
    FROM:  `from=${fromMoney}&`,
    AMOUNT:`amount=${amount}&`,
    DATE: `date=${formatDate[0]}`,
  };
};

export const configApiHead = ()=>{
  return {
    headers: {
      'apikey': import.meta.env.VITE_API_KEY,
    }
  };
};

// eslint-disable-next-line no-undef
export const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';