import { data } from './utils.js';
const inputs = document.querySelectorAll('.input');
const submit = document.querySelector('.button');
const contentBlock = document.querySelector('.content');

const dataStorage = () => JSON.parse(localStorage.getItem('taskDate'));
let content = dataStorage() || [];

const sortDate = (data, property = 'name') => {
    return data.reduce((prev, item) => {
        const name = item.nameOwner;
        const topic = item.taskTopic;

        if (property === 'name') {
            if (!prev?.hasOwnProperty(name)) {
                prev[name] = {
                    task: [item],
                    lastTask: item,
                };
            } else {
                prev[name].task = [...prev[name].task, item];
            }

            if (new Date(prev[name]?.lastTask?.dueDate).valueOf() <= new Date(item.dueDate).valueOf()) {
                prev[name].lastTask = item;
            }
        }

        if (property === 'topic') {
            if (!prev?.hasOwnProperty(topic)) {
                prev[topic] = [item];
            } else {
                prev[topic] = [...prev[topic], item];
            }
        }

        return prev;
    }, {});
};

const showInfo = content => {
    const data = content
        ?.map(
            item => `<div>
        <div>Имя: ${item?.nameOwner}</div>
        <div>Тип задачи: ${item?.taskTopic}</div>
        <div>Номер задачи: ${item?.id}</div>
        <div>${item?.description ? `Описание: ${item?.description}` : ''}</div>
        </div>`
        )
        .join('');

    contentBlock.innerHTML = data;
};

if (!!content) {
    showInfo(content?.flat());
}

submit.addEventListener('click', () => {
    const result = {};
    let response = [];
    inputs.forEach(input => {
        console.log(input.name);
        result[input.name] = input.value;
        result.id = Number(Math.floor(Math.random() * 101) * Math.floor(Math.random() * 101));
        result.dueDate = new Date();
    });

    localStorage.setItem('taskDate', JSON.stringify([...content, result]));
    response = dataStorage();
    showInfo(response);
    content = sortDate(response, 'name');
});
