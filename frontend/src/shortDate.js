export const shortDate = (dateString) => {
  const options = { month: 'short', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

