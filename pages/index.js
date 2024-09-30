import Link from "next/link"

function Home() {
    return  <div>
        <h1>Home</h1>
        <Link href="/sobre">Acesse o sobre</Link>
        <p>
            <Link href="/tempo">Veja data/hora</Link>
        </p>
    </div>
}

export default Home