import { Prisma, User } from "@prisma/client"
import { prisma } from "../../../utils/prismadb"
import axios from "axios";


// export async function getAccounts() {
//     // try {
//     //     // const users = await prisma.user.findMany();
//     //     // return {succes: true, data: users}
//     // } catch (error) {
//     //     return {succes: false, error: "Ophalen van accounts/users is niet gelukt!"}
//     // }
//     try {
//         const response = await axios.get('http://localhost:3000/api/user');
//         const output = await Promise.all([response]);

//         return output;
        
//     } catch (e) {
//         console.log(e);
        
//     }



// }

const url = 'http://localhost:3000/api/user'

const getUsers = async (): Promise<User[]> => {
    const res = await fetch(url)
    
    return res.json()
}

export default getUsers;




