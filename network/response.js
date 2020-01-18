const statusMessages = {
  '200': 'Done',
  '201': 'Created',
  '400': 'Invalid format',
  '500': 'Internal error'
}

exports.sucess = function(req, res, message, status = 200) {
  let statusMessage = message;

  if(!message) statusMessage = statusMessages[status];

  res.status(status || 200).send({
    error: "",
    body: statusMessage
  });
};

exports.error = function(req, res, message, status, details) {
  console.error('[response error]', details);

  res.status(status || 500).send({
    error: message,
    body: '',
  });
};