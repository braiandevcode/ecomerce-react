export const configUrlAPI = ({toMoney, fromMoney, amount })=>{
  const today = new Date();
  const formatDate = today.toISOString().split('T');
  return {
    URL_API :'https://api.apilayer.com/',
    PATH_CONVERT:'exchangerates_data/convert?',
    TO: `to=${toMoney}&`,
    FROM:  `from=${fromMoney}&`,
    AMOUNT:`amount=${amount}&`,
    DATE: `date=${formatDate[0]}`,
  };
};

export const configApiHead = ()=>{
  return {
    headers: {
      'apikey': '6rSfq72fag0ERNmVZQQZY4HAmBrgRzLA',
    }
  };
};

// eslint-disable-next-line no-undef
export const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production';