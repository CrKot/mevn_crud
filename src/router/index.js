import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import AddTask from '@/components/AddTask';
import DeleteTask from '@/components/task/_id/DeleteTask';
import EditTask from '@/components/task/_id/EditTask';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/addtask',
      name: 'AddTask',
      component: AddTask,
    },
    {
      path: '/task/:id/delete',
      name: 'task-id-delete',
      component: DeleteTask,
    },
    {
      path: '/task/:id/edit',
      name: 'task-id-edit',
      component: EditTask,
    },
  ],
});
