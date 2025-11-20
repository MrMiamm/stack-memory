export default function(theme: string | null | undefined) {
  if (import.meta.client) {
    if (theme === 'dark' || !theme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
