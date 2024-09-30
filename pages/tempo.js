import Link from "next/link"

function tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    return (
        <div>
            {dynamicDateString} (dinâmico)
            <p>{props.staticDateString} (estático)</p>
            <p><Link href="/">Voltar a Homepage</Link></p>
        </div>
    )
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
};

export default tempo;
