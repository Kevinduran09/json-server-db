// middleware.js
module.exports = (req, res, next) => {
  const send = res.send;

  res.send = function (body) {
    // Verifica si hay query "select"
    if (req.query.select) {
      try {
        const fields = req.query.select.split(',');
        const data = JSON.parse(body);

        const filterFields = (item) =>
          fields.reduce((acc, field) => {
            if (item[field] !== undefined) acc[field] = item[field];
            return acc;
          }, {});

        const filtered = Array.isArray(data)
          ? data.map(filterFields)
          : filterFields(data);

        return send.call(this, JSON.stringify(filtered));
      } catch (e) {
        return send.call(this, body);
      }
    }

    return send.call(this, body);
  };

  next();
};
