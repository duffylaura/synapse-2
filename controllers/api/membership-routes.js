const router = require("express").Router();
const { User, Group, Membership } = require("../../models");
const auth = require("../../utils/auth");

//CREATE membership // pass group id 
router.post('/:id', auth, async (req, res) => {
    try {
        const newMembership = await Membership.create({
            ...req.body,
            user_id: req.session.user_id,
            include: {model: User, where: {id: req.session.user_id}},
            include: {model: Group, where: {id: req.params.id} },
        });
        res.status(200).json(newMembership);
    } catch (err) {
        console.log(err) 
            console.log(err);
            res.status(400).json(err); 
        }
});

module.exports = router;