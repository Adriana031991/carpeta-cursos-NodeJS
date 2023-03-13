import Task from "./tarea.js";

class Tasks {

    _listOfTasks = {}

    constructor() {

        this._listOfTasks = {};
    }

    get listOfTasks() {
        const list = [];
        Object.keys(this._listOfTasks).forEach(key => {
            const task = this._listOfTasks[key];
            list.push(task)
        })
        return list;
    }

    createTask(desc = '') {
        const task = new Task(desc);
        this._listOfTasks[task.id] = task;
    }

    chargeTaskFromArray(taskArray = []) {
        taskArray.forEach(task => {
            this._listOfTasks[task.id] = task;
        })
    }

    listAllTasks() {
        this.listOfTasks.forEach((task, i) => {
            const index = `${i + 1}`.magenta;
            const { desc, completedIn } = task;
            const state = (completedIn)
                ? 'Completada'.green
                : 'Pendiente'.red;

            console.log(`${index} ${desc} :: ${state}`);

        });
    }

    listTasksCompletedPending(complete = true) {
        let count = 0;
        this.listOfTasks.forEach((task) => {
            const { desc, completedIn } = task;
            const state = (completedIn)
                ? 'Completada'.cyan
                : 'Pendiente'.cyan;

            if (complete) {
                if (completedIn) {
                    count += 1;
                    console.log(`${count.toString().magenta} ${desc} :: ${state}`);
                }

            } else {
                if (!completedIn) {
                    count += 1;
                    console.log(`${count.toString().magenta} ${desc} :: ${state}`);

                }

            }
        });

    }

    deleteTask(id = '') {
        if (this._listOfTasks[id]) {
            delete this._listOfTasks[id];
        }
    }

    toggleCompleted(ids = []) {
        ids.forEach((id) => {
            const task = this._listOfTasks[id];
            if (!task.completedIn) {
                task.completedIn = new Date().toISOString();
            }
        });

        this.listOfTasks.forEach((task) => {
            if(!ids.includes(task.id)) {
                this._listOfTasks[task.id].completedIn = null;
            }
        })

    }
    
}

export default Tasks