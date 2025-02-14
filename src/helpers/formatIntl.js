const formatIntl = ( { locale, currency, minimumFractionDigits, maximumFractionDigits, convertedPrice })=>{
  return new Intl.NumberFormat(locale, {
    style:'currency',
    minimumFractionDigits,
    maximumFractionDigits,
    currency
  }).format(convertedPrice);
};

export default formatIntl;