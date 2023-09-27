export const calculateTimeToEvent = () => {
  const eventDate = new Date("2023-10-12T09:00:00-07:00")
  const now = new Date()

  const timeRemaining = eventDate.getTime() - now.getTime()

  const TO_SECONDS = 1000
  const TO_MINUTES = TO_SECONDS * 60
  const TO_HOURS = TO_MINUTES * 60
  const TO_DAYS = TO_HOURS * 24

  const days = Math.floor(timeRemaining / TO_DAYS)
  const hours = Math.floor((timeRemaining % TO_DAYS) / TO_HOURS)
  const minutes = Math.floor((timeRemaining % TO_HOURS) / TO_MINUTES)
  const seconds = Math.floor((timeRemaining % TO_MINUTES) / TO_SECONDS)

  return { days, hours, minutes, seconds }
}
