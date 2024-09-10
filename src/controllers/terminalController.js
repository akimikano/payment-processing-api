
function terminalController() {

    const getAll = (req, res, next) => {
        return res.json([1, 2, 3]);
    };

    const create = (req, res, next) => {
        console.log(req.body)
        return res.json({"success": true})
    }

    return {
        getAll,
        create
    };
}

module.exports = terminalController;
