import inquirer from 'inquirer';


import 'colors';

const menuOptions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.magenta} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.magenta} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.magenta} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.magenta} Listar tareas incompletas`
            },
            {
                value: '5',
                name: `${'5.'.magenta} Completar tarea`
            },
            {
                value: '6',
                name: `${'6.'.magenta} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.magenta} salir`
            },

        ],
    }
];

const inquirerMenu = async () => {

    console.clear()
    console.log('======================'.cyan);
    console.log('------Bienvenido------'.magenta);
    console.log('======================'.cyan);

    const { option } = await inquirer.prompt(menuOptions);

    return option;
}

const pause = async () => {
    const question = [{
        type: 'question',
        name: 'enter',
        message: `Presione ${'ENTER'.magenta} para continuar`
    }
    ]
    // console.log('\n')
    await inquirer.prompt(question);

}

const readInput = async (message) => {
    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value === 0) {
                return 'Por favor ingrese un valor'.bgCyan
            }
            return true;
        }
    }
    ]
    // console.log('\n')
    const { desc } = await inquirer.prompt(question);
    return desc;

}


const listTaskDelete = async (tasks = []) => {
    const choices = tasks.map((task, i) => {
        const idx = `${i + 1}`.magenta
        return {
            value: task.id,
            name: `${idx} ${task.desc}`
        }
    });
    choices.unshift({
        value:'0',
        name: '0'.magenta + ' Cancelar'
    })

    const questions = [{ type: 'list', name: 'id', message: 'Borrar', choices }]

    const { id } = await inquirer.prompt(questions);
    return id;

}

const confirm = async (message) => {
    const question = [
        { type: 'confirm', name: 'ok', message }
    ];
    const { ok } = await inquirer.prompt(question);
    return ok;
}



const showListTask = async (tasks = []) => {
    const choices = tasks.map((task, i) => {
        const idx = `${i + 1}`.magenta
        return {
            value: task.id,
            name: `${idx} ${task.desc}`,
            checked: (task.completedIn) ? true : false
        }
    });


    const questions = [{ type: 'checkbox', name: 'ids', message: 'Selección', choices }]

    const { ids } = await inquirer.prompt(questions);
    return ids;

}

export {
    inquirerMenu,
    pause,
    readInput,
    listTaskDelete,
    confirm,
    showListTask
}