export function formatDate(date) {
  return new Date(date).toLocaleDateString("pt-BR",{timeZone: 'UTC'})
}
