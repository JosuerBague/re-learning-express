import { Router} from 'express';
import { app_paths } from '../constants/constants.js';
import { createNewMessage, getHomePage, getNewMessageForm, getSpecificMessage } from '../controllers/index/index.controller.js';
const index = Router();

const messages = [
    {
      id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

index.get(app_paths.HOME, getHomePage(messages))
index.get(app_paths.NEW, getNewMessageForm)
index.post(app_paths.NEW, createNewMessage(messages))
index.get(app_paths.MESSAGE, getSpecificMessage(messages))

export { index }
