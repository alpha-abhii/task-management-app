import { Schema, model, Document} from 'mongoose'

interface ITask extends Document {
    title: string;
    description: string;
    completed: boolean;
}

const TaskSchema = new Schema<ITask>(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        },
    }
)

export default model<ITask>('Task',TaskSchema);