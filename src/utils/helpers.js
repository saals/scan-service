export const isAccessTokenExpire = (expire) => {
  if (!Boolean(expire)) return true

  const end = new Date(expire)
  const now = new Date()

  return now - end > 0
}
