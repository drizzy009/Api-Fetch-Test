import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'

 function Index({users}) {

  const router = useRouter()
  return (
    <div className='m-5'>
        <h3>Users List</h3>
        <table className='table table-dark table-striped table-bordered mt-5'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user=>{
              return <tr onClick={()=>{router.push(`/users/${user.id}`)}}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            })}
          </tbody>
        </table>
        <hr/>
        <p className='text-center mt-5'>Go back to <Link to href='/'><button className='btn btn-danger'>Homepage</button></Link></p>
    </div>
  )
}

export default Index;

export async function getStaticProps (){
        try {
            const response = await axios.get(
              'https://jsonplaceholder.typicode.com/users/'
            )

            return{
                props :{
                    users : response.data
                }
            }
        } catch (error) {
            console.log(error)
        }
}
