import React from 'react';
import { Card } from 'react-bootstrap';
import { Pencil, Trash, CheckCircleFill, Circle, ArrowClockwise } from 'react-bootstrap-icons';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'danger';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'secondary';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Done':
        return <CheckCircleFill className="text-success" />;
      case 'In Progress':
        return <ArrowClockwise className="text-primary" />;
      default:
        return <Circle className="text-secondary" />;
    }
  };

  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <Card key={task.id} className="mb-3 border-0 shadow-sm rounded-4">
          <Card.Body className="d-flex justify-content-between align-items-center p-3">
            <div className="d-flex align-items-center gap-3 flex-grow-1">
              <span className="fs-5">{getStatusIcon(task.status)}</span>
              <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2 flex-grow-1">
                <h5 className="mb-0 me-2">{task.name}</h5>
                <div className="d-flex gap-2">
                  <span className={`badge bg-${getPriorityColor(task.priority)} rounded-pill`}>
                    {task.priority}
                  </span>
                  <span className="badge bg-light text-dark rounded-pill">
                    {task.status}
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <button
                className="btn btn-light rounded-circle p-2"
                onClick={() => showEditForm(task)}
              >
                <Pencil size={16} />
              </button>
              <button
                className="btn btn-light rounded-circle p-2"
                onClick={() => deleteTask(task.id)}
              >
                <Trash size={16} />
              </button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;