const mongoose = require("mongoose");
const Member = require("../models/member");

exports.getAllMembers = async (req, res) => {
    try {
        const members = await Member.find({});
        res.status(200).json({
            data: members,
            success: true,
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.getMemberById = async (req, res) => {
    const { id } = req.params;
    try {
        const member = await Member.findById(id);
        res.status(200).json({
            data: member,
            success: true,
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

