export default(err, req, res, next) => {
    const { message, code } = err.message
    console.log(res)

    res.send({error: err.message }).status(400)
}