export const formatRating = (rating: number): string => {
  return rating.toFixed(1);
};

export const formatYear = (dateString: string): string => {
  return new Date(dateString).getFullYear().toString();
};

export const formatRuntime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(amount);
};