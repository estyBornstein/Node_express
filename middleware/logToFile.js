import { appendFile } from "fs/promises"

function logToFile(req, res, next)  {

    appendFile("log.txt", `${req.method} ${req.url}`)
    next();
}
export default logToFile;