"use strict";
;
// this doen't require all three
function updateuser(updatedProps) {
    // database call
}
function updateuserOptional(updatedProps) {
    // database call
}
;
const config = {
    endpoint: 'https://api.exapmle.com',
    name: 'example'
};
const users = {
    "user1": {
        endpoint: 'https://api.exapmle1.com',
        name: 'example1'
    },
    "user2": {
        endpoint: 'https://api.exapmle2.com',
        name: 'example2'
    }
};
const usersRecord = {
    "user1": {
        endpoint: 'https://api.exapmle1.com',
        name: 'example1'
    },
    "user2": {
        endpoint: 'https://api.exapmle2.com',
        name: 'example2'
    }
};
// Map
const names = new Map;
names.set("example1", {
    endpoint: 'https://api.exapmle.com',
    name: 'example'
});
