const router = require("express").Router();
const {User, Group, Membership} = require('../models');
const auth = require('../utils/auth');

//get all groups that logged in user has membership in 
//render them to profile hbs
router.get('/', auth, async(req, res)=>{
    try{
        const allMembershipData = await Membership.findAll({
            where: {
                user_id: req.session.user_id,
            },
            include: [
                {
                model: Group,
                attributes: ["id", "name"],
                },
            ],
        });
        const groups = allMembershipData.map((groups)=>groups.get({plain: true}));
        console.log(groups, "test");
        res.render('profile', {
            groups, 
            loggedIn: true, 
            username: req.session.username,
        });
    } catch (err) {
        console.log(err); 
        res.status(500).json(err); 
    }
});

//get the "add new group" form hbs so that the 
//logged in user can add a new group if they want 

router.get('/newGroup', auth, async (req, res)=> {
    res.render('newGroup');
});

router.get('/', auth, async(req,res) =>{
    try{
        const user = await User.findOne({
            where:{
                id: req.session.id
            }
        })
        res.render('profile',{
            user,
            loggedIn: true,
            username: req.session.username
        })
    }catch (err) {
        console.log(err); 
        res.status(500).json(err); 
}
});

module.exports = router;