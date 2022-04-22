import { getKey } from '../helper/get';
import { userRole, userStatus } from './constains'

export const getKeyUsers = (index) => {
    const list = []
    for(let i = 0 ; i <= 12; i++) {
        list.push(getKey())
    }
    return list[index]
} 

export const getKeyTenants = (index) => {
    const list = []
    for(let i = 0 ; i <= 12; i++) {
        list.push(getKey())
    }
    return list[index]
} 

export const dataUser = [
    {
        key: '1',
        id: getKeyUsers(0),
        name: 'Id pulvinar pharetra',
        username: `username-${getKeyUsers(0)}`,
        email: `${getKeyUsers(0)}@gmail.com`,
        tags: userStatus.valid,
        role: userRole.editor,
        createdAt: new Date().toLocaleString(),
    },
    {
        key: '2',
        id: getKeyUsers(1),
        name: 'Id pulvinar pharetra',
        username: `username-${getKeyUsers(1)}`,
        email: `${getKeyUsers(1)}@gmail.com`,
        tags: userStatus.invalid,
        role: userRole.editor,
        createdAt: new Date().toLocaleString(),
    },
    {
        key: '3',
        id: getKeyUsers(2),
        name: 'Id pulvinar pharetra',
        username: `username-${getKeyUsers(2)}`,
        email: `${getKeyUsers(2)}@gmail.com`,
        tags: userStatus.valid,
        role: userRole.editor,
        createdAt: new Date().toLocaleString()
    },
    {
        key: '4',
        id: getKeyUsers(3),
        name: 'Id pulvinar pharetra',
        username: `username-${getKeyUsers(3)}`,
        email: `${getKeyUsers(3)}@gmail.com`,
        tags: userStatus.valid,
        role: userRole.editor,
        createdAt: new Date().toLocaleString()
    },
    {
        key: '5',
        id: getKeyUsers(4),
        name: 'Id pulvinar pharetra',
        username: `username-${getKeyUsers(4)}`,
        email: `${getKeyUsers(4)}@gmail.com`,
        tags: userStatus.invalid,
        role: userRole.editor,
        createdAt: new Date().toLocaleString(),
    },
    {
        key: '6',
        id: getKeyUsers(5),
        name: 'Id pulvinar pharetra',
        username: `username-${getKeyUsers(5)}`,
        email: `${getKeyUsers(5)}@gmail.com`,
        tags: userStatus.valid,
        role: userRole.editor,
        createdAt: new Date().toLocaleString()
        
    },
    {
        key: '7',
        id: getKeyUsers(6),
        name: 'Id pulvinar pharetra',
        username: `username-${getKeyUsers(6)}`,
        email: `${getKeyUsers(6)}@gmail.com`,
        tags: userStatus.invalid,
        role: userRole.editor,
        createdAt: new Date().toLocaleString(),
    },
    {
        key: '8',
        id: getKeyUsers(7),
        name: 'Id pulvinar pharetra',
        username: `username-${getKeyUsers(7)}`,
        email: `${getKeyUsers(7)}@gmail.com`,
        tags: userStatus.invalid,
        role: userRole.editor,
        createdAt: new Date().toLocaleString(),
    },
    {
        key: '9',
        id: getKeyUsers(8),
        name: 'Id pulvinar pharetra',
        username: `username-${getKeyUsers(8)}`,
        email: `${getKeyUsers(8)}@gmail.com`,
        tags: userStatus.valid,
        role: userRole.editor,
        createdAt: new Date().toLocaleString()
    },
    {
        key: '10',
        id: getKeyUsers(9),
        name: 'Id pulvinar pharetra',
        username: `username-${getKeyUsers(9)}`,
        email: `${getKeyUsers(9)}@gmail.com`,
        tags: userStatus.valid,
        role: userRole.editor,
        createdAt: new Date().toLocaleString()
    },
    {
        key: '11',
        id: getKeyUsers(10),
        name: 'Id pulvinar pharetra',
        username: `username-${getKeyUsers(10)}`,
        email: `${getKeyUsers(10)}@gmail.com`,
        tags: userStatus.invalid,
        role: userRole.editor,
        createdAt: new Date().toLocaleString(),
    },
    {
        key: '12',
        id: getKeyUsers(11),
        name: 'Id pulvinar pharetra',
        username: `username-${getKeyUsers(11)}`,
        email: `${getKeyUsers(11)}@gmail.com`,
        tags: userStatus.valid,
        role: userRole.editor,
        createdAt: new Date().toLocaleString()
    },
];

export const tenantData = [
    {
        key: '1',
        id: getKeyTenants(0),
        name: 'Id pulvinar pharetra',
        createdBy: `username-${getKeyTenants(0)}`,
        member: [
            dataUser[0],
            dataUser[1],
            dataUser[2],
            dataUser[3],
            dataUser[4],
            dataUser[5],
            dataUser[6],
            dataUser[8],
        ],
        createdAt: new Date().toLocaleString(),
    },
    {
        key: '2',
        id: getKeyTenants(1),
        name: 'Id pulvinar pharetra',
        createdBy: `username-${getKeyTenants(1)}`,
        member: [
            dataUser[0],
            dataUser[1],
            dataUser[2],
            dataUser[3],
            dataUser[4],
            dataUser[5],
            dataUser[6],
            dataUser[9],
        ],
        createdAt: new Date().toLocaleString(),
    },
    {
        key: '3',
        id: getKeyTenants(2),
        name: 'Id pulvinar pharetra',
        createdBy: `username-${getKeyTenants(2)}`,
        member: [
            dataUser[0],
            dataUser[1],
            dataUser[2],
            dataUser[3],
            dataUser[4],
            dataUser[5],
            dataUser[11],
            dataUser[10],
        ],
        createdAt: new Date().toLocaleString()
    },
    {
        key: '4',
        id: getKeyTenants(3),
        name: 'Id pulvinar pharetra',
        createdBy: `username-${getKeyTenants(3)}`,
        member: [
            dataUser[0],
            dataUser[1],
            dataUser[2],
            dataUser[5],
            dataUser[6],
            dataUser[7],
            dataUser[8],
            dataUser[9],
        ],
        createdAt: new Date().toLocaleString()
    },
    {
        key: '5',
        id: getKeyTenants(4),
        name: 'Id pulvinar pharetra',
        createdBy: `username-${getKeyTenants(4)}`,
        member: [
            dataUser[0],
            dataUser[1],
            dataUser[2],
            dataUser[8],
            dataUser[7],
            dataUser[6],
            dataUser[5],
            dataUser[4],
        ],
        createdAt: new Date().toLocaleString(),
    },
    {
        key: '6',
        id: getKeyTenants(5),
        name: 'Id pulvinar pharetra',
        createdBy: `username-${getKeyTenants(5)}`,
        member: [
            dataUser[0],
            dataUser[1],
            dataUser[2],
            dataUser[5],
            dataUser[6],
            dataUser[7],
            dataUser[8],
            dataUser[9],
        ],
        createdAt: new Date().toLocaleString()
    },
    {
        key: '7',
        id: getKeyTenants(6),
        name: 'Id pulvinar pharetra',
        createdBy: `username-${getKeyTenants(6)}`,
        member: [
            dataUser[0],
            dataUser[1],
            dataUser[2],
            dataUser[3],
            dataUser[4],
            dataUser[5],
            dataUser[6],
            dataUser[7],
        ],
        createdAt: new Date().toLocaleString(),
    },
    {
        key: '8',
        id: getKeyTenants(7),
        name: 'Id pulvinar pharetra',
        createdBy: `username-${getKeyTenants(7)}`,
        member: [
            dataUser[0],
            dataUser[1],
            dataUser[2],
            dataUser[3],
            dataUser[4],
            dataUser[5],
            dataUser[6],
            dataUser[7],
        ],
        createdAt: new Date().toLocaleString(),
    },
    {
        key: '9',
        id: getKeyTenants(8),
        name: 'Id pulvinar pharetra',
        createdBy: `username-${getKeyTenants(8)}`,
        member: [
            dataUser[0],
            dataUser[1],
            dataUser[2],
            dataUser[3],
            dataUser[4],
            dataUser[5],
            dataUser[6],
            dataUser[7],
        ],
        createdAt: new Date().toLocaleString()
    },
    {
        key: '10',
        id: getKeyTenants(9),
        name: 'Id pulvinar pharetra',
        createdBy: `username-${getKeyTenants(9)}`,
        member: [
            dataUser[0],
            dataUser[1],
            dataUser[2],
            dataUser[3],
            dataUser[4],
            dataUser[5],
            dataUser[6],
            dataUser[7],
        ],
        createdAt: new Date().toLocaleString()
    },
    {
        key: '11',
        id: getKeyTenants(10),
        name: 'Id pulvinar 2',
        createdBy: `username-${getKeyTenants(10)}`,
        member: [
            dataUser[0],
            dataUser[1],
            dataUser[2],
            dataUser[3],
            dataUser[4],
            dataUser[5],
            dataUser[6],
            dataUser[7],
        ],
        createdAt: new Date().toLocaleString(),
    },
    {
        key: '12',
        id: getKeyTenants(11),
        name: 'Id pulvinar 1',
        createdBy: `username-${getKeyTenants(11)}`,
        member: [
            dataUser[0],
            dataUser[1],
            dataUser[2],
            dataUser[3],
            dataUser[4],
            dataUser[5],
            dataUser[6],
            dataUser[7],
        ],
        createdAt: new Date().toLocaleString()
    },
]