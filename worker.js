export default {
  fetch: req => {
    const url = new URL(req.url)
    if (url.pathname == '/') return fetch('https://longtailstudio.github.io/page.as')
    const [user] = url.hostname.split('.')
    url.hostname = user + '.github.io'
    return fetch(url.toString(), req)
  }
}
