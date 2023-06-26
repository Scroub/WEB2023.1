var express = require('express');
var router = express.Router();
var ProfessorService = require("../services/professor.services")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});

router.get(
    "/listar", 
    (req, res, next) => {
        res.json(ProfessorService.list())
    }
)

router.post(
    "/inserir",
    (req, res, next) => {
        const professor = ProfessorService.register(req.body)
        res.json(professor)
    }
)

router.put(
    "/update/:id",
    (req, res, next) => {
        const professor = ProfessorService.update(req.params.id, req.body)
        res.json(professor)
    }
)

router.delete(
    "/delete/:id",
    (req, res, next) => {
        const ok = ProfessorService.delete(req.params.id)
        if(ok) return res.json({ "sucess": true })
        else return res.json({ "sucess": false })
    }
)

router.get(
    "/retrieve/:id",
    (req, res, next) => {
        const out = ProfessorService.retrieve(req.params.id)
        return res.json(out)
    }
)


module.exports = router;
