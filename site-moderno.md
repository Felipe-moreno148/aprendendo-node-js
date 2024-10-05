## como dar commit

git status
git add -A
git commit -m 'titulo'

## mandar pro github

git push origin main (ou outra branch)

## criar branch

git checkout -b nome

## Páginas dinâmicas

Para caso opte por melhor SEO, sacrificando a performance   

`import { useRouter } from "next/router";
export async default getServersideProps(context) {

    const id = context.query.id;

    return {
        props: {
            id: id
        }
    }

}
export default produtos () {

    return <div>Id do produto: {props.id}</div>

}
export default produtos;`