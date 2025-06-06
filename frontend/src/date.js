//returns elapsed time

export const elapsedTime = (timestamp)=> {
  const now = new Date();
  const time = new Date(timestamp);
  const diff = (now - time) / 1000; // in seconds

  if (diff < 3600) {
    const mins = Math.floor(diff / 60);
    return `${mins || 1} min${mins !== 1 ? 's' : ''} ago`;
  }

  if (diff < 86400) {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  if (diff < 604800) {
    return time.toLocaleDateString(undefined, { weekday: 'short' });//can say long
  }

  return time.toISOString().split('T')[0]; // YYYY-MM-DD
}
