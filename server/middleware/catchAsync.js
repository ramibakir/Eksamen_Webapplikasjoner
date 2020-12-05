export default (function) => (req, res, next) => {
    Promise.resolve(function(req, res, next)).catch(next);
;}