interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface CreateTaskRequest {
    title: string;
}

export async function POST() {
  return (
    <div>route</div>
  )
}

export default route