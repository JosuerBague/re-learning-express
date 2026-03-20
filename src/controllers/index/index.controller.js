import { app_paths, views } from './../../constants/constants.js'
import {CustomBadRequestError} from './../../errors/custom-bad-request-error.js'
import {CustomNotFoundError} from './../../errors/custom-not-found-error.js'

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
        id: messages.length + 1,
        text: data.message,
        user: data.author,
        added: new Date(),
    })

    res.redirect(app_paths.HOME)
}

const getSpecificMessage = (messages) => (req, res) => {
    const match = messages.find((m) => m.id === Number(req.query.id));

    if (!match) {
        throw new CustomNotFoundError(`Unable to find the requested message!`)
    }

    res.render(views.MESSAGE_ITEM, { title: `Message ID: ${match.id}`, author: match.author, date: match.added, message: match.text})
}

export { getHomePage, getNewMessageForm, createNewMessage, getSpecificMessage }
