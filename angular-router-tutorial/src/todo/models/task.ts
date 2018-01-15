/**
 * model for one task
 */

export interface ITask {
    title: string;
    description: string;
    id: number;
}

export class Task implements ITask{
    public title: string;
    public description: string;
    public id: number;
}