// SPA - não é melhor estratégia quando você precisa que os dados apareçam imediatamente pro usuário
// SSR
// SSG - página estática, HTML puro. É gerada uma vez para acesso.

export default function Home(props) {
console.log(props.episodes)

  return (
    <h1>Index</h1>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}

