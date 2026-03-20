import { Router} from 'express';
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

index.get('/', (req, res) => res.render('index', { title: 'Mini MessageBoard', messages: messages }))

export { index }
