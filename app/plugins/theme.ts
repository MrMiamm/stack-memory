export default defineNuxtPlugin(() => {
  const theme = useCookie('theme')

  onNuxtReady(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (!theme.value || theme.value === '') {
      theme.value = prefersDark ? 'dark' : 'light'
    }
  })

  //Si le cookie change → on met à jour immédiatement
  watchEffect(() => {
    toggleTheme(theme.value)
  })
})
