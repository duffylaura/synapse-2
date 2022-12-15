const router = require("express").Router();
const { Membership, User, Group} = require("../../models");
const auth = require("../../utils/auth");

// POST route for CREATE NEW GROUP 
router.post("/", auth, async (req, res) => {
  try {
    const newGroup = await Group.create({
      ...req.body,
      user_id: req.session.user_id,
      include: { model: Group },
      include: { model: User, where: { id: req.session.user_id } },
      include: {model: Membership, where: {user_id: req.session.user_id} }
    });
    res.status(200).json(newGroup);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//GET route for a SINGLE GROUP 
router.get("/:id", async (req, res) => {
  try {
    const groupData = await Group.findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        "id",
        "name",
        "user_id"
      ],
      include: [
       {model: Membership, 
        attributes: ["id", "group_id", "user_id"],
      },
      {
        model: User,
        attributes: ["username", "define"]
      }
    ]});

    if (!groupData) {
        res.status(404).json({ message: "No groups found with this id" });
        return;
      }

    const group = groupData.get({plain: true});
    console.log(group);
    console.log(group.Membership);
    console.log(group.User);

    res.render("network", {
        group, 
        loggedIn: req.session.loggedIn,
    });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//DELETE route for deleting YOUR Groups only
router.delete("/:id", auth, async (req, res) => {
  try {
    const DeleteGroupData = await Group.destroy({
      where: {
        id: req.params.id, //group id
        user_id: req.session.user_id, //user_id
      },
    });
    if (!DeleteGroupData) {
      res.status(404).json({ message: "No group found with this id!" });
      return;
    }
    res.status(200).json(DeleteGroupData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;