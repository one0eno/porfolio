import Layout from "../components/Layout"
export default function Github({user}){

    
    return (
        <>
        <Layout>
            <h1>{user.name}</h1>
        </Layout>
            
        </>
    )

}

export async function getServerSideProps(context){

  const rest = await fetch('https://api.github.com/users/one0eno')
  const data = await rest.json()
  
    return {
        props:{
            user:data
        }
    }
}