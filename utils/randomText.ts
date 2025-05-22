export function randomText(length: number = 5) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from(
    {length},
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join('');
}

export function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
