

const newError = (status, title , message, errors)=> {
const err = new Error(message);
err.status = status;
err.title = title;
err.errors = errors
    return next(err);
}

module.exports = {
    newError
  };