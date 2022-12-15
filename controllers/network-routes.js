const router = require("express").Router();
const {User, Group, Membership} = require('../models');
const auth = require('../utils/auth');

//get all of the users of a group using params.id 
router.get('/', auth, async(req, res)=>{
    try{
        const allUsersInGroupData = await Membership.findAll({
            where: {
                group_id: req.params.id,
            },
            include: [
                {
                    model: User,
                    attributes: ["id", "username", "define"],
                },
            ],
        });
        const users = allUsersInGroupData.map((users)=>users.get({plain: true}));
        console.log(users, "test");
        res.render('network', {
            users, 
            loggedIn: true, 
            username: req.session.username,
        });
    } catch (err) {
        console.log(err); 
        res.status(500).json(err); 
    }
});

//so now network has a route to get all users of a single group 
