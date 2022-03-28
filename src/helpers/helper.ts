export const formatCurrency = (orderCost: number) => {
  if (!orderCost) return null;
  const formatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
  return formatter.format(orderCost).replace('$', '');
};
