const express = require("express")
const router = express.Router()
// var fetchuser = require("../middleware/fetchuser")
const bookAppointment = require("../Models/BookAppointment")
const { body, validationResult } = require("express-validator")
// const user = require("../models/user")

// route 1: sending appointment message using: POST "/api/client/send"

router.post("/send", [
    body('name', "Name should not be empty").isLength({ min: 1 }),
    // body('doctorName', "doctor's name should not be empty").isLength({ min: 1 }),
    body('problemDesc', "Enter the complete description").isLength({ min: 5 }),


], async (req, res) => {
    try {
        const { email, name, doctorName, problemDesc, date} = req.body
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        
        const appMsg = new bookAppointment({
            email, name, doctorName, problemDesc,date
        })
        const sentMsg = await appMsg.save()
        res.json(sentMsg)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error")
    }
})

router.post("/getAppointmentList", async (req, res) => {
    try {
        const { email } = req.body
        // const to = req.params.inID
        // let chatIdArr = []
        // chatIdArr.push(req.user.id)
        // console.log(to)
        // chatIdArr.push(to)
        // chatIdArr.sort()
        // console.log(chatIdArr)
        const AllMsg = await bookAppointment.find({ email })
        res.send(AllMsg)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error")
    }
})



module.exports = router