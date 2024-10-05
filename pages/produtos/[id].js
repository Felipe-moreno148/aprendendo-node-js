import { useRouter } from "next/router";

function produtos () {
    const router = useRouter();
    const id = router.query.id;
    
    return <div>Id do produto: {id}</div>
}

export default produtos;