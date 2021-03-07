const GROUP_ID_1 = '1234';
const GROUP_ID_2 = '2345';
const GROUP_ID_3 = '3456';

const USER_ID_1 = 'xLjZ8k2xD0Rvh1EXvgyOwTlxFeu2';
const USER_ID_2 = 'aiMduKq7RjTMPbvmmaEIzBAsKTh2';
const USER_ID_3 = '4uyWasy9p0T5qY28AB2FmHXAz4m2';

export const groups = [{
    id: GROUP_ID_1,
    name: 'The Cool People Group',
    ownerId: USER_ID_1,
    members: [USER_ID_1, USER_ID_3],
}, {
    id: GROUP_ID_2,
    name: 'Programmers Unite',
    ownerId: USER_ID_2,
    members: [USER_ID_2, USER_ID_1],
}, {
    id: GROUP_ID_3,
    name: 'DIYers Group',
    ownerId: USER_ID_3,
    members: [USER_ID_3, USER_ID_2],
}];

export const requests = [{
    id: '123',
    userId: USER_ID_3,
    groupId: GROUP_ID_2,
}, {
    id: '234',
    userId: USER_ID_1,
    groupId: GROUP_ID_3,
}, {
    id: '345',
    userId: USER_ID_2,
    groupId: GROUP_ID_1,
}];

export const messages = [{
    userId: USER_ID_1,
    groupId: GROUP_ID_1,
    text: 'Hello everyone!'
}, {
    userId: USER_ID_3,
    groupId: GROUP_ID_1,
    text: 'Hey Victor, welcome to the group!'
}, {
    userId: USER_ID_2,
    groupId: GROUP_ID_2,
    text: 'Good morning programmers, let\'s write some code',
}, {
    userId: USER_ID_1,
    groupId: GROUP_ID_2,
    text: 'Yes indeed, let\'s.',
}, {
    userId: USER_ID_3,
    groupId: GROUP_ID_3,
    text: 'I built ten tables yesterday. I think I have an obsession',
}, {
    userId: USER_ID_2,
    groupId: GROUP_ID_3,
    text: 'Only ten?',
}];

export const users = [{
    id: USER_ID_1,
    email: 'vhugo@gmail.com',
    fullName: 'Victor Hugo',
}, {
    id: USER_ID_2,
    email: 'jsmith@gmail.com',
    fullName: 'John Smith',
}, {
    id: USER_ID_3,
    email: 'hjones@gmail.com',
    fullName: 'Hannah Jones',
}];