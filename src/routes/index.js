import { Router} from 'express';
import { app_paths } from '../constants/constants.js';
import { createNewMessage, getHomePage, getNewMessageForm } from '../controllers/index/index.controller.js';
const index = Router();

const messages = [
    {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

index.get(app_paths.HOME, getHomePage(messages))
index.get(app_paths.NEW, getNewMessageForm)
index.post(app_paths.NEW, createNewMessage(messages))

export { index }
