import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(email:string, password:string, firstName:string, lastName:string) {
    const res = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName
        }
    })
    console.log(res);
}

//insertUser("kshitijkumar1@gmail.com","password", "kshitij", "kumar");

interface UpdateParams {
    firstName: string,
    lastName: string
}

async function updateUser(username:string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: {email: username},
        data: {
            firstName,
            lastName
        }
    })

    console.log(res)
}

updateUser('kshitijkumar1@gmail.com', {
    firstName: "1243",
    lastName: "234"
});

