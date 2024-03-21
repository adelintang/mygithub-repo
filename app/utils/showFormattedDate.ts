export default function showFormattedDate (dateTime: string) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }
  
  return new Date(dateTime).toLocaleString('id-ID', options)
}