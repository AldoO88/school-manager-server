const { Router } = require('express');
const {
    getAllGroup,
    createGroup,
    getOneGruop,
    updateGroup,
    deleteGroup } = require('../controllers/groups.controller');

const router = Router();

router.get('/', getAllGroup);
router.post('/', createGroup);

router.get('/:groupId', getOneGruop);
router.put('/:groupId', updateGroup);
router.delete('/:groupId', deleteGroup);