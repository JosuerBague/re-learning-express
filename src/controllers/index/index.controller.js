import { app_paths, views } from './../../constants/constants.js'
import {CustomBadRequestError} from './../../errors/custom-bad-request-error.js'

const getHomePage = (messages) => (req, res) => {
    res.render(views.HOME, { title: 'Mini MessageBoard', messages: messages})
}

const getNewMessageForm = (req, res) => {
    res.render(views.FORM, { title: 'Mini MessageBoard - New'})
}

const createNewMessage = (messages) => (req, res) => {
    const { message, author }= req.body

    if (!message || !author) {
        throw new CustomBadRequestError('Cannot create new message with empty body!')
    }

    messages.push({
        text: data.message,
        user: data.author,
        added: new Date(),
    })

    res.redirect(app_paths.HOME)
}

export { getHomePage, getNewMessageForm, createNewMessage }
