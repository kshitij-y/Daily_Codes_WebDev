import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
    username: string, 
    password: string,
    firstname: string,
    lastname: string,
    email: string
    ){
    const response = await prisma.user.create({
        data: {
            username,
            password,
            firstname,
            lastname,
            email
        }
    })
    console.log(response);
}

//insertUser("test16", "test16pass", "f6name", "l6name", "test6@gmail.com");
async function insertTodo(
    title: string, 
    description: string,
    user_id: number
  ) {
    const response = await prisma.todo.create({
      data: {
        title,
        description,
        user_id,
      }
    });
    console.log(response);
}

async function getTodos(user_id: number) {
    const response = await prisma.todo.findMany({
        where: {
            user_id: user_id
        }
    })
    console.log(response);
}
getTodos(1);

