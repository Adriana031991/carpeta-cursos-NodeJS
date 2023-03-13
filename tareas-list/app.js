
import { confirm, inquirerMenu, pause, readInput, listTaskDelete, showListTask } from './helpers/inquirer.js';
import 'colors';
import Tasks from './models/tareas.js';
import { readDb, saveDB } from './helpers/saveDB.js';


console.clear();

const main = async () => {

    let opt = '';
    const tasks = new Tasks();
    const infoTasks = readDb();

    if (infoTasks) {
        tasks.chargeTaskFromArray(infoTasks);
    }


    do {
        // console.clear()
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await readInput('Descripción:');
                tasks.createTask(desc);
                break;

            case '2':
                tasks.listAllTasks();
                break;

            case '3':
                tasks.listTasksCompletedPending(true);
                break;

            case '4':
                tasks.listTasksCompletedPending(false);
                break;

            case '5':
                const ids = await showListTask(tasks.listOfTasks);
                tasks.toggleCompleted(ids);
                break;

            case '6':
                const id = await listTaskDelete(tasks.listOfTasks);
                if (id !== '0') {
                    const ok = await confirm('¿Esta seguro?');
                    if(ok) {
                        tasks.deleteTask(id);
                    }
                    
                }

                break;


        }

        saveDB(tasks.listOfTasks);

        await pause();

    } while (opt !== '0');




}

main();