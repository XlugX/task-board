export const data = [
    //date
    {
        id: '69ca630c-2963-48b7-8a1c-5fab18743e4a',
        nameOwner: 'Vladimir Bedulya',
        taskTopic: 'feature',
        dueDate: '2022-11-16T17:21:15.238Z',
    },
    {
        id: '18b761f6-72a8-47f3-88b4-49e1b17fc14e',
        nameOwner: 'Aleksandr Lugchenko',
        taskTopic: 'bugfix',
        dueDate: '2022-11-03T17:21:15.238Z',
    },
    {
        id: '55b70089-8f82-46ca-bed9-932b010da4c5',
        nameOwner: 'Vladimir Bedulya',
        taskTopic: 'feature',
        dueDate: '2022-10-26T17:21:15.238Z',
    },
    {
        id: '2219da82-cf2a-4dcd-b20c-d38f3bb63642',
        nameOwner: 'John Doe',
        taskTopic: 'bugfix',
        dueDate: '2022-11-06T17:21:15.238Z',
    },
    {
        id: '35ce4d70-5e98-4b78-a372-91d886a42210',
        nameOwner: 'Brus li',
        taskTopic: 'feature',
        dueDate: '2022-11-11T17:21:15.238Z',
    },
    {
        id: '1eecebe3-ebd8-4a06-bf33-23ed30f27fb8',
        nameOwner: 'John Doe',
        taskTopic: 'feature',
        dueDate: '2022-10-23T17:21:15.238Z',
    },
    {
        id: '6b2027b2-35aa-4de2-b3ca-20f143028676',
        nameOwner: 'John Doe',
        taskTopic: 'bugfix',
        dueDate: '2022-11-14T17:21:15.238Z',
    },
    {
        id: 'bc626679-1cba-4a3d-9cf2-cb9d5c11d9ea',
        nameOwner: 'Ivan Ivanow',
        taskTopic: 'feature',
        dueDate: '2022-11-13T17:21:15.238Z',
    },
    {
        id: 'f1c777f0-0cc4-47f1-8131-b135c17bb330',
        nameOwner: 'Aleksandr Lugchenko',
        taskTopic: 'feature',
        dueDate: '2022-11-01T17:21:15.238Z',
    },
    {
        id: '62e8ab36-ebef-427d-864c-004e7affdd1c',
        nameOwner: 'John Wik',
        taskTopic: 'bugfix',
        dueDate: '2022-11-05T17:21:15.238Z',
    },
];

const test = ['12', '13', '14', '15', '20', '25'];

const newReverse = arr => {
    const result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
};

const revers = arr => arr.reduce((acc, val) => [val, ...acc], []);
console.log(revers([1, 2, 3]));

const result = {
    Aleksandr: {
        task: [{}, {}],
        lastTask: {},
    },
};
