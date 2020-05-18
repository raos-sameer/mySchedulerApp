export const validateEmail = (email) => {
    if (/\w+([a-z][A-Z])*@\w+([a-z][A-Z])*.\w+([a-z][A-Z])*/g.test(email))
  {
    return (true)
  }
    return (false)
}