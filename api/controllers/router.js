async function healthz(req, res, next) {
    return res.status(200).json("Server Ready")
}

module.exports = {
    healthz,
};