

interface User {
    id: string,
    name: string,
    age: number,
    email: string,
    password: string
};

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>
// this Props require a;; three name age email
type UpdatePropsOptional = Partial<UpdateProps>
// this doen't require all three

function updateuser(updatedProps: UpdateProps) {
    // database call
}

function updateuserOptional(updatedProps: UpdatePropsOptional) {
    // database call
}

// readonly
interface Config {
    endpoint: string,
    name: string,
};

const config : Readonly<Config> = {
    endpoint: 'https://api.exapmle.com',
    name: 'example'
}

//Problem with string ans mapping
type Users = {
    [key: string] : Config;
}

const users : Users = {
    "user1": {
        endpoint: 'https://api.exapmle1.com',
        name: 'example1'
    },
    "user2": {
        endpoint: 'https://api.exapmle2.com',
        name: 'example2'
    }
}

// solution  => Record
type Userss = Record<string, Config>

const usersRecord : Userss = {
    "user1": {
        endpoint: 'https://api.exapmle1.com',
        name: 'example1'
    },
    "user2": {
        endpoint: 'https://api.exapmle2.com',
        name: 'example2'
    }
}

// Map

const names = new Map<string, Config>

names.set("example1", {
    endpoint: 'https://api.exapmle.com',
    name: 'example'
})
