import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '../imports/db/TasksCollection';
import { Accounts } from 'meteor/accounts-base';
import '../imports/api/TasksMethods';
import '../imports/api/TaskPublications';

const insertTask = (taskText, user) =>
  TasksCollection.insert({
    text: taskText,
    userId: user._id,
    createdAt: new Date(),
  });

const SEED_USERNAME = 'Ahsan';
const SEED_PASSWORD = 'Ahsan';

Meteor.startup(() => {

  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  const user = Accounts.findUserByUsername(SEED_USERNAME);

  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task',
      'Eighth Task',
      'Ninth Task',
      'Tenth Task'
    ].forEach(insertTask)
  }
});
